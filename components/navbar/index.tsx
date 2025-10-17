"use client";
import React, { useState } from "react";
import Container from "../container";
import Image from "next/image";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { Link } from "next-view-transitions";

interface NavItem {
  name: string;
  path: string;
}

export default function Navbar() {
  const navItems: NavItem[] = [
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Projects",
      path: "/projects",
    },
  ];

  const [hovered, setHovered] = useState<number | null>(null);
  const { scrollY } = useScroll();

  const [scrolled, setScrolled] = useState<boolean>(false);

  const y = useTransform(scrollY, [0, 100], [0, 10]);
  const width = useTransform(scrollY, [0, 100], ["55%", "50%"]);
  const borderRadius = useTransform(scrollY, [0, 100], ["0", "4rem"]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <Container>
      <motion.nav
        style={{
          borderRadius,
          boxShadow: scrolled ? "var(--shadow-aceternity)" : "none",
          maxWidth: width,
          y,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="fixed inset-x-0 top-0 z-50 mx-auto flex w-full max-w-5xl items-center justify-between bg-white/50 p-2.5 backdrop-blur-sm dark:bg-neutral-900/50"
      >
        <Link href="/">
          <Image
            src="/me.jpeg"
            alt="dhruv"
            className="h-10 w-10 rounded-full"
            width={100}
            height={100}
          />
        </Link>
        <div className="flex items-center">
          {navItems.map((item, idx) => (
            <Link
              className="relative px-2 py-1 text-base"
              href={item.path}
              key={idx}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered === idx && (
                <motion.span
                  layoutId="hovered-span"
                  className="absolute inset-0 -z-10 h-full w-full rounded-md bg-neutral-100 dark:bg-neutral-800"
                  transition={{
                    duration: 0.3,
                    ease: "linear",
                  }}
                />
              )}
              {item.name}
            </Link>
          ))}
        </div>
      </motion.nav>
    </Container>
  );
}
