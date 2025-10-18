"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const Subheading = ({
  Tag = "h3",
  children,
  className = "",
}: {
  Tag?: "h3" | "h4";
  children: string;
  className?: string;
}) => {
  const c = cn(
    "text-secondary max-w-xl px-4 md:px-6 pt-4 text-sm md:text-base",
    className,
  );
  console.log(c);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.2, ease: "easeInOut", delay: 0.2 }}
      viewport={{ once: true }}
    >
      <Tag
        className={cn(
          "text-secondary max-w-xl px-4 md:px-6 pt-4 text-sm md:text-base",
          className,
        )}
      >
        {children}
      </Tag>
    </motion.div>
  );
};
