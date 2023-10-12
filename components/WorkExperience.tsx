import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import logo_howest from "@/public/images/Logo-howest.jpg";
import logo_archicad from "@/public/images/icons/archicad_logo.png";
import StandardLayout from "./StandardLayout";

type Props = {};

function WorkExperience({}: Props) {
  return (
    <StandardLayout
      title="Experience"
      className="relative mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden px-10 text-left md:flex-row"
    >
      <div className="scrollbar-thin scrollbar-track-gray-400/30 scrollbar-thumb-primary/80 flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll p-10">
        <ExperienceCard
          logo={logo_howest}
          role="Student"
          company="Howest"
          usedTechs={[
            { name: "Archicad", img: logo_archicad },
            { name: "Revit", img: logo_archicad },
            { name: "Sketchup", img: logo_archicad },
          ]}
          workDates={{ start: "2021", end: "PRESENT" }}
          summaryPoints={[
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
          ]}
        />
        <ExperienceCard
          logo={logo_howest}
          role="Student"
          company="Howest"
          usedTechs={[
            { name: "Archicad", img: logo_archicad },
            { name: "Revit", img: logo_archicad },
            { name: "Sketchup", img: logo_archicad },
          ]}
          workDates={{ start: "2021", end: "PRESENT" }}
          summaryPoints={[
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
          ]}
        />
        <ExperienceCard
          logo={logo_howest}
          role="Student"
          company="Howest"
          usedTechs={[
            { name: "Archicad", img: logo_archicad },
            { name: "Revit", img: logo_archicad },
            { name: "Sketchup", img: logo_archicad },
          ]}
          workDates={{ start: "2021", end: "PRESENT" }}
          summaryPoints={[
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
          ]}
        />
      </div>
    </StandardLayout>
  );
}

export default WorkExperience;
