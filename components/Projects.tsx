import React from "react";
import StandardLayout from "./StandardLayout";
import Image from "next/image";
import { motion } from "framer-motion";
import profile_pic from "@/public/images/profile.jpg";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <StandardLayout
      title="Projects"
      className="relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden text-left md:flex-row"
    >
      <div className="relative z-20 flex w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll">
        {projects.map((project, index) => (
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
                Case Study {index + 1} of {projects.length}:{" "}
                <span className="border-b-2 border-primary/50">{project}</span>
              </h4>

              <p className="text-center text-lg md:text-left">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
                possimus rem cupiditate. Quis eum molestias pariatur eligendi
                natus laudantium inventore molestiae quia quaerat et fugiat
                nostrum, incidunt magnam, perferendis quisquam cupiditate
                deleniti ab sint!
              </p>
            </motion.div>
          </div>
        ))}
      </div>

      <div className="absolute left-0 top-[30%] h-[500px] w-full -skew-y-12 bg-primary/10" />
    </StandardLayout>
  );
};

export default Projects;
