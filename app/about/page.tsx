"use client";
import React from "react";
import Container from "@/components/container";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { Timeline } from "@/components/timeline";
import { DraggableCardDemo } from "@/components/draggable-card";
import Scales from "@/components/scales";

export default function Page() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="relative min-h-screen pt-10 md:pt-20 md:pb-10">
        <Scales />
        <Heading>About Me</Heading>
        <Subheading>
          I’m a passionate software developer with a strong focus on building
          modern, user-friendly web applications using React, JavaScript, and
          the MERN stack. I thrive on solving complex problems, learning
          emerging technologies, and collaborating with others to bring ideas to
          life.
        </Subheading>
        <DraggableCardDemo />
        <Timeline />
      </Container>
    </div>
  );
}
