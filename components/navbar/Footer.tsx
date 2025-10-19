import React from "react";
import Container from "../container";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandX,
} from "@tabler/icons-react";
import { Link } from "next-view-transitions";

export const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="flex items-center justify-between p-4">
          <p className="text-xs text-neutral-500">
            Built with love by Dhruv Sabharwal
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://x.com/Dhruvv7115" target="_blank">
              <IconBrandX className="h-4 w-4 text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300" />
            </Link>
            <Link href="https://github.com/Dhruvv7115" target="_blank">
              <IconBrandGithub className="h-4 w-4 text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300" />
            </Link>
            <Link href="https://instagram.com/dhruvv7115" target="_blank">
              <IconBrandInstagram className="h-4 w-4 text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300" />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
