"use client";
import React from "react";
import SectionHeading from "@/components/section-heading";
import { Project } from "@/types/project";
import ProjectCard from "@/components/project-card";

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <div className="py-4 px-4 md:px-8 shadow-section-inset border-y border-neutral-100">
      <SectionHeading delay={0.2}>I love building projects</SectionHeading>
      <div className="grid grid-cols-1 gap-10 py-4 md:grid-cols-3">
        {projects.map((project, idx) => (
          <ProjectCard project={project} idx={idx} key={project?.title} />
        ))}
      </div>
    </div>
  );
}
