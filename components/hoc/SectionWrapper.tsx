"use client";

import { motion } from "motion/react";
import { ComponentType } from "react";

import { styles } from "@/app/styles";
import { staggerContainer } from "@/utils/motion";

const StarWrapper = <T extends object>(
  Component: ComponentType<T>,
  idName: string,
) =>
  function HOC(props: T) {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} container mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component {...props} />
      </motion.section>
    );
  };

export default StarWrapper;
