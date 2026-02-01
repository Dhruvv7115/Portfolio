"use client";

import { ReactElement, useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import Link from "next/link";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dumbbell } from "lucide-react";
import { IconBolt, IconFlameFilled } from "@tabler/icons-react";

interface ContributionDay {
	date: string;
	contributionCount: number;
}

interface ContributionWeek {
	contributionDays: ContributionDay[];
}

interface Props {
	username: string;
	token: string;
}

export default function GitHubContributions({ username, token }: Props) {
	const [contributions, setContributions] = useState<ContributionWeek[]>([]);
	const [totalContributions, setTotalContributions] = useState(0);
	const [loading, setLoading] = useState(true);
	const [hoveredDay, setHoveredDay] = useState<{
		count: number;
		date: string;
		x: number;
		y: number;
	} | null>(null);

	useEffect(() => {
		fetchContributions();
	}, [username, token]);

	const fetchContributions = async () => {
		const now = new Date();

		// toDate = yesterday (local, end of day)
		const to = new Date(
			now.getFullYear(),
			now.getMonth(),
			now.getDate() - 1,
			23,
			59,
			59,
			999,
		);

		// fromDate = tomorrow, one year before (local, start of day)
		const from = new Date(
			now.getFullYear() - 1,
			now.getMonth(),
			now.getDate() + 1,
			23,
			59,
			59,
			999,
		);

		const toDate = to.toISOString();
		const fromDate = from.toISOString();

		console.log(fromDate, toDate);

		const query = `
      query($userName: String!, $from: DateTime!, $to: DateTime!) {
        user(login: $userName) {
          contributionsCollection(from: $from, to: $to) {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                }
              }
            }
          }
        }
      }
    `;

		try {
			const response = await fetch("https://api.github.com/graphql", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify({
					query,
					variables: {
						userName: username,
						from: fromDate,
						to: toDate,
					},
				}),
			});

			const data = await response.json();

			if (data.errors) {
				console.error("GraphQL errors:", data.errors);
				setLoading(false);
				return;
			}

			const calendar =
				data.data.user.contributionsCollection.contributionCalendar;
			setContributions(calendar.weeks);
			setTotalContributions(calendar.totalContributions);
			setLoading(false);
		} catch (error) {
			console.error("Error fetching contributions:", error);
			setLoading(false);
		}
	};

	const getContributionColor = (count: number): string => {
		if (count === 0) return "#262626";
		if (count <= 3) return "#525252";
		if (count <= 6) return "#737373";
		if (count <= 9) return "#a1a1a1";
		return "#e5e5e5";
	};

	const getContributionMessage = (count: number): ReactElement => {
		const random = Math.floor(Math.random() * 10);
		if (count === 1) return <div>{count} contribution</div>;
		if (count > 9)
			return (
				<div className="flex items-center gap-1">
					{random <= 3 ? (
						<Dumbbell className="h-4 w-4" />
					) : random <= 6 ? (
						<IconBolt className="h-4 w-4" />
					) : (
						<IconFlameFilled className="h-4 w-4" />
					)}
					<div>{count} contributions</div>
				</div>
			);
		return <div>{count} contributions</div>;
	};

	const getMonthLabels = () => {
		const months: { label: string; index: number }[] = [];
		const monthNames = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		];
		let currentMonth = -1;

		contributions.forEach((week, index) => {
			const firstDay = week.contributionDays[0];
			if (firstDay) {
				const date = new Date(firstDay.date);
				const month = date.getMonth();

				if (
					month !== currentMonth &&
					(months.length === 0 || index - months[months.length - 1].index >= 2)
				) {
					months.push({ label: monthNames[month], index });
					currentMonth = month;
				}
			}
		});

		return months;
	};

	if (loading) {
		return (
			<section className="py-6 px-4 md:px-6">
				<SectionHeading>GitHub Contributions</SectionHeading>
				<div className="text-neutral-500 text-sm">Loading contributions...</div>
			</section>
		);
	}

	const monthLabels = getMonthLabels();
	const cellSize = 13;
	const cellGap = 4;
	const cellWithGap = cellSize + cellGap;
	const graphWidth = contributions.length * cellWithGap;
	const graphHeight = 7 * cellWithGap;

	return (
		<section className="py-6 px-4 md:px-6">
			<SectionHeading className="mb-4">GitHub Contributions</SectionHeading>

			{/* Graph Container */}
			<div className="max-w-full overflow-x-scroll overflow-y-visible no-scrollbar pb-2 flex">
				<div className="relative inline-block mx-auto">
					{/* SVG Container */}
					<svg
						width={graphWidth}
						height={graphHeight + 20}
						className="overflow-visible"
					>
						{/* Month labels */}
						<g>
							{monthLabels.map((month, i) => (
								<text
									key={i}
									x={month.index * cellWithGap}
									y={10}
									fontSize="12"
									fill="#737373"
									className="select-none"
								>
									{month.label}
								</text>
							))}
						</g>

						{/* Contribution grid */}
						<g transform="translate(0, 20)">
							{contributions.map((week, weekIndex) =>
								week.contributionDays.map((day, dayIndex) => {
									const x = weekIndex * cellWithGap;
									const y = dayIndex * cellWithGap;
									const color = getContributionColor(day.contributionCount);

									return (
										<Tooltip>
											<TooltipTrigger
												key={`${weekIndex}-${dayIndex}`}
												asChild
											>
												<rect
													x={x}
													y={y}
													width={cellSize}
													height={cellSize}
													rx={3}
													fill={color}
													className="cursor-pointer transition-all hover:stroke-neutral-400"
													strokeWidth={
														hoveredDay?.x === x && hoveredDay?.y === y ? 1 : 0
													}
													stroke="#a3a3a3"
													onMouseEnter={() => {
														setHoveredDay({
															count: day.contributionCount,
															date: day.date,
															x,
															y,
														});
													}}
													onMouseLeave={() => setHoveredDay(null)}
												/>
											</TooltipTrigger>
											<TooltipContent className="text-black">
												<div className="font-semibold whitespace-nowrap">
													{getContributionMessage(day.contributionCount)}
												</div>
												<div className="text-neutral-400 text-[11px] mt-0.5">
													{new Date(day.date).toLocaleDateString("en-US", {
														month: "short",
														day: "numeric",
														year: "numeric",
													})}
												</div>
											</TooltipContent>
										</Tooltip>
									);
								}),
							)}
						</g>
					</svg>
				</div>
			</div>

			{/* Footer */}
			<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mt-4 text-xs text-neutral-500">
				<div className="text-muted-foreground">
					{totalContributions} contribution
					{totalContributions !== 1 ? "s" : ""} in the last year on{" "}
					<Link
						className="font-medium underline underline-offset-4"
						href={"https://github.com/dhruvv7115"}
					>
						Github
					</Link>
				</div>

				{/* Legend */}
				<div className="flex items-center gap-1">
					<span className="text-muted-foreground mr-1">Less</span>
					<svg
						width="13"
						height="13"
					>
						<rect
							width="13"
							height="13"
							rx="3"
							fill="#262626"
						/>
					</svg>
					<svg
						width="13"
						height="13"
					>
						<rect
							width="13"
							height="13"
							rx="3"
							fill="#525252"
						/>
					</svg>
					
					<svg
						width="13"
						height="13"
					>
						<rect
							width="13"
							height="13"
							rx="3"
							fill="#737373"
						/>
					</svg>
					<svg
						width="13"
						height="13"
					>
						<rect
							width="13"
							height="13"
							rx="3"
							fill="#a1a1a1"
						/>
					</svg>
					<svg
						width="13"
						height="13"
					>
						<rect
							width="13"
							height="13"
							rx="3"
							fill="#e5e5e5"
						/>
					</svg>
					<span className="text-muted-foreground ml-1">More</span>
				</div>
			</div>
		</section>
	);
}
