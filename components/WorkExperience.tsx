import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import logo_howest from "@/public/images/Logo-howest.jpg";
import logo_archicad from "@/public/images/techs/archicad_logo.png";

type Props = {};

function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="relative mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden px-10 text-left md:flex-row"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        Experience
      </h3>

      <div className="flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll p-10">
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
    </motion.div>
  );
}

export default WorkExperience;
