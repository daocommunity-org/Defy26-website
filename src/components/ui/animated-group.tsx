"use client";

import { motion, Variants } from "framer-motion";
import React from "react";

interface AnimatedGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  variants?: {
    container?: Variants;
    item?: Variants;
  };
  initial?: string | boolean;
  animate?: string | boolean;
  exit?: string | boolean;
}

const defaultContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1, // Default stagger time
    },
  },
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
};

export function AnimatedGroup({
  variants = {},
  initial = "hidden",
  animate = "visible",
  exit,
  children,
  ...props
}: AnimatedGroupProps) {
  const {
    container: containerVariants = defaultContainerVariants,
    item: itemVariants = defaultItemVariants,
  } = variants;

  return (
    <motion.div
      initial={initial}
      animate={animate}
      exit={exit as any}
      variants={containerVariants}
      {...(props as any)}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={itemVariants}>{child}</motion.div>
      ))}
    </motion.div>
  );
}
