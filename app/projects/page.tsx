"use client";
import React from "react";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import Container from "@/components/container";
import Projects from "@/components/projects";
import { projects } from "@/constants/projects";
import Scales from "@/components/scales";

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="relative min-h-screen px-10 md:pt-20 md:pb-10">
        <Scales />
        <Heading>Projects</Heading>
        <Subheading className="mb-6">
          I’m a passionate software developer with a strong focus on building
          modern, user-friendly web applications using React, JavaScript, and
          the MERN stack.
        </Subheading>
        <Projects projects={projects} />
      </Container>
    </div>
  );
}
