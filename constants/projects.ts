interface Project {
  title: string;
  image: string;
  href: string;
  description: string;
}

export const projects: Project[] = [
  {
    title: "Task Flow",
    image: "/projects/taskFlow.png",
    href: "https://task-flow-l46m.vercel.app/",
    description:
      "A full-stack task management app built with the MERN stack, TailwindCSS and Shadcn UI.",
  },
  {
    title: "StayFinder",
    image: "/projects/stayFinder.png",
    href: "https://stay-finder-oo91.vercel.app/",
    description:
      "A full-stack Airbnb clone made with the MERN stack and TailwindCSS.",
  },
  {
    title: "Crypto Dashboard",
    image: "/projects/cryptoDashboard.png",
    href: "https://crypto-dashboard-vert-delta.vercel.app/",
    description:
      "A live cryptocurrency price tracker built with React and TailwindCSS.",
  },
  {
    title: "Blog Website",
    image: "/projects/blogWebsite.png",
    href: "#",
    description:
      "A simple blog website made with React, TailwindCSS, and Appwrite.",
  },
  {
    title: "Canvas Fighting Game",
    image: "/projects/canvasGame.png",
    href: "https://canvasfightinggame.netlify.app/",
    description:
      "A simple fighting game made with HTML, CSS, JavaScript and Canvas.",
  },
  {
    title: "Amazon Clone",
    image: "/projects/amazonClone.png",
    href: "https://dhruvv7115.github.io/Amazon-Clone/",
    description:
      "An Amazon.com clone made using Vanilla HTML, CSS and JavaScript.",
  },
];
