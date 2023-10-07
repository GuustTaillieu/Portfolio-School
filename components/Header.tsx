import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

const socialMedia = [
  "https://www.instagram.com/zita.worm/",
  "https://www.instagram.com/zita.worm/",
  "https://www.instagram.com/zita.worm/",
];

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 z-20 mx-auto flex max-w-7xl items-start justify-between p-5 xl:items-center">
      <motion.div
        initial={{ opacity: 0, x: -400 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        {socialMedia.map((social) => (
          <SocialIcon
            url={social}
            key={social}
            target="_blank"
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 400, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-gray-400"
      >
        <SocialIcon
          network="email"
          url="mailto:email@email.com"
          fgColor="gray"
          bgColor="transparent"
          className="cursor-pointer"
        />
        <p className="hidden text-sm uppercase text-gray-400 md:inline-flex">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
}

export default Header;