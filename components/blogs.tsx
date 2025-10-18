import { getAllBlogs } from "@/utils/blogService";
import { Link } from "next-view-transitions";
import React from "react";
import SectionHeading from "@/components/section-heading";
import MotionDiv from "@/components/motion-div";
import { truncate } from "@/utils/truncate";

export default async function Blogs() {
  const blogs = await getAllBlogs();
  return (
    <div className="py-6 px-4 md:px-6">
      <SectionHeading delay={0.2} className="mb-4">
        Sharing knowledge as I learn
      </SectionHeading>
      <div className="flex flex-col gap-10">
        {blogs.slice(0, 3).map((blog, idx) => (
          <MotionDiv
            key={blog.slug}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.3,
              delay: idx * 0.2,
              ease: "easeInOut",
            }}
            viewport={{
              once: true,
            }}
          >
            <Link href={`/blog/${blog.slug}`}>
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <h2 className="text-primary text-lg font-bold tracking-tight">
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
              <p className="text-secondary text-sm max-w-lg pt-2">
                {truncate(blog?.description || "", 150)}
              </p>
            </Link>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
}
