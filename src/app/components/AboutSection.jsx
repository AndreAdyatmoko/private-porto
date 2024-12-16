"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-2 gap-4">
        <ul className="list-disc pl-4">
          <li>Node.js</li>
          <li>Express</li>
          <li>My SQL</li>
          <li>Sequelize</li>
        </ul>
        <ul className="list-disc pl-4">
          <li>JavaScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Tailwind</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-4">
        <li>Fullstack Academy of Code Purwadhika Digital School</li>
        <li>Ngesti Waluyo Academic Of University</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-4">
        <li>Purwadhika Digital School Fullstack Web Developer Certificate</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am Andre Adyatmoko, a passionate web developer currently honing my
            skills at Purwadhika Digital Technology School. With expertise in
            JavaScript, React, and Express, I have successfully built projects
            like portfolio websites, blogs, and chat applications. Before this,
            I gained professional experience as a backend developer at
            RedHunter, contributing to innovative inventory management
            solutions. My goal is to create impactful digital experiences
            through clean, efficient, and scalable code.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
