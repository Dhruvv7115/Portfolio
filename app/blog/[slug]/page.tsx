import React from "react";
import Container from "@/components/container";
import { getBlogFrontMatterBySlug, getSingleBlog } from "@/utils/blogService";
import { redirect } from "next/navigation";
import Image from "next/image";
import Scales from "@/components/scales";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
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
      <Container className="relative flex flex-col items-center min-h-screen px-10 md:pt-20 md:pb-10">
        <Scales />
        <Image
          src={frontmatter?.image}
          alt={frontmatter?.title}
          width="775"
          height="775"
          className="rounded-4xl my-8 shadow-2xl max-h-108"
        />
        <div className="prose md:min-w-3xl my-8">{content}</div>
      </Container>
    </div>
  );
}

