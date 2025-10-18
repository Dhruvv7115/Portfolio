import { Project } from "@/types/project";
import {
  Css3Icon,
  ExpressIcon,
  FirebaseIcon,
  Html5Icon,
  JavaScriptIcon,
  MongoDbIcon,
  MotionIcon,
  NextJsIcon,
  NodeJsIcon,
  ReactIcon,
  ShadcnIcon,
  TailwindCssIcon,
  TypeScriptIcon,
} from "@/components/brandSVGs";

export const projects: Project[] = [
  {
    title: "TaskFlow",
    image: "/projects/taskFlow.png",
    href: "https://task-flow-l46m.vercel.app/",
    description:
      "A full-stack task management app built with the MERN stack, TailwindCSS and Shadcn UI.",
    techStack: [
      {
        name: "Next.js",
        icon: NextJsIcon,
      },
      {
        name: "Typescript",
        icon: TypeScriptIcon,
      },
      {
        name: "Shadcn UI",
        icon: ShadcnIcon,
      },
      {
        name: "Motion",
        icon: MotionIcon,
      },
    ],
  },
  {
    title: "Canvas Fighting Game",
    image: "/projects/canvasGame.png",
    href: "https://canvasfightinggame.netlify.app/",
    description:
      "A simple fighting game made with HTML, CSS, JavaScript and Canvas.",
    techStack: [
      {
        name: "JavaScript",
        icon: JavaScriptIcon,
      },
      {
        name: "CSS",
        icon: Css3Icon,
      },
      {
        name: "HTML",
        icon: Html5Icon,
      },
    ],
  },
  {
    title: "StayFinder",
    image: "/projects/stayFinder.png",
    href: "https://stay-finder-oo91.vercel.app/",
    description:
      "A full-stack Airbnb clone made with the MERN stack and TailwindCSS.",
    techStack: [
      {
        name: "React",
        icon: ReactIcon,
      },
      {
        name: "TailwindCSS",
        icon: TailwindCssIcon,
      },
      {
        name: "Express",
        icon: ExpressIcon,
      },
      {
        name: "Nodejs",
        icon: NodeJsIcon,
      },
      {
        name: "MongoDB",
        icon: MongoDbIcon,
      },
    ],
  },
  {
    title: "Crypto Dashboard",
    image: "/projects/cryptoDashboard.png",
    href: "https://crypto-dashboard-vert-delta.vercel.app/",
    description:
      "A live cryptocurrency price tracker built with React and TailwindCSS.",
    techStack: [
      {
        name: "React",
        icon: ReactIcon,
      },
      {
        name: "TailwindCSS",
        icon: TailwindCssIcon,
      },
    ],
  },
  {
    title: "Blog Website",
    image: "/projects/blogWebsite.png",
    href: "#",
    description:
      "A simple blog website made with React, TailwindCSS, and Appwrite.",
    techStack: [
      {
        name: "React",
        icon: ReactIcon,
      },
      {
        name: "TailwindCSS",
        icon: TailwindCssIcon,
      },
      {
        name: "Firebase",
        icon: FirebaseIcon,
      },
    ],
  },
  {
    title: "Amazon Clone",
    image: "/projects/amazonClone.png",
    href: "https://dhruvv7115.github.io/Amazon-Clone/",
    description:
      "An Amazon.com clone made using Vanilla HTML, CSS and JavaScript.",
    techStack: [
      {
        name: "JavaScript",
        icon: JavaScriptIcon,
      },
      {
        name: "CSS",
        icon: Css3Icon,
      },
      {
        name: "HTML",
        icon: Html5Icon,
      },
    ],
  },
];
