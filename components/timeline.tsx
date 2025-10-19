import React from "react";
import { IconRosetteDiscountCheckFilled as CompletedIcon } from "@tabler/icons-react";
import { motion } from "motion/react";
import SectionHeading from "@/components/section-heading";

interface timelineData {
  year: number;
  content: {
    title: string;
    date: string;
    description: string;
  }[];
}

export const Timeline = () => {
  const timelineData: timelineData[] = [
    {
      year: 2025,
      content: [
        {
          title: "Full Stack Developer Intern",
          date: "June 2025",
          description:
            "Interning at Katyayani Organics, focusing on React development.",
        },
      ],
    },
    {
      year: 2024,
      content: [
        {
          title: "Started My Coding Journey",
          date: "Jan 2024",
          description:
            "Began learning HTML, CSS, and JavaScript, building personal projects and exploring web development fundamentals.",
        },
        {
          title: "Built Amazon Clone",
          date: "Mar 2024",
          description:
            "Designed and developed a functional Amazon.com clone using HTML, CSS, and JavaScript.",
        },
        {
          title: "Basic DSA in C++",
          date: "May 2024",
          description:
            "Learned the basics of Data Structures and Algorithms in C++.",
        },
        {
          title: "React and MERN Stack",
          date: "Aug 2024",
          description:
            "Started learning React and built several small projects to understand component-based architecture.",
        },
      ],
    },
    {
      year: 2023,
      content: [
        {
          title: "High School Graduation",
          date: "May 2023",
          description:
            "Graduated from high school with a focus on science and mathematics.",
        },
        {
          title: "First Coding Experience",
          date: "Sep 2023",
          description:
            "Took my first coding class, learning the basics of programming.",
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col items-start justify-center px-4 md:px-6 shadow-section-inset">
      <SectionHeading>Timeline of Achievements</SectionHeading>

      <div className="mt-4 flex w-full flex-col items-start justify-center">
        {timelineData.map((item, index) => (
          <div key={index} className="mb-6 w-full">
            <motion.h3
              initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="shadow-aceternity dark:shadow-aceternity-dark w-fit rounded-md  px-2 py-0.5 text-lg font-bold text-black dark:bg-neutral-800 dark:text-white"
            >
              {item.year}
            </motion.h3>
            {item.content.reverse().map((content, contentIndex) => (
              <div
                key={contentIndex}
                className="mt-6 flex w-full items-center justify-between pl-4"
              >
                <div className="flex flex-col items-start gap-2">
                  <div className="text-primary dark:text-primary-dark flex items-center gap-2">
                    <CompletedIcon size={20} />
                    <motion.h4
                      initial={{ opacity: 0, y: -10, filter: "blur(10px)" }}
                      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{ duration: 0.5, delay: contentIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="text-md text-primary dark:text-primary-dark font-semibold"
                    >
                      {content.title}
                    </motion.h4>
                  </div>
                  <motion.p
                    initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.5, delay: contentIndex * 0.15 }}
                    viewport={{ once: true }}
                    className="text-secondary dark:text-secondary-dark max-w-lg pl-7 text-sm"
                  >
                    {content.description}
                  </motion.p>
                </div>
                <div>
                  <p className="text-secondary dark:text-secondary-dark hidden md:block text-sm font-medium">
                    {content.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
