import Image from "next/image";
import React from "react";
import profile_pic from "@/public/images/profile.jpg";
import { motion } from "framer-motion";
import StandardLayout from "./StandardLayout";

type Props = {};

const About = (props: Props) => {
  return (
    <StandardLayout
      title="About"
      className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left"
    >
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="md:h-95 -mb-24 h-56 w-56 flex-shrink-0 md:mb-0 md:h-72 md:w-64 xl:h-[600px] xl:w-[500px]"
      >
        <Image
          className="h-full w-full rounded-full object-cover object-profile md:rounded-lg"
          src={profile_pic}
          alt="Profile Picture"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="-mb-20 space-y-10 px-0 md:mb-0 md:ml-10"
      >
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="border-spacing-1 border-b-2 border-primary/40 font-medium italic">
            little
          </span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam tenetur
          animi, explicabo consequuntur quaerat quisquam alias molestias nihil
          temporibus, eos minus voluptates atque omnis ducimus cupiditate
          dolores. Cum amet exercitationem, voluptatum deleniti possimus aperiam
          voluptatibus eligendi dicta ex harum consectetur, aliquam sunt!
          Officiis laborum quo dolores. Ipsa alias numquam adipisci.
        </p>
      </motion.div>
    </StandardLayout>
  );
};

export default About;
