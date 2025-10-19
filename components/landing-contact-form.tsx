import React from "react";
import SectionHeading from "@/components/section-heading";
import { Subheading } from "@/components/subheading";
import { Link } from "next-view-transitions";

export default function LandingContactForm() {
  return (
    <div className="my-4 px-4 md:px-6 py-6">
      <SectionHeading>Get in touch</SectionHeading>
      <Subheading className="md:pl-0">
        I&apos;d love to hear from you and discuss new opportunities. Fill out
        the form below to get in touch.
      </Subheading>
      <div className="relative mt-4 max-w-lg">
        <input
          type="email"
          placeholder="Your email"
          className="w-full rounded-lg bg-neutral-50 px-4 py-3 pr-[120px] text-sm text-neutral-700 shadow-[var(--shadow-aceternity)] focus:ring-2 focus:ring-neutral-300 focus:outline-none dark:bg-neutral-800 dark:text-neutral-200"
        />
        <Link
          href="mailto:dhruvsabharwal@gmail.com"
          className="absolute top-1/2 right-1 -translate-y-1/2 rounded-md border border-neutral-200 bg-neutral-100 px-4 py-1.5 text-sm text-neutral-700 shadow-[0px_4px_8px_0px_var(--color-neutral-200)_inset] transition-colors hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:shadow-[0px_4px_8px_0px_var(--color-neutral-700)_inset]"
        >
          Send Enquiry
        </Link>
      </div>
    </div>
  );
}
