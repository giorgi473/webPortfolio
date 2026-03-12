"use client";

import { motion, Variants } from "motion/react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const lineVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4 },
  },
};

function DottedDivider() {
  return (
    <motion.div
      className="relative w-full my-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="w-full h-0.5 bg-linear-to-r from-transparent via-sky-400/50 to-transparent" />
      <motion.div
        className="absolute left-1/4 top-1/2 -translate-y-1/2 w-1.5 h-px bg-sky-400/60"
        variants={lineVariants}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-0.5 bg-sky-400/80"
        variants={lineVariants}
      />
      <motion.div
        className="absolute left-3/4 top-1/2 -translate-y-1/2 w-1.5 h-px bg-sky-400/60"
        variants={lineVariants}
      />
      <motion.div
        className="absolute inset-0 h-px bg-linear-to-r from-transparent via-sky-400/30 to-transparent"
        initial={{ scaleX: 0, originX: 0 }}
        animate={{
          scaleX: [0, 1, 0],
          opacity: [0, 1, 0],
          transition: {
            duration: 2.5,
            times: [0, 0.6, 1],
            ease: [0.25, 0.46, 0.45, 0.94],
            repeat: Infinity,
            repeatDelay: 1.5,
          },
        }}
      />
    </motion.div>
  );
}

export default DottedDivider;
