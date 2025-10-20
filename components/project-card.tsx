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
      className="group group relative rounded-2xl h-full min-h-[360px]"
      viewport={{ once: true }}
    >
      <Link
        href={project?.href}
        target="_blank"
        className="flex h-full flex-col"
      >
        <Image
          src={project?.image}
          alt={project?.title}
          height={500}
          width={500}
          loading="lazy"
          decoding="async"
          className="w-full rounded-xl object-cover transition duration-200 group-hover:scale-[1.02] min-h-48"
        />
        <div className="flex flex-1 flex-col gap-2 py-4 transition-all duration-300 group-hover:px-4">
          <div>
            <h2 className="z-20 mt-2 font-medium text-lg tracking-tight text-neutral-500 dark:text-neutral-200">
              {project?.title}
            </h2>
            <p className="mt-2 max-w-[14rem] text-sm text-neutral-500 dark:text-neutral-400">
              {truncate(project?.description || "", 70)}
            </p>
          </div>
          <div className="flex max-w-[14rem] flex-wrap gap-1 mt-auto">
            {project.techStack.map((tech, index) => (
              <motion.div
                initial="rest"
                whileHover="hover"
                transition={{
                  duration: 0.3,
                  delay: 0,
                  ease: "easeInOut",
                }}
                key={tech.name + index}
                className="flex items-center justify-start rounded-full border border-neutral-200 bg-neutral-100 p-1 text-xs text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 -mr-3 hover:z-10"
              >
                <motion.span
                  variants={{
                    rest: { paddingRight: 0 },
                    hover: { paddingRight: 2 },
                  }}
                >
                  <tech.icon size={20} className="h-4 w-4 shrink-0" />
                </motion.span>
                <motion.span
                  variants={{
                    rest: { width: 0 },
                    hover: { width: "auto" },
                  }}
                  className="overflow-hidden whitespace-nowrap text-neutral-500 dark:text-neutral-200"
                >
                  &nbsp;{tech.name}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
