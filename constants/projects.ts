import { BunIcon, NextJsIcon, NodeJsIcon, TurboRepoIcon } from "@/components/brand-svgs";
import { Project } from "@/types/project";
import {
	Appwrite,
	AwsAmazonSimpleStorageService,
	Clerk,
	Css,
	Express,
	Html5,
	Javascript,
	LangchainCorporate,
	Mongodb,
	Motion,
	Prisma,
	React,
	ReactHookForm,
	ShadcnUi,
	Stripe,
	Supabase,
	T3Stack,
	TailwindCss,
	Trpc,
	Typescript,
	Zod,
} from "@thesvg/react";

export const projects: Project[] = [
	{
		title: "Github AI Assistant",
		image: "/projects/github-ai-assistant.png",
		href: "https://githubaiassistant.vercel.app",
		description:
			"A RAG-powered AI assistant that ingests an entire GitHub repository, chunks the codebase, generates vector embeddings, and stores them in a PostgreSQL vector store for semantic search.",
		techStack: [
			{
				name: "T3 Stack",
				icon: T3Stack,
			},
			{
				name: "Zod",
				icon: Zod,
			},
			{
				name: "Clerk",
				icon: Clerk,
			},
			{
				name: "Stripe",
				icon: Stripe,
			},
			{
				name: "LangChainJs",
				icon: LangchainCorporate,
			},
			{
				name: "React Hook Form",
				icon: ReactHookForm,
			},
			{
				name: "Supabase",
				icon: Supabase,
			},
		],
	},
	{
		title: "Chat With PDF",
		image: "/projects/chat-with-pdf.png",
		href: "https://chat-with-pdf-tau.vercel.app/",
		description:
			"A full-stack AI assistant that lets you chat with your PDF files.",
		techStack: [
			{
				name: "Next.js",
				icon: NextJsIcon,
			},
			{
				name: "Typescript",
				icon: Typescript,
			},
			{
				name: "Zod",
				icon: Zod,
			},
			{
				name: "TRPC",
				icon: Trpc,
			},
			{
				name: "Prisma",
				icon: Prisma,
			},
			{
				name: "Stripe",
				icon: Stripe,
			},
			{
				name: "AWS S3",
				icon: AwsAmazonSimpleStorageService,
			},
			{
				name: "React-Hook-Form",
				icon: ReactHookForm,
			},
		],
	},
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
				icon: React,
			},
			{
				name: "Typescript",
				icon: Typescript,
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
				icon: Typescript,
			},
			{
				name: "Shadcn UI",
				icon: ShadcnUi,
			},
			{
				name: "Motion",
				icon: Motion,
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
				icon: Javascript,
			},
			{
				name: "CSS",
				icon: Css,
			},
			{
				name: "HTML",
				icon: Html5,
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
				icon: React,
			},
			{
				name: "Typescript",
				icon: Typescript,
			},
			{
				name: "TailwindCSS",
				icon: TailwindCss,
			},
			{
				name: "Express",
				icon: Express,
			},
			{
				name: "Nodejs",
				icon: NodeJsIcon,
			},
			{
				name: "MongoDB",
				icon: Mongodb,
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
				icon: React,
			},
			{
				name: "TailwindCSS",
				icon: TailwindCss,
			},
			{
				name: "Express",
				icon: Express,
			},
			{
				name: "Nodejs",
				icon: NodeJsIcon,
			},
			{
				name: "MongoDB",
				icon: Mongodb,
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
				icon: React,
			},
			{
				name: "TailwindCSS",
				icon: TailwindCss,
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
				icon: Javascript,
			},
			{
				name: "CSS",
				icon: Css,
			},
			{
				name: "HTML",
				icon: Html5,
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
				icon: React,
			},
			{
				name: "TailwindCSS",
				icon: TailwindCss,
			},
			{
				name: "Appwrite",
				icon: Appwrite,
			},
		],
	},
];
