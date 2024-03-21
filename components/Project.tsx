import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/typings";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

type Props = {
  project: Project;
};

function Project({ project }: Readonly<Props>) {
  console.log(project);
  const projectPicProps = useNextSanityImage(client, project?.heroImage);
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
          placeholder="blur"
          blurDataURL={project?.heroImage?.asset.metadata?.lqip}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0.3, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-6xl space-y-5 px-0 md:px-10"
      >
        <Link
          href={`/projects/${project?._id}`}
          className="block cursor-pointer text-center text-4xl font-semibold"
        >
          <span className="border-b-2 border-primary/50">
            {project?.title} <span className="text-primary">→</span>
          </span>
        </Link>
        <p className="max-w-4xl pt-3 text-center text-lg md:text-center">
          {project?.summary || "No summary available."}
        </p>
      </motion.div>
    </div>
  );
}

export default Project;
