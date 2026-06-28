"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 2,
      }}
      className="my-16 flex justify-center text-3xl text-cyan-400"
    >
      ↓
    </motion.div>
  );
}