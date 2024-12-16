"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Rabi Beres Website",
    description:
      "Rabi Beres is a client-commissioned project completed within a month, utilizing Next.js and Tailwind CSS for its responsive frontend design, and Node.js for a robust backend. The platform integrates essential e-commerce functionalities such as user authentication (login and registration), a dynamic cart system, and seamless checkout processing. It also includes an admin panel with exclusive controls and distinct UI layouts for admin and user roles, showcasing tailored access permissions for each role.",
    image: "/images/projects/project1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/febrydjr/sogenom",
    previewUrl: "https://www.rabiberes.com/",
  },
  {
    id: 2,
    title: "Photography Portfolio Website",
    description:
      "This project is a visually captivating portfolio website tailored for photographers, designed to showcase creative works effectively. Built with React and Tailwind CSS, it emphasizes aesthetic appeal and responsive layouts, ensuring compatibility across devices. Its features include a gallery view for showcasing photography projects and a user-friendly navigation system, making it a professional and elegant online presence.",
    image: "/images/projects/project2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AndreAdyatmoko/Private-CV-website-with-ReactJS",
    previewUrl: "https://private-cv-project.vercel.app/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description:
      "An advanced e-commerce application built using React, Next.js, and Tailwind CSS, designed to demonstrate core functionalities such as product catalog browsing, cart management, and secure checkout processes. The application employs a modern, responsive interface with intuitive user interactions, providing an ideal platform for small-scale online retail or as a foundational system for larger projects.",
    image: "/images/projects/project3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AndreAdyatmoko/Muidem.com",
    previewUrl: "https://muidem-test.vercel.app/",
  },
  {
    id: 4,
    title: "Furniture Ordering Website",
    description:
      "Developed as part of a college final project, AKUI is a furniture ordering platform combining React and Tailwind CSS for an interactive frontend and Node.js for backend operations. Features include account management (login and registration), a streamlined shopping cart, and a comprehensive order checkout system. This project reflects team collaboration and meticulous attention to functional and aesthetic details, targeting a niche furniture retail audience.",
    image: "/images/projects/project4.png",
    tag: ["All", "Web"],
    gitUrl: "/https://github.com/purwadhikafullstack/JCWD011004",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Attendance Website",
    description:
      "Created during an internship, this project serves as an attendance management system for an organization. Developed using React and Tailwind CSS, the website emphasizes clean design, responsiveness, and user-friendly interactions. It includes modules for user authentication, attendance tracking, and data visualization, offering an efficient solution to organizational attendance monitoring challenges.",
    image: "/images/projects/project5.png",
    tag: ["All", "Web"],
    gitUrl: "/https://github.com/AndreAdyatmoko/selection_test",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Point of Sale System",
    description:
      "The Majesty Mixer Point of Sale is a sophisticated system built to manage retail operations effectively. Developed with React and Tailwind CSS for a sleek, responsive frontend and Node.js for backend processing, it features comprehensive modules like user authentication, cart functionality, and checkout processing. The system supports role-based access control with separate admin and user interfaces, catering to operational requirements in small and medium businesses.",
    image: "/images/projects/project6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/fahrurrizky/group4",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
