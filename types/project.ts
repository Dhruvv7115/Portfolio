import React from "react";

export type TechStack = {
  name: string;
  // Icon is a React component that can receive standard SVG props
  // plus optional color/size used by our custom icons
  icon: React.ComponentType<React.SVGProps<SVGSVGElement> & { color?: string; size?: number }>;
  color?: string;
};

export type Project = {
  title: string;
  description: string;
  image: string;
  href: string;
  techStack: TechStack[];
};
