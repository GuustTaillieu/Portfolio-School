import React from "react";
import BackgroundSquares from "./BackgroundSquares";
import Image from "next/image";
import profile_pic from "@/public/images/profile.jpg";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="flex h-screen flex-col items-center justify-center overflow-hidden text-center">
      <BackgroundSquares />
      <div className="z-20 -mt-20 space-y-8">
        <Image
          className="object-profile relative mx-auto h-36 w-36 rounded-full object-cover"
          src={profile_pic}
          alt="Profile Picture"
        />
        <div className="">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="pb-2 text-sm font-semibold uppercase tracking-[15px] text-gray-500"
          >
            Architect
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            className="px-10 text-5xl font-semibold lg:text-6xl"
          >
            Zita Worm
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0, 1], scale: [0, 0.5, 1] }}
            transition={{ duration: 1, delay: 2.5, ease: "easeInOut" }}
            className="pt-5"
          >
            <Link href="#about">
              <button className="heroBtn">About</button>
            </Link>
            <Link href="#experience">
              <button className="heroBtn">Experience</button>
            </Link>
            <Link href="#skills">
              <button className="heroBtn">Skills</button>
            </Link>
            <Link href="#projects">
              <button className="heroBtn">Projects</button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
