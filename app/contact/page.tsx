"use client";
import React, { useState } from "react";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import Container from "@/components/container";
import Scales from "@/components/scales";
import ContactForm from "@/components/contact-form";
import { toast } from "sonner";

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name.trim() || !email.trim() || !message.trim()) {
      console.log("formData", formData);
      toast.error("Please fill all the fields");
      return;
    }
    // TODO: Add form submission logic
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    toast.success("Form submitted successfully");

    console.log("Form submitted");
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
        <div className="shadow-section-inset h-full w-full grid grid-cols-1 md:grid-cols-2 mt-4">
          <ContactForm handleSubmit={handleSubmit} setFormData={setFormData} />
        </div>
      </Container>
    </div>
  );
}
