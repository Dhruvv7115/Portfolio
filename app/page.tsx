import React from "react";
import Container from "../components/container";
import Projects from "../components/projects";
import { Heading } from "../components/heading";
import { Subheading } from "../components/subheading";
import Blogs from "@/components/blogs";
import Testimonials from "@/components/testimonials";
import Scales from "@/components/scales";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { Metadata } from "next";
import LandingContactForm from "@/components/landing-contact-form";
import Experience from "@/components/experience";
import GitHubContributions from "@/components/github-contribution/github-contributions";

export const metadata: Metadata = {
	title: "Portfolio | Dhruv Sabharwal",
	description:
		"A professional portfolio website of Dhruv Sabharwal showcases his skills and projects.",
};

export default function Home() {
	return (
		<div className="flex min-h-screen items-start justify-start">
			<Container className="relative min-h-screen pt-10 md:pt-20 md:pb-10">
				<Scales />
				<div className="flex flex-col sm:flex-row sm:items-center">
					<div>
						<Heading>Dhruv Sabharwal</Heading>
					</div>
					<div className="text-secondary relative order-first mx-4 mb-2 flex w-fit justify-center overflow-hidden rounded-md px-2 py-0.5 pt-0 text-sm shadow-[var(--shadow-aceternity)] sm:order-last sm:mx-0 sm:mb-0">
						<LayoutTextFlip
							words={[
								"Software Developer",
								"Software Engineer",
								"Frontend Developer",
								"Full Stack Developer",
								"Backend Developer",
								"Design Engineer",
							]}
						/>
					</div>
				</div>
				<Subheading className="mb-6">
					I am a passionate software developer in building scalable and
					user-friendly web applications. I am currently interning as a React
					Developer at Katyayani Organics.
				</Subheading>
				<Projects limit={3} />
				<GitHubContributions
					username={process.env.NEXT_PUBLIC_GITHUB_USERNAME!}
					token={process.env.NEXT_PUBLIC_GITHUB_TOKEN!}
				/>
				<Blogs />
				<Experience />
				<Testimonials />
				<LandingContactForm />
			</Container>
		</div>
	);
}
