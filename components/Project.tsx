import React from "react";
import StandardLayout from "./StandardLayout";
import Image from "next/image";
import { motion } from "framer-motion";
import profile_pic from "@/public/images/profile.jpg";
import { Project } from "@/typings";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "@/sanity/lib/client";

type Props = {
  project: Project;
};

function Project({ project }: Props) {
  const projectPicProps = useNextSanityImage(client, project?.image);
  return (
    <div
      key={project?._id}
      className="flex h-screen w-full flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44"
    >
      <motion.div
        initial={{ opacity: 0, y: -300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="xl:w-120 w-72 pt-20 sm:pt-0 lg:w-[500px] xl:w-[600px]"
      >
        <Image
          className="h-full w-full rounded-md object-cover object-profile"
          alt={project?.title}
          {...projectPicProps}
          layout="fixed"
          placeholder="blur"
          blurDataURL={project?.image?.asset.metadata?.lqip}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="max-w-6xl space-y-5 px-0 md:px-10"
      >
        <h4 className="text-center text-4xl font-semibold">
          Case Study:{" "}
          <span className="border-b-2 border-primary/50">{project?.title}</span>
        </h4>

        <div className="hidden w-full flex-row flex-wrap justify-center space-x-5 md:flex">
          {project?.technologies?.map((tech) => (
            <Image
              className="aspect-square w-7"
              alt={tech.skillTitle}
              key={tech._id}
              src={tech?.skillImage?.asset?.url}
              width={tech?.skillImage?.asset?.metadata?.dimensions?.width}
              height={tech?.skillImage?.asset?.metadata?.dimensions?.height}
              layout="fixed"
              placeholder="blur"
              blurDataURL={tech?.skillImage?.asset.metadata?.lqip}
            />
          ))}
        </div>

        <p className="max-w-4xl pt-3 text-center text-lg md:text-left">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
          possimus rem cupiditate. Quis eum molestias pariatur eligendi natus
          laudantium inventore molestiae quia quaerat et fugiat nostrum,
          incidunt magnam, perferendis quisquam cupiditate deleniti ab sint!
        </p>
      </motion.div>
    </div>
  );
}

export default Project;
