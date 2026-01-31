import React from "react";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import Container from "@/components/container";
import { Metadata } from "next";
import { getAllBlogs } from "@/utils/blogService";
import Link from "next/link";
import Scales from "@/components/scales";
import { truncate } from "@/utils/truncate";
import Image from "next/image";
import MotionDiv from "@/components/motion-div";

export const metadata: Metadata = {
  title: "Blogs | Dhruv Sabharwal",
  description:
    "All my blogs and articles on technology, programming, and innovation.",
};

export default async function Blogs() {
  const allBlogs = await getAllBlogs();
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="relative min-h-screen pt-10 md:pt-20 md:pb-10">
        <Scales />
        <Heading>Blogs</Heading>
        <Subheading className="mb-6">
          Explore my thoughts on technology, programming, and innovation. Stay
          updated with my latest articles and insights.
        </Subheading>
        <div className="flex flex-col gap-10 px-4 md:px-6 py-6 shadow-section-inset">
          {allBlogs.map((blog, idx) => (
            <MotionDiv
              key={blog.slug}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.3,
                delay: idx * 0.1,
                ease: "easeInOut",
              }}
            >
              <Link
                href={`/blog/${blog.slug}`}
                key={blog.slug}
                className="flex flex-row gap-4 w-full"
              >
                <Image
                  src={blog?.image || ""}
                  alt={blog.title || "Blog Image"}
                  width={150}
                  height={150}
                  className="rounded-xl min-h-20 w-24 object-cover"
                />
                <div className="w-full">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <h2 className="text-primary text-base font-bold tracking-tight">
                      {blog.title}
                    </h2>
                    <p className="text-secondary text-sm">
                      {new Date(blog?.date || "").toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                  <p className="text-secondary text-sm max-w-md pt-2">
                    {truncate(blog?.description || "", 92)}
                  </p>
                </div>
              </Link>
            </MotionDiv>
          ))}
        </div>
      </Container>
    </div>
  );
}
