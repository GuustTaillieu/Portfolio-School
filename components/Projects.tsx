import React from "react";
import StandardLayout from "./StandardLayout";
import Image from "next/image";
import { motion } from "framer-motion";
import profile_pic from "@/public/images/profile.jpg";
import Project from "./Project";

type Props = {};

const Projects = (props: Props) => {
  const projects = [
    { id: 1, name: "Project 1" },
    { id: 2, name: "Project 2" },
    { id: 3, name: "Project 3" },
    { id: 4, name: "Project 4" },
    { id: 5, name: "Project 5" },
  ];
  return (
    <StandardLayout
      title="Projects"
      className="relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden text-left md:flex-row"
    >
      <div className="scrollbar-track-gray-400/30 scrollbar-thumb-primary/80 scrollbar-thin relative z-20 flex w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll">
        {projects.map((project) => (
          <Project key={project.id.toString()} project={project} />
        ))}
      </div>

      <div className="absolute left-0 top-[30%] h-[500px] w-full -skew-y-12 bg-primary/10" />
    </StandardLayout>
  );
};

export default Projects;
