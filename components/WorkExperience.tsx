import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import StandardLayout from "./StandardLayout";
import { Experience } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  experiences: Experience[];
};

function WorkExperience({ experiences }: Props) {
  return (
    <StandardLayout
      title="Experience"
      className="relative mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden px-10 text-left md:flex-row"
    >
      <div className="flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll p-10 scrollbar-thin scrollbar-track-gray-400/30 scrollbar-thumb-primary/80">
        {experiences?.map((experience) => (
          <ExperienceCard
            key={experience?._id}
            logo={experience?.companyLogo}
            jobTitle={experience?.jobTitle}
            company={experience?.companyName}
            usedTechs={experience?.technologies}
            workDates={{
              start: experience?.dateStarted,
              end: experience?.isCurrentlyWorkingHere
                ? "Present"
                : experience?.dateEnded,
            }}
            summaryPoints={experience?.jobPoints}
          />
        ))}
      </div>
    </StandardLayout>
  );
}

export default WorkExperience;
