import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Image as ImageType } from "@/typings";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "@/sanity/lib/client";

type Props = {
  logo: ImageType;
  direction?: "left" | "right";
};

function Skill({ logo, direction = "right" }: Readonly<Props>) {
  const logoProps = useNextSanityImage(client, logo);

  return (
    <motion.div
      className="group relative flex aspect-square w-24 cursor-pointer overflow-hidden rounded-full border border-gray-500 p-4  xl:w-32"
      initial={{ x: direction === "left" ? -200 : 200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "anticipate" }}
    >
      <Image
        className="h-full w-full object-scale-down filter transition duration-300 ease-in-out group-hover:grayscale"
        alt="Skill"
        {...logoProps}
        layout="fixed"
        placeholder="blur"
        blurDataURL={logo?.asset.metadata?.lqip}
      />
      <div className="absolute left-0 top-0 z-0 aspect-square h-full w-full rounded-full opacity-0 transition duration-300 ease-in-out group-hover:bg-white group-hover:opacity-80">
        <div className="flex h-full items-center justify-center">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Skill;
