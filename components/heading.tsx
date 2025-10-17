"use client";
import React from "react";
import { motion } from "motion/react";

export const Heading = ({
  Tag = "h1",
  children,
  className = "",
}: {
  Tag?: "h1" | "h2";
  children: string;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <Tag
        className={`text-primary dark:text-primary-dark px-4 md:pl-8 md:pr-4 text-3xl font-bold tracking-tighter drop-shadow-primary dark:drop-shadow-primary-dark drop-shadow-lg/30 md:text-5xl ${className}`}
      >
        {children}
      </Tag>
    </motion.div>
  );
};
