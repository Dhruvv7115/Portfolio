import React from "react";
import { Experience } from "@/types/experience";
import { motion } from "motion/react";
import Image from "next/image";
import { IconMapPinFilled } from "@tabler/icons-react";

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  return (
    <div className="flex flex-col justify-between md:flex-row md:items-start">
      <div className="max-w-[80%]">
        <h2 className="font-medium text-neutral-900 dark:text-neutral-100">
          {experience.company}
        </h2>
        <div className="flex flex-col gap-2 py-2 sm:flex-row sm:items-center">
          <p className="text-sm text-neutral-800 dark:text-neutral-200">
            {experience.title}
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            {experience.date}
          </p>
        </div>
        <p className="text-sm text-neutral-500">{experience.description}</p>
        <div className="my-4 flex flex-wrap gap-2">
          {experience.techStack.map((tech, index) => (
            <div
              key={tech.name + index}
              className="flex items-center justify-start rounded-full border border-neutral-200 bg-neutral-100 p-1 text-xs text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 -mr-3 hover:z-10 cursor-pointer"
            >
              <motion.span
                initial="rest"
                whileHover="hover"
                transition={{
                  duration: 0.3,
                  delay: 0,
                  ease: "easeInOut",
                }}
                variants={{
                  rest: { paddingRight: 0 },
                  hover: { paddingRight: 2 },
                }}
                className="flex items-center"
              >
                <tech.icon size={20} className="h-4 w-4 shrink-0" />
                <motion.span
                  variants={{
                    rest: { width: 0 },
                    hover: { width: "auto" },
                  }}
                  transition={{
                    duration: 0.3,
                    delay: 0,
                    ease: "easeInOut",
                  }}
                  className="overflow-hidden whitespace-nowrap text-neutral-500 dark:text-neutral-200"
                >
                  &nbsp;{tech.name}
                </motion.span>
              </motion.span>
            </div>
          ))}
        </div>
        <div className="text-sm text-neutral-500 flex items-center gap-2">
          <IconMapPinFilled className="h-5 w-5 shrink-0 inline-block text-neutral-400" />
          <span>{experience.location}</span>
        </div>
      </div>
      <Image
        height={100}
        width={100}
        src={experience.companyLogo}
        alt={experience.company}
        className="hidden md:block"
      />
    </div>
  );
}
