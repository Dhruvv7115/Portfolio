import { Project } from "@/types/project";
import {
  BunIcon,
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
	TurboRepoIcon,
	TypeScriptIcon,
} from "@/components/brand-svgs";

export const projects: Project[] = [
	{
		title: "Trading-N8N Automation",
		image: "/projects/trading-n8n.png",
		href: "#",
		description:
			"A Trading automation workflow platform like n8n, supports price and time based triggers.",
		techStack: [
      {
        name: "TurboRepo",
        icon: TurboRepoIcon,
      },
			{
        name: "React",
				icon: ReactIcon,
			},
			{
        name: "Typescript",
        icon: TypeScriptIcon,
      },
      {
        name: "Bun",
        icon: BunIcon,
      },
		],
	},
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
		title: "SecondBrain",
		image: "/projects/secondBrain.png",
		href: "https://your-second-brain.vercel.app/",
		description:
			"A digital knowledge management platform that lets you save and organize web content as rich, interactive embeds. Easily store and categorize links from platforms like YouTube, Twitter, Instagram, and LinkedIn, creating a searchable personal knowledge base. Built with a modern tech stack for a seamless user experience.",
		techStack: [
			{
				name: "React",
				icon: ReactIcon,
			},
			{
				name: "Typescript",
				icon: TypeScriptIcon,
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
];
