"use client";

import { motion } from "framer-motion";

type LessonHeaderProps = {
  emoji: string;
  title: string;
  difficulty: string;
  duration: string;
};

export default function LessonHeader({
  emoji,
  title,
  difficulty,
  duration,
}: LessonHeaderProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

        <div className="flex flex-col items-center gap-8 lg:flex-row">

          {/* Lesson Icon */}
          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-2xl" />

            <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-cyan-400/20 bg-gradient-to-br from-cyan-500 to-blue-600 text-6xl shadow-[0_0_40px_rgba(34,211,238,0.35)]">

              {emoji}

            </div>

          </div>

          {/* Lesson Details */}

          <div className="flex-1 text-center lg:text-left">

            <p className="font-black uppercase tracking-[0.25em] text-cyan-400">

              Interactive Lesson

            </p>

            <h1 className="mt-3 text-4xl font-black text-white md:text-5xl">

              {title}

            </h1>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-400">

              Learn step-by-step through explanations,
              activities and interactive challenges.

            </p>

            {/* Information Pills */}

            <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">

              <div className="rounded-full border border-green-500/20 bg-green-500/10 px-5 py-2">

                🟢 {difficulty}

              </div>

              <div className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2">

                ⏱ {duration}

              </div>

            </div>

          </div>

        </div>

      </div>
    </motion.section>
  );
}