import React from "react";
import SectionHeading from "@/components/section-heading";
import { Subheading } from "@/components/subheading";
import Link from "next/link";
import { GitHubIcon, GmailIcon, LinkedInIcon } from "@/components/brand-svgs";
import { Button } from "@/components/ui/button";
import { IconBrandXFilled } from "@tabler/icons-react";
import { Social } from "@/types/socials";

const socials: Social[] = [
  {
    name: "Gmail",
    href: "mailto:dhruvsabharwalh7@gmail.com",
    icon: GmailIcon,
  },
  {
    name: "Github",
    href: "https://github.com/dhruvv7115",
    icon: GitHubIcon,
  },
  {
    name: "Linkedin",
    href: "https://linkedin.com/in/dhruvv7115",
    icon: LinkedInIcon,
  },
  {
    name: "X",
    href: "https://x.com/dhruvv7115",
    icon: IconBrandXFilled,
    color: "#000000",
    darkColor: "#ffffff",
  },
];

export default function Socials() {
  return (
    <div className="flex flex-col py-8 px-4 shadow-section">
      <SectionHeading>Let’s Connect</SectionHeading>
      <Subheading className="md:pl-0 pl-0 mb-4">
        Prefer reaching out directly? You can find me on these platforms or just
        drop me an email.
      </Subheading>

      <div className="space-y-3">
        {socials.map((social, index) => (
          <Link
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition"
          >
            <Button variant="outline" className="p-1">
              {social.color && social.darkColor ? (
                <social.icon
                  className={`fill-[${social.color}] dark:fill-[${social.darkColor}]`}
                />
              ) : (
                <social.icon />
              )}
            </Button>
            {social.name}:{" "}
            {social.href.replace("https://", "").replace("mailto:", "")}
          </Link>
        ))}
        {/*<Link*/}
        {/*  href="mailto:yourname@example.com"*/}
        {/*  className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition"*/}
        {/*>*/}
        {/*  <Button variant="outline" className="p-1">*/}
        {/*    <GmailIcon />*/}
        {/*  </Button>*/}
        {/*  dhruvsabharwalh7@gmail.com*/}
        {/*</Link>*/}
        {/*<Link*/}
        {/*  href="https://github.com/dhruvv7115"*/}
        {/*  target="_blank"*/}
        {/*  rel="noreferrer"*/}
        {/*  className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition"*/}
        {/*>*/}
        {/*  <Button variant="outline" className="p-1">*/}
        {/*    <IconBrandGithubFilled />*/}
        {/*  </Button>*/}
        {/*  github.com/dhruvv7115*/}
        {/*</Link>*/}
        {/*<Link*/}
        {/*  href="https://linkedin.com/in/dhruvv7115"*/}
        {/*  target="_blank"*/}
        {/*  rel="noreferrer"*/}
        {/*  className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition"*/}
        {/*>*/}
        {/*  <Button variant="outline" className="p-1">*/}
        {/*    <IconBrandLinkedinFilled className="w-5 h-5" color="#0A66C2" />*/}
        {/*  </Button>*/}
        {/*  linkedin.com/in/dhruvv7115*/}
        {/*</Link>*/}
        {/*<Link*/}
        {/*  href="https://x.com/dhruvv7115"*/}
        {/*  target="_blank"*/}
        {/*  rel="noreferrer"*/}
        {/*  className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition"*/}
        {/*>*/}
        {/*  <Button variant="outline" className="p-1">*/}
        {/*    <IconBrandXFilled className="w-5 h-5" />*/}
        {/*  </Button>*/}
        {/*  x.com/Dhruvv7115*/}
        {/*</Link>*/}
      </div>
    </div>
  );
}
