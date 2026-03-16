"use client";

import { motion, useScroll } from "motion/react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface ScrollProgressProps {
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
}

export function ScrollProgress({ className, ref }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();
  const pathname = usePathname();

  if (pathname === "/resume") return null;

  return (
    <motion.div
      ref={ref}
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-linear-to-r from-sky-300 via-sky-300 to-sky-300",
        className,
      )}
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
}
