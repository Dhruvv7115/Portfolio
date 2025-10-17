import React from "react";
import { Link } from "next-view-transitions";
import { motion } from "motion/react";
import { Project } from "@/types/project";
import Image from "next/image";
import { truncate } from "@/utils/truncate";

export default function ProjectCard({
  project,
  idx,
}: {
  project: Project;
  idx: number;
}) {
  return (
    <motion.div
      initial={{
        y: 10,
        opacity: 0,
        filter: "blur(10px)",
        boxShadow: "none",
      }}
      whileInView={{
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transition: {
          duration: 0.3,
          delay: idx * 0.2,
          ease: "easeInOut",
        },
      }}
      whileHover={{
        boxShadow: "var(--shadow-aceternity)",
        transition: {
          duration: 0.3,
          delay: 0,
          ease: "easeInOut",
        },
      }}
      className="group group relative mb-4 rounded-2xl"
      viewport={{ once: true }}
    >
      <Link href={project?.href} target="_blank">
        <Image
          src={project?.image}
          alt={project?.title}
          height={300}
          width={300}
          className="w-full rounded-xl object-cover transition duration-200 group-hover:scale-[1.02] h-45"
        />
        <div className="flex flex-1 flex-col justify-between py-4 transition-all duration-300 group-hover:px-4">
          <div>
            <h2 className="z-20 mt-2 font-medium text-lg tracking-tight text-neutral-500 dark:text-neutral-200">
              {project?.title}
            </h2>
            <p className="mt-2 max-w-[14rem] text-sm text-neutral-500 dark:text-neutral-400">
              {truncate(project?.description || "", 70)}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
