import { Experience } from "@/types/experience";
import { Express, GoogleGemini, Javascript, MaterialUi, Mongodb, Motion, Postgresql, React, ReactRouter, Redux, Remix, ShadcnUi, TailwindCss } from "@thesvg/react";

export const experience: Experience[] = [
  {
    title: "Full Stack Developer Intern",
    company: "Katyayani Organics",
    date: "July 2025 - Present",
    description:
      "Built Katyayani Organics' global connect platform for lead and client management using MERN stack with modern UI/UX.",
    companyLogo: "/experience/katyayaniOrganics.png",
    techStack: [
      {
        name: "Remix",
        icon: Remix,
      },
      {
        name: "React",
        icon: React,
      },
      {
        name: "React Router",
        icon: ReactRouter,
      },
      {
        name: "Redux",
        icon: Redux,
      },
      {
        name: "Tailwind CSS",
        icon: TailwindCss,
      },
      {
        name: "Shadcn UI",
        icon: ShadcnUi,
      },
      {
        name: "Motion",
        icon: Motion,
      },
      {
        name: "Material UI",
        icon: MaterialUi,
      },
      {
        name: "Express",
        icon: Express,
      },
      {
        name: "PostgreSQL",
        icon: Postgresql,
      },
      {
        name: "MongoDB",
        icon: Mongodb,
      },
    ],
  },
  {
    title: "Mern Stack Developer Intern",
    company: "Sutherland",
    // location: "Chennai, India | Remote",
    date: "June 2025 - July 2025",
    description:
      "Built MERN stack applications with user authentication, API integrations, and responsive design.",
    companyLogo: "/experience/sutherland.png",
    techStack: [
      {
        name: "React",
        icon: React,
      },
      {
        name: "Javascript",
        icon: Javascript,
      },
      {
        name: "Tailwind CSS",
        icon: TailwindCss,
      },
      {
        name: "Express",
        icon: Express,
      },
      {
        name: "MongoDB",
        icon: Mongodb,
      },
      {
        name: "Gemini AI",
        icon: GoogleGemini,
      },
    ],
  },
];
