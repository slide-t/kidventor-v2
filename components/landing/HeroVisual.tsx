"use client";

import { motion } from "framer-motion";

export default function HeroVisual() {
  return (
    <div className="relative flex h-[420px] w-full items-center justify-center overflow-visible">

      {/* Outer Orbit */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 50,
          ease: "linear",
        }}
        className="absolute h-[340px] w-[340px] rounded-full border border-cyan-500/15"
      />

      {/* Middle Orbit */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          repeat: Infinity,
          duration: 35,
          ease: "linear",
        }}
        className="absolute h-[260px] w-[260px] rounded-full border border-purple-500/20"
      />

      {/* Inner Orbit */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 22,
          ease: "linear",
        }}
        className="absolute h-[180px] w-[180px] rounded-full border border-cyan-300/25"
      />

      {/* Floating Satellite */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "linear",
        }}
        className="absolute h-[340px] w-[340px]"
      >
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-2xl">
          🛰️
        </div>
      </motion.div>

      {/* Floating Rocket */}
      <motion.div
        animate={{
          y: [-10, 10, -10],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="absolute -right-6 top-16 text-3xl"
      >
        🚀
      </motion.div>

      {/* Earth */}
      <motion.div
        animate={{
          y: [-8, 8, -8],
          scale: [1, 1.03, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        className="
          relative
          flex
          h-40
          w-40
          items-center
          justify-center
          rounded-full
          bg-gradient-to-br
          from-cyan-500
          via-blue-600
          to-indigo-700
          text-6xl
          shadow-[0_0_80px_rgba(34,211,238,.45)]
        "
      >
        🌍

        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-2xl" />
      </motion.div>

      {/* Floating Stars */}
      <motion.div
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute left-8 top-8 text-yellow-300"
      >
        ✨
      </motion.div>

      <motion.div
        animate={{ opacity: [1, 0.2, 1] }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        className="absolute right-12 bottom-10 text-cyan-300"
      >
        ✦
      </motion.div>

      <motion.div
        animate={{
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="absolute left-16 bottom-20 text-purple-300"
      >
        ✨
      </motion.div>
    </div>
  );
}