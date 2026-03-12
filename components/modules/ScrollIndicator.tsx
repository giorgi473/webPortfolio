"use client";

import { motion } from "motion/react";

export default function ScrollIndicator() {
  return (
    <motion.div
      className="flex flex-col items-center gap-3 group"
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0.8,
      }}
    >
      <motion.span
        className="text-md tracking-wider text-zinc-400 group-hover:text-sky-400 transition-colors duration-300"
        animate={{
          opacity: [1, 0.7, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        scroll
      </motion.span>
      <div
        className="
        h-10 w-6 rounded-full border-2 border-sky-300/60 
        flex justify-center overflow-hidden
        group-hover:border-sky-400/70 group-hover:shadow-md group-hover:shadow-blue-500/50
        transition-all duration-300
      "
      >
        <motion.span
          className="mt-1 h-2 w-1 rounded-full bg-cyan-300"
          animate={{
            y: [0, 18],
            opacity: [1, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0.7,
          }}
        />
      </div>
    </motion.div>
  );
}
