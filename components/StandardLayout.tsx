import React from "react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  children?: React.ReactNode;
  className?: string;
};

function StandardLayout({ title, children, className = "" }: Readonly<Props>) {
  return (
    <motion.div
      key={title}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.5 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className={className}
    >
      <h3 className="absolute top-12 z-50 text-2xl uppercase tracking-[20px] text-gray-500">
        {title}
      </h3>
      {children}
    </motion.div>
  );
}

export default StandardLayout;
