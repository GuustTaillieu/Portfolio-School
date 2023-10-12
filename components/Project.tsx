import React from "react";
import StandardLayout from "./StandardLayout";
import Image from "next/image";
import { motion } from "framer-motion";
import profile_pic from "@/public/images/profile.jpg";

type Props = {
  project: { id: number; name: string };
};

function Project({ project }: Props) {
  return (
    <div
      key={project.toString()}
      className="flex h-screen w-full flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44"
    >
      <motion.div
        initial={{ opacity: 0, y: -300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="w-32 pt-20 sm:pt-0 md:w-60 lg:w-72"
      >
        <Image
          src={profile_pic}
          alt={project.toString()}
          className="h-full w-full rounded-md object-cover object-profile"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="max-w-6xl space-y-10 px-0 md:px-10"
      >
        <h4 className="text-center text-4xl font-semibold">
          Case Study {project.id}:{" "}
          <span className="border-b-2 border-primary/50">{project.name}</span>
        </h4>

        <p className="text-center text-lg md:text-left">
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
