import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

export default function ProfileCard() {
  return (
    <div className="flex items-center justify-center md:px-12 px-4 py-8">
      <div className="relative rounded-4xl border overflow-hidden w-full h-full">
        <Image
          src="/me.jpeg"
          alt="Profile Photo"
          height={200}
          width={200}
          className="absolute rounded-full top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 border border-4 p-1 shadow-[5px_5px_#ccc] border-black"
        />
        <div className="w-full max-w-3xl h-50 bg-[rgb(93,67,238)]"></div>
        <div className="w-full max-w-3xl h-30 bg-[rgb(205,226,67)]"></div>
        <div className="pt-2 flex flex-col items-center mb-6">
          <h2 className="text-primary dark:text-primary-dark text-xl font-bold tracking-tighter drop-shadow-primary dark:drop-shadow-primary-dark drop-shadow-lg/30 md:text-3xl">
            DHRUV SABHARWAL
          </h2>
          <p>Full-Stack Developer</p>
        </div>
        <div className="flex gap-4 items-center justify-center text-white">
          <Link
            href="https://x.com/Dhruvv7115"
            className="bg-black rounded-full p-2"
          >
            <IconBrandX size={16} />
          </Link>
          <Link
            href="https://www.instagram.com/dhruvv7115/"
            className="bg-black rounded-full p-2"
          >
            <IconBrandInstagram size={16} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/dhruv-sabharwal-6a6245295/"
            className="bg-black rounded-full p-2"
          >
            <IconBrandLinkedin size={16} />
          </Link>
        </div>
        <div className="flex gap-4 items-center justify-center my-6">
          <Link href="https://github.com/Dhruvv7115">
            <button className="flex items-center gap-2 bg-black dark:bg-white rounded-full p-2 text-white dark:text-black font-medium hover:-translate-y-1 hover:shadow-2xl hover:cursor-pointer transition-all">
              Github
              <IconBrandGithub size={16} className="inline-block" />
            </button>
          </Link>
          {/*<button>Consult</button>*/}
        </div>
      </div>
    </div>
  );
}
