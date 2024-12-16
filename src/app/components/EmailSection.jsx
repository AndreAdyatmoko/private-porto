"use client";

import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const email = e.target.email.value;
    const subject = encodeURIComponent(e.target.subject.value);
    const message = encodeURIComponent(e.target.message.value);
    const mailtoLink = `mailto:andreadyatmoko@gmail.com?subject=${subject}&body=From: ${email}%0A%0A${message}`;

    // Menunda sedikit untuk memberikan pengalaman pengguna lebih baik
    setTimeout(() => {
      window.location.href = mailtoLink;

      // Feedback pengiriman form
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Menyembunyikan feedback setelah beberapa detik
      setTimeout(() => {
        setSubmitSuccess(null);
      }, 3000);
    }, 500); // Delay untuk tampilan loading
  };

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently exploring new career opportunities and collaborations in the tech industry. My inbox is always open to exciting projects, freelance work, or full-time roles that align with my skills and passion. Whether you have a question about my work, need advice, or simply want to say hi, I&apos;m happy to chat. I believe in building meaningful connections and am always eager to collaborate on projects that push boundaries and create positive impact. I&apos;ll do my best to get back to you as soon as I can!
        </p>

        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/AndreAdyatmoko">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/andreadyatmoko/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="jacob@google.com"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        {submitSuccess !== null && (
          <div
            className={`mt-4 text-center text-sm font-medium ${
              submitSuccess ? "text-green-500" : "text-red-500"
            }`}
          >
            {submitSuccess ? "Message sent successfully!" : "Oops, something went wrong."}
          </div>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
