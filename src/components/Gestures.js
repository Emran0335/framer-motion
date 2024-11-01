"use client";
import React from "react";
import { motion, MotionConfig } from "framer-motion";

const Gestures = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <MotionConfig
        transition={{
          duration: 0.125,
          ease: "easeInOut",
        }}
      >
        <motion.button
          className="w-full bg-green-400 px-4 py-2 rounded-lg text-gray-800 font-semibold hover:border border-gray-400 hover:bg-green-800 hover:text-gray-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95, rotate: "2.5deg" }}
        >
          Click Me!
        </motion.button>
        <motion.button
          className="w-full bg-red-400 px-4 py-2 rounded-lg text-gray-800 font-semibold hover:border border-gray-400 hover:bg-green-800 hover:text-gray-200"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.85, rotate: "-2.5deg" }}
        >
          Click Me!
        </motion.button>
      </MotionConfig>
    </div>
  );
};

export default Gestures;
