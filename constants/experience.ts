import {
  ExpressIcon,
  GeminiIcon,
  JavaScriptIcon,
  MaterialUIIcon,
  MongoDbIcon,
  MotionIcon,
  NodeJsIcon,
  PostgresIcon,
  ReactIcon,
  ReactRouterIcon,
  ReduxIcon,
  RemixIcon,
  ShadcnIcon,
  TailwindCssIcon,
} from "@/components/brand-svgs";
import { Experience } from "@/types/experience";

export const experience: Experience[] = [
  {
    title: "Full Stack Developer Intern",
    company: "Katyayani Organics",
    location: "Bhopal, India | Remote",
    date: "July 2025 - Present",
    description:
      "Developed a comprehensive global connect website for Katyayani Organics to manage leads, deals, and client interactions using MERN stack, UI libraries, and smooth animations.",
    companyLogo: "/experience/katyayaniOrganics.png",
    techStack: [
      {
        name: "Remix",
        icon: RemixIcon,
      },
      {
        name: "React",
        icon: ReactIcon,
      },
      {
        name: "React Router",
        icon: ReactRouterIcon,
      },
      {
        name: "Redux",
        icon: ReduxIcon,
      },
      {
        name: "Tailwind CSS",
        icon: TailwindCssIcon,
      },
      {
        name: "Shadcn UI",
        icon: ShadcnIcon,
      },
      {
        name: "Motion",
        icon: MotionIcon,
      },
      {
        name: "Material UI",
        icon: MaterialUIIcon,
      },
      {
        name: "Node.js",
        icon: NodeJsIcon,
      },
      {
        name: "Express",
        icon: ExpressIcon,
      },
      {
        name: "PostgreSQL",
        icon: PostgresIcon,
      },
      {
        name: "MongoDB",
        icon: MongoDbIcon,
      },
    ],
  },
  {
    title: "Mern Stack Developer Intern",
    company: "Sutherland",
    location: "Chennai, India | Remote",
    date: "June 2025 - July 2025",
    description:
      "Built MERN stack applications with user authentication, API integrations, and responsive design.",
    companyLogo: "/experience/sutherland.png",
    techStack: [
      {
        name: "React",
        icon: ReactIcon,
      },
      {
        name: "JavaScript",
        icon: JavaScriptIcon,
      },
      {
        name: "Tailwind CSS",
        icon: TailwindCssIcon,
      },
      {
        name: "Node.js",
        icon: NodeJsIcon,
      },
      {
        name: "Express",
        icon: ExpressIcon,
      },
      {
        name: "MongoDB",
        icon: MongoDbIcon,
      },
      {
        name: "Gemini AI",
        icon: GeminiIcon,
      },
    ],
  },
];
