"use client";

import React, { ReactNode } from "react";
import { HTMLMotionProps, motion } from "framer-motion";

interface AnimationWrapperProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
}

const AnimationWrapper: React.FC<AnimationWrapperProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.8 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;
