import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Image as ImgType, Technology } from "@/typings";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "@/sanity/lib/client";

type Props = {
  logo: ImgType;
  jobTitle: string;
  company: string;
  usedTechs: Technology[];
  workDates: {
    start: string;
    end: string;
  };
  summaryPoints: string[];
};

function ExperienceCard({
  logo,
  jobTitle,
  company,
  usedTechs,
  workDates,
  summaryPoints,
}: Props) {
  const logoProps = useNextSanityImage(client, logo);

  return (
    <article className="flex w-[500px] flex-shrink-0 cursor-pointer snap-center flex-col items-center space-y-7 overflow-hidden rounded-lg bg-[#292929] p-10 transition-opacity duration-200 hover:opacity-100 md:w-[600px] md:opacity-40 xl:w-[900px]">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="aspect-square w-32 overflow-hidden rounded-full xl:w-[200px]"
      >
        <Image
          className="h-full w-full object-cover object-center"
          alt="Howest Logo"
          {...logoProps}
          layout="fixed"
          placeholder="blur"
          blurDataURL={logo?.asset.metadata?.lqip}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.6 }}
        className="px-0 md:px-10"
      >
        <h4 className="text-4xl font-light">{jobTitle}</h4>
        <p className="mt-1 text-2xl font-bold uppercase text-primary">
          {company}
        </p>
        <div className="my-2 flex space-x-2">
          {usedTechs.map((tech) => (
            <Image
              className="aspect-square w-10"
              alt={tech.skillTitle}
              key={tech._id}
              src={tech?.skillImage?.asset?.url}
              width={tech?.skillImage?.asset?.metadata?.dimensions?.width}
              height={tech?.skillImage?.asset?.metadata?.dimensions?.height}
              layout="fixed"
              placeholder="blur"
              blurDataURL={logo?.asset.metadata?.lqip}
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
