"use client";
import React from "react";
import SectionHeading from "@/components/section-heading";
import { Project } from "@/types/project";
import ProjectCard from "@/components/project-card";
import { projects as allProjects } from "@/constants/projects";

export default function Projects({ limit }: { limit?: number }) {
  const projects: Project[] = limit ? allProjects.slice(0, limit) : allProjects;
  return (
    <div className="py-4 px-4 md:px-6 shadow-section-inset border-y border-neutral-100">
      <SectionHeading delay={0.2}>I love building projects</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 md:grid-cols-3">
        {projects.map((project, idx) => (
          <ProjectCard project={project} idx={idx} key={project?.title} />
        ))}
      </div>
    </div>
  );
}
