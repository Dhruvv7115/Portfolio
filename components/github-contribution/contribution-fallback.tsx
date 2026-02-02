import React from "react";
import SectionHeading from "../section-heading";

export default function ContributionFallback() {
	const cellSize = 12;
	const cellGap = 4;
	const cellWithGap = cellSize + cellGap;
	const graphWidth = 52 * cellWithGap; // ~52 weeks in a year
	const graphHeight = 7 * cellWithGap;

	return (
		<section className="py-6 px-4 md:px-6">
			<div className="h-4 w-32 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse" />

			{/* Graph Container */}
			<div className="max-w-full overflow-x-scroll overflow-y-visible no-scrollbar pb-2 flex">
				<div className="relative inline-block mx-auto">
					{/* SVG Skeleton */}
					<svg
						width={graphWidth}
						height={graphHeight + 20}
						className="overflow-visible"
					>
						{/* Contribution grid skeleton */}
						<g transform="translate(0, 20)">
							{Array.from({ length: 52 }).map((_, weekIndex) =>
								Array.from({ length: 7 }).map((_, dayIndex) => {
									const x = weekIndex * cellWithGap;
									const y = dayIndex * cellWithGap;

									return (
										<rect
											key={`${weekIndex}-${dayIndex}`}
											x={x}
											y={y}
											width={cellSize}
											height={cellSize}
											rx={3}
											className="fill-neutral-200 dark:fill-neutral-800 animate-pulse"
											stroke="none"
										/>
									);
								}),
							)}
						</g>
					</svg>
				</div>
			</div>

			{/* Footer Skeleton */}
			<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mt-4 text-xs text-neutral-500">
				<div className="h-4 w-48 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse" />
				<div className="flex items-center gap-1">
					<div className="h-4 w-32 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse" />
				</div>
			</div>
		</section>
	);
}
