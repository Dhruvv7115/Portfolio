"use client";
import React from "react";
import { cn } from "@/lib/utils";

function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto h-full w-full max-w-5xl bg-white dark:bg-neutral-900 px-4 md:px-10",
        className,
      )}
    >
      {children}
    </div>
  );
}

export default Container;
