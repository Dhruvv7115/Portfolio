import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import SectionHeading from "@/components/section-heading";

export default function Testimonials() {
  const data = [
    {
      quote:
        "Dhruv is an exceptional developer with a keen eye for detail. His ability to turn complex requirements into clean, efficient code is truly impressive.",
      name: "Sarah Johnson",
      avatar:
        "https://plus.unsplash.com/premium_photo-1739786996040-32bde1db0610?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1480",
    },
    {
      quote:
        "Working with Dhruv has been a game-changer for our team. His problem-solving skills and dedication to quality are unmatched.",
      name: "Michael Chen",
      avatar:
        "https://images.unsplash.com/photo-1728577740843-5f29c7586afe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHwy&auto=format&fit=crop&q=60&w=900",
    },
    {
      quote:
        "Dhruv's passion for technology and continuous learning makes him a valuable asset to any project. Highly recommended!",
      name: "Emily Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1740252117027-4275d3f84385?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGF2YXRhcnxlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&q=60&w=900",
    },
  ];
  return (
    <div className="py-6 px-4 md:px-8 shadow-section-inset border-y border-neutral-100 my-6">
      <SectionHeading className="mb-4">People love my work</SectionHeading>
      <div className="flex items-stretch [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <Marquee speed={60} pauseOnHover className="py-4">
          {data.map((item, idx) => (
            <TestimonialCard key={idx} {...item} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

const TestimonialCard = ({
  quote,
  name,
  avatar,
}: {
  quote: string;
  name: string;
  avatar: string;
}) => {
  return (
    <div className="flex flex-col justify-between mx-4 gap-4 shadow-aceternity p-4 max-w-68 w-full h-54 rounded-xl">
      <p className="text-sm text-gray-500">{quote}</p>
      <div className="flex items-center gap-4">
        <Image
          src={avatar}
          alt={name}
          width={36}
          height={36}
          className="rounded-full"
        />
        <p className="text-sm font-semibold">{name}</p>
      </div>
    </div>
  );
};
