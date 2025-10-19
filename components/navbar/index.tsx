"use client";
import React, { useEffect, useState } from "react";
import Container from "../container";
import Image from "next/image";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { Link } from "next-view-transitions";
import { IconMenu2, IconMoon, IconSun, IconX } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

interface NavItem {
  name: string;
  path: string;
}

export default function Navbar() {
  const { theme, setTheme } = useTheme();
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
  const width = useTransform(scrollY, [0, 100], ["100%", "90%"]);
  const borderRadius = useTransform(scrollY, [0, 100], ["0", "4rem"]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 5) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  // Close the mobile menu after route changes
  useEffect(() => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [pathname]);

  return (
    <Container className="relative mx-auto h-full w-full max-w-5xl bg-white pt-10 md:pt-0 dark:bg-neutral-900">
      <div className="fixed inset-x-0 top-0 z-50 mx-auto hidden max-w-5xl md:block px-10">
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
          className="mx-auto flex max-w-5xl items-center justify-between rounded-full bg-white/50 px-3 py-2 backdrop-blur-sm dark:bg-neutral-900/50"
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
            {/* single button with data-theme checks */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex items-center rounded-md px-2 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              <motion.span
                className="inline-block"
                initial={{
                  opacity: 0,
                  rotate: 180,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                }}
                whileTap={{
                  opacity: 0,
                  rotate: 180,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
              >
                <IconSun className="w-4 h-4 dark:block hidden" />
                <IconMoon className="w-4 h-4 block dark:hidden" />
              </motion.span>
            </button>
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
                      ease: "anticipate",
                    }}
                  />
                )}
                {item.name}
              </Link>
            ))}
          </div>
        </motion.nav>
      </div>
      <nav className="fixed top-0 left-0 z-50 block w-full border-b border-neutral-100 bg-white md:hidden dark:border-neutral-800 dark:bg-neutral-900">
        <div className="flex w-full items-center justify-between px-4 py-3">
          <Link href="/">
            <Image
              src="/me.jpeg"
              alt="dhruv"
              className="h-10 w-10 rounded-full"
              width={100}
              height={100}
            />
          </Link>
          <div className="flex gap-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex items-center rounded-md px-2 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              <motion.span
                className="inline-block"
                initial={{
                  opacity: 0,
                  rotate: 180,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                }}
                whileTap={{
                  opacity: 0,
                  rotate: 180,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
              >
                <IconSun className="w-4 h-4 dark:block hidden" />
                <IconMoon className="w-4 h-4 block dark:hidden" />
              </motion.span>
            </button>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-md text-neutral-700 dark:text-neutral-200"
              onClick={() => setMobileMenuOpen(true)}
            >
              <IconMenu2 />
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 flex flex-col bg-white dark:bg-neutral-900">
            <div className="flex w-full items-center justify-end p-4">
              <button
                className="flex h-10 w-10 items-center justify-center rounded-md text-neutral-700 dark:text-neutral-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <IconX />
              </button>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center gap-8">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: idx * 0.1,
                    ease: "easeInOut",
                  }}
                >
                  <Link
                    href={item.path}
                    className="text-2xl font-medium text-neutral-800 transition-colors hover:text-neutral-500 dark:text-neutral-200 dark:hover:text-neutral-400"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </Container>
  );
}
