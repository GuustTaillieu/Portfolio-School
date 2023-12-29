import React, { useEffect } from "react";
import { motion } from "framer-motion";

const LoadingScreen = () => {
  const [percentage, setPercentage] = React.useState("0%");
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (percentage === "100%") {
        clearTimeout(timer);
      } else {
        const newPercentage = parseInt(percentage) + 10;
        setPercentage(`${newPercentage}%`);
      }
    }, 70);
  }, [percentage]);

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-background">
      <motion.div
        className="flex flex-col items-center space-y-5"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.2, delay: 0.8 }}
      >
        <h1 className="mb-5 text-2xl uppercase tracking-[20px] text-gray-500">
          Loading
        </h1>
        <p className="font-medium text-white">{percentage}</p>
        <div className="h-1 w-80 space-y-3 rounded-full bg-gray-400">
          <div
            className="h-full rounded-full bg-primary transition-all duration-1000 ease-in-out"
            style={{ width: loading ? "0%" : "100%" }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
