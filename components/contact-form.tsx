import React from "react";
import SectionHeading from "@/components/section-heading";

export default function ContactForm({
  handleSubmit,
  setFormData,
}: {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setFormData: React.Dispatch<
    React.SetStateAction<{ name: string; email: string; message: string }>
  >;
}) {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-6 py-8">
      <SectionHeading>Send me a message</SectionHeading>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, name: e.target.value }))
        }
        placeholder="John Doe"
        className="shadow-aceternity p-2 rounded-lg"
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, email: e.target.value }))
        }
        placeholder="johndoe@example.com"
        className="shadow-aceternity p-2 rounded-lg"
      />
      <label htmlFor="message">Message</label>
      <textarea
        name="message"
        id="message"
        placeholder="You're work is really awesome, I would love to work with you..."
        rows={4}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, message: e.target.value }))
        }
        className="shadow-aceternity p-2 rounded-lg"
      ></textarea>
      <button
        type="submit"
        className="rounded-md border border-neutral-200 bg-neutral-100 px-4 py-1.5 text-sm text-neutral-700 shadow-[0px_4px_8px_0px_var(--color-neutral-200)_inset] transition-colors hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:shadow-[0px_4px_8px_0px_var(--color-neutral-700)_inset]"
      >
        Submit
      </button>
    </form>
  );
}
