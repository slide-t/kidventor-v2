"use client";

import { motion } from "framer-motion";

type Props = {
  emoji: string;
  title: string;
  description: string;
  color: string;
};

export default function WorldCard({
  emoji,
  title,
  description,
  color,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition"
    >
      <div
        className={`mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${color} text-4xl`}
      >
        {emoji}
      </div>

      <h3 className="text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-3 text-gray-400">
        {description}
      </p>

      <button className="mt-6 font-semibold text-cyan-400 transition group-hover:translate-x-2">
        Enter →
      </button>
    </motion.div>
  );
}