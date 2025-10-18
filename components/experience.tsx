"use client";
import React from "react";
import SectionHeading from "@/components/section-heading";
import { experience } from "@/constants/experience";
import ExperienceCard from "@/components/experience-card";

export default function Experience() {
  return (
    <div className="px-4 py-6 shadow-section-inset">
      <SectionHeading>Professional Experience</SectionHeading>
      <div className="flex flex-col my-6 gap-8">
        {experience.map((exp, idx) => (
          <ExperienceCard experience={exp} key={exp?.title} />
        ))}
      </div>
    </div>
  );
}
