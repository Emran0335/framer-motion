"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BasicsOfMotion = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="flex justify-center flex-col gap-1">
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-green-400 px-4 py-2 rounded-lg text-gray-800 font-semibold hover:border border-gray-400 hover:bg-green-800 hover:text-gray-200"
      >
        Show/Hide
      </motion.button>
      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
            initial={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            animate={{
              rotate: "360deg",
              scale: 1,
              y: [0, 150, -150, 0],
            }}
            exit={{
              role: "0deg",
              scale: 0,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
              times: [0, 0.25, 0.5, 0.85, 1],
            }}
            className="w-[150px] h-[150px] bg-slate-500 rounded-md flex justify-center items-center"
          >
            Hello World!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BasicsOfMotion;
