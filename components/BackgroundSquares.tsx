import React from "react";
import { motion } from "framer-motion";

const variants = {
  initial: { opacity: 0, scale: 0 },
  animate: {
    scale: [1, 2, 2, 3, 1],
    opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
    borderRadius: "10%",
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      staggerChildren: 0.2,
    },
  },
};

function BackgroundSquares() {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      className="relative mt-52 flex items-center justify-center"
    >
      <motion.div
        variants={variants}
        className="absolute aspect-square w-[200px] animate-ping rounded-full border border-lightgray"
      />
      <motion.div
        variants={variants}
        className="absolute aspect-square w-[350px] rounded-full border border-lightgray opacity-40"
      />
      <motion.div
        variants={variants}
        className="absolute aspect-square w-[500px] rounded-full border border-lightgray opacity-50"
      />
      <motion.div
        variants={variants}
        className="absolute aspect-square w-[650px] animate-pulse rounded-full border border-primary opacity-60"
      />
      <motion.div
        variants={variants}
        className="absolute aspect-square w-[800px] rounded-full border border-lightgray opacity-80"
      />
    </motion.div>
  );
}

export default BackgroundSquares;
