import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import StandardLayout from "./StandardLayout";
import { PageInfo } from "@/typings";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "@/sanity/lib/client";

type Props = {
  info: PageInfo;
};

const About = ({ info }: Props) => {
  const profilePicProps = useNextSanityImage(client, info.profilePicture);
  const text = { __html: info?.backgroundInformation || "" };

  return (
    <StandardLayout
      title="About"
      className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-center gap-y-8 px-4 text-center sm:px-10 lg:flex-row lg:text-left"
    >
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="md:h-95 h-40 w-40 flex-shrink-0 sm:h-56 sm:w-56 md:mb-0 lg:h-72 lg:w-64 xl:h-[500px] xl:w-[400px]"
      >
        <Image
          className="h-full w-full rounded-full object-cover object-profile lg:rounded-lg"
          alt="Profile Picture"
          {...profilePicProps}
          layout="fixed"
          placeholder="blur"
          blurDataURL={info?.profilePicture?.asset.metadata?.lqip}
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
        <p className="text-base" dangerouslySetInnerHTML={text}>
          {}
        </p>
      </motion.div>
    </StandardLayout>
  );
};

export default About;
