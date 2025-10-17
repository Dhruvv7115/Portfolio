"use client";
import React from "react";
import { motion } from "motion/react";

export default function MotionDiv(
  props: React.ComponentProps<typeof motion.div> & {
    children: React.ReactNode;
  },
) {
  return <motion.div {...props} />;
}
