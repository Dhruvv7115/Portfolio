import React from "react";
import Container from "@/components/container";
import { getBlogFrontMatterBySlug, getSingleBlog } from "@/utils/blogService";
import { redirect } from "next/navigation";
import Scales from "@/components/scales";
import { Metadata } from "next";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const { slug } = await params;
	const frontmatter = await getBlogFrontMatterBySlug(slug);
	if (!frontmatter) {
		return {
			title: "Blog not found",
		};
	}
	return {
		title: frontmatter?.title + "| Dhruv Sabharwal",
		description: frontmatter?.description,
	};
}

export default async function SingleBlog({
	params,
}: {
	params: Promise<{
		slug: string;
	}>;
}) {
	const { slug } = await params;
	const blog = await getSingleBlog(slug);
	if (!blog) {
		redirect("/blog");
	}
	const { content, frontmatter } = blog;
	return (
		<div className="flex min-h-screen items-start justify-start">
			<Container className="relative pt-10 min-h-screen px-10 md:pt-20 md:pb-10">
				<Scales />
				<img
					src={frontmatter?.image}
					alt={frontmatter?.title}
					className="rouned-full mx-auto md:mb-20 mb-10 max-h-96 w-full max-w-2xl rounded-2xl object-cover shadow-xl"
				/>
				<div className="prose prose-sm dark:prose-invert mx-auto max-w-2xl">
					{content}
				</div>
			</Container>
		</div>
	);
}
