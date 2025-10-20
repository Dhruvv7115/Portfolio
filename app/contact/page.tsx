"use client";
import React, { useState } from "react";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import Container from "@/components/container";
import Scales from "@/components/scales";
import ContactForm from "@/components/contact-form";
import { toast } from "sonner";
import Socials from "@/components/socials";

export default function Contact() {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name.trim() || !email.trim() || !message.trim()) {
      console.log("formData", formData);
      toast.error("Please fill all the fields");
      return;
    }

    // TODO: Add form submission logic 🥳✅
    try {
      setLoading(true);
      // Call the API route
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      // Success 🎉
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Contact form error:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="relative min-h-screen pt-10 md:pt-20 md:pb-10">
        <Scales />
        <Heading>Contact Me</Heading>
        <Subheading>
          Get in touch with me for any questions, collaborations, or just to say
          hello! I&#39;d love to hear from you and discuss new opportunities.
        </Subheading>
        <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 mt-4">
          <ContactForm
            handleSubmit={handleSubmit}
            formData={formData}
            setFormData={setFormData}
            loading={loading}
          />
          {/* Right - Connect Section */}
          <Socials />
        </div>
      </Container>
    </div>
  );
}
