"use client";
import React from "react";
import { motion, useAnimationControls } from "framer-motion";

const AnimationControl = () => {
  const controls = useAnimationControls();

  const handleClick = () => {
    controls.start("flip");
  };

  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <button
        className="w-full bg-green-400 px-4 py-2 rounded-lg text-gray-800 font-semibold hover:border border-gray-400 hover:bg-green-800 hover:text-gray-200"
        onClick={handleClick}
      >
        Flip it!
      </button>
      <motion.div
        className="w-[150px] h-[150px] bg-gray-600 flex justify-center items-center rounded-md"
        variants={{
          initial: {
            rotate: "0deg",
          },
          flip: {
            rotate: "360deg",
          },
        }}
        initial="initial"
        animate={controls}
      >
        Hello Again!
      </motion.div>
    </div>
  );
};

export default AnimationControl;
