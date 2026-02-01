import React from "react";
import SectionHeading from "@/components/section-heading";
import { Subheading } from "@/components/subheading";
import Link from "next/link";
// import { GitHubIcon, GmailIcon, LinkedInIcon } from "@/components/brand-svgs";
// import { Button } from "@/components/ui/button";
// import { IconBrandXFilled } from "@tabler/icons-react";
import { Social } from "@/types/socials";
import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";

const socials: Social[] = [
	{
		name: "Github",
		href: "https://github.com/dhruvv7115",
		account: "@dhruvv7115",
		image: "/socials/github.webp",
	},
	{
		name: "Linkedin",
		href: "https://linkedin.com/in/dhruvv7115",
		account: "@dhruvv7115",
		image: "/socials/linkedin.webp",
	},
	{
		name: "X (Twitter)",
		href: "https://x.com/dhruvv7115",
		account: "@dhruvv7115",
		image: "/socials/x.webp",
		color: "#000000",
		darkColor: "#ffffff",
	},
	// {
	//   name: "Instagram",
	// 	href: "https://x.com/dhruvv7115",
	// 	image: "IconBrandXFilled",
	// },
	// {
	//   name: "Gmail",
	//   href: "mailto:dhruvsabharwalh7@gmail.com",
	//   image: "",
	// },
];

export default function Socials() {
	return (
		<div className="flex flex-col md:py-6 py-4 shadow-section">
			<SectionHeading className="ml-4 md:ml-6">Let’s Connect</SectionHeading>
			<Subheading className="mb-4">
				Prefer reaching out directly? You can find me on these platforms or just
				drop me an email.
			</Subheading>

			<div className="grid md:grid-cols-[24px_1fr_24px] grid-cols-[16px_1fr_16px] items-stretch">
				{/* LEFT RAIL */}
				<div className="grid h-full grid-rows-3 md:gap-6 gap-4 border-r ">
					{socials.map((social) => (
						<div className="border-y"></div>
					))}
				</div>

				{/* CENTER CONTENT */}
				<div className="grid grid-cols-1 md:gap-6 gap-4">
					{socials.map((social) => (
						<Link
							key={social.href}
							href={social.href}
							target="_blank"
							rel="noreferrer"
							className="group flex items-center gap-4 p-4 pr-2 border-y  hover:bg-[#f4f4f5]/50
              dark:bg-neutral-900 dark:hover:bg-neutral-800/20
              transition duration-300"
						>
							<div className="relative size-12 shrink-0">
								<Image
									src={social.image}
									alt={social.name}
									width={48}
									height={48}
									className="rounded-xl border corner-squircle"
								/>
							</div>

							<div className="flex-1">
								<h3 className="font-medium group-hover:underline underline-offset-4">
									{social.name}
								</h3>
								<p className="text-sm text-muted-foreground">
									{social.account}
								</p>
							</div>

							<IconArrowRight
								strokeWidth={1}
								className="transition-all duration-300 group-hover:-rotate-45"
							/>
						</Link>
					))}
				</div>

				{/* RIGHT RAIL */}
				<div className="grid h-full grid-rows-3 md:gap-6 gap-4 border-l">
					{socials.map((social) => (
						<div className="border-y"></div>
					))}
				</div>
			</div>
		</div>
	);
}
