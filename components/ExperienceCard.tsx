import Image, { StaticImageData } from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  logo: StaticImageData;
  role: string;
  company: string;
  usedTechs: { name: string; img: StaticImageData }[];
  workDates: {
    start: string;
    end: string;
  };
  summaryPoints: string[];
};

function ExperienceCard({
  logo,
  role,
  company,
  usedTechs,
  workDates,
  summaryPoints,
}: Props) {
  return (
    <article className="flex w-[500px] flex-shrink-0 cursor-pointer snap-center flex-col items-center space-y-7 overflow-hidden rounded-lg bg-[#292929] p-10 opacity-40 transition-opacity duration-200 hover:opacity-100 md:w-[600px] xl:w-[900px]">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="aspect-square w-32 overflow-hidden rounded-full xl:w-[200px]"
      >
        <Image
          className="h-full w-full object-cover object-center"
          src={logo}
          alt="Howest Logo"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.6 }}
        className="px-0 md:px-10"
      >
        <h4 className="text-4xl font-light">{role}</h4>
        <p className="mt-1 text-2xl font-bold uppercase text-primary">
          {company}
        </p>
        <div className="my-2 flex space-x-2">
          {usedTechs.map((tech) => (
            <Image
              className="aspect-square w-10 rounded-full"
              src={tech.img}
              alt={tech.name}
              key={tech.name}
            />
          ))}
        </div>
        <p className="py-5 uppercase text-gray-300">
          Started to work {workDates.start} - {workDates.end}
        </p>
        <ul className="ml-5 list-disc space-y-4 text-lg">
          {summaryPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </motion.div>
    </article>
  );
}

export default ExperienceCard;
