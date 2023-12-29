import React, { useEffect } from "react";
import BackgroundSquares from "./BackgroundSquares";
import Image from "next/image";
import { motion } from "framer-motion";
import { PageInfo } from "@/typings";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "@/sanity/lib/client";

type Props = {
  info: PageInfo;
};

const Hero = ({ info }: Props) => {
  const buttons = React.useRef<HTMLButtonElement[]>([]);
  const heroPicProps = useNextSanityImage(client, info?.heroImage);

  useEffect(() => {
    const handleLink = (e: MouseEvent) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLAnchorElement;
      const section = target.dataset.section;
      window.history.pushState({}, "", `#${section}`);
      const el = document.querySelector(`#${section}`);
      console.log(el, section, target);
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth" });
    };
    buttons?.current.forEach(
      (btn) => btn?.addEventListener("click", handleLink),
    );

    return () => {
      buttons?.current.forEach(
        (btn) => btn?.removeEventListener("click", handleLink),
      );
    };
  }, []);

  return (
    <div className="flex h-screen flex-col items-center justify-center overflow-hidden text-center">
      <BackgroundSquares />
      <div className="z-20 -mt-20 space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 0, 1], scale: [0, 0.5, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Image
            className="relative mx-auto h-36 w-36 rounded-[10%] object-cover object-profile"
            alt="Profile Picture"
            {...heroPicProps}
            layout="fixed"
            placeholder="blur"
            blurDataURL={info?.heroImage?.asset.metadata?.lqip}
          />
        </motion.div>
        <div className="">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="pb-2 text-sm font-semibold uppercase tracking-[15px] text-gray-500"
          >
            {info?.role}
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            className="px-10 text-5xl font-semibold lg:text-6xl"
          >
            {info?.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0, 1], scale: [0, 0.5, 1] }}
            transition={{ duration: 1, delay: 2, ease: "easeInOut" }}
            className="pt-5"
          >
            <button
              className="heroBtn"
              ref={(btn) => buttons.current.push(btn!)}
              data-section="about"
            >
              About
            </button>
            <button
              className="heroBtn"
              ref={(btn) => buttons.current.push(btn!)}
              data-section="experience"
            >
              Experience
            </button>
            <button
              className="heroBtn"
              ref={(btn) => buttons.current.push(btn!)}
              data-section="skills"
            >
              Skills
            </button>
            <button
              className="heroBtn"
              ref={(btn) => buttons.current.push(btn!)}
              data-section="events"
            >
              Events
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
