import React from "react";
import StandardLayout from "./StandardLayout";
import Project from "./Project";
import { Project as ProjectType } from "@/typings";

type Props = {
  projects: ProjectType[];
};

const Projects = ({ projects }: Props) => {
  return (
    <StandardLayout
      title="Projects"
      className="relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden text-left md:flex-row"
    >
      <div className="relative z-20 flex w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll scrollbar-thin scrollbar-track-gray-400/30 scrollbar-thumb-primary/80">
        {projects?.map((project) => (
          <Project key={project._id} project={project} />
        ))}
      </div>

      <div className="absolute left-0 top-[30%] h-[500px] w-full -skew-y-12 bg-primary/10" />
    </StandardLayout>
  );
};

export default Projects;
