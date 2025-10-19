import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import SectionHeading from "@/components/section-heading";
import Image from "next/image";

export function DraggableCardDemo() {
  const items = [
    // {
    //     title: "Iceland",
    //     image:
    //         "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     className: "absolute top-10 left-[40%] rotate-[8deg]",
    // },
    {
      title: "Claude UI Full Stack App",
      image: "/projects/taskFlow.png",
      className: "absolute top-20 right-[48%] rotate-[10deg]",
    },
    {
      title: "First Internship",
      image: "/aboutMe/internship.jpeg",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "First Full Stack Project",
      image: "/projects/stayFinder.png",
      className: "absolute top-28 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Fighting Game",
      image: "/projects/canvasGame.png",
      className: "absolute top-18 left-[30%] rotate-[4deg]",
    },
    {
      title: "First Hackathon",
      image: "/aboutMe/hackathon.png",
      className: "absolute top-25 left-[20%] rotate-[-5deg]",
    },
  ];
  return (
    <div className="flex flex-col mt-6">
      <SectionHeading className="ml-4 md:ml-6">
        Exploring new ideas.
      </SectionHeading>
      <DraggableCardContainer className="relative flex min-h-[30rem] my-4 w-full items-center justify-center overflow-clip">
        <p className="absolute top-1/2 mx-auto max-w-md -translate-y-3/4 text-center text-2xl px-6 font-black text-neutral-400 md:text-3xl dark:text-neutral-600">
          I Love Exploring New Technologies and Building Amazing Projects.
        </p>
        {items.map((item) => (
          <DraggableCardBody key={item.title} className={item.className}>
            <Image
              src={item.image}
              alt={item.title}
              width={600}
              height={600}
              className="pointer-events-none relative z-10 h-50 w-80 object-cover"
            />
            <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300 tracking-tight">
              {item.title}
            </h3>
          </DraggableCardBody>
        ))}
      </DraggableCardContainer>
    </div>
  );
}
