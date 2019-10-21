import React from "react";
import { motion } from "framer-motion";

interface BoxProps {
  animate?: Object | string;
  transition?: Object;
  label: string;
  custom?: number;
  variants?: Object;
  className?: string;
}

const Box = ({
  animate,
  transition,
  custom,
  label,
  variants,
  className
}: BoxProps) => {
  return (
    <motion.div
      className={`box ${className}`}
      custom={custom}
      animate={animate}
      transition={transition}
      variants={variants}
    >
      <span>{label}</span>
    </motion.div>
  );
};

export default Box;
