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
        className={`text-primary px-4 md:px-6 text-3xl font-bold tracking-tighter drop-shadow-lg md:text-5xl ${className}`}
      >
        {children}
      </Tag>
    </motion.div>
  );
};
