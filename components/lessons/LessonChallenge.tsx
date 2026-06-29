"use client";

import { motion } from "framer-motion";

type LessonChallengeProps = {
  title: string;
  instruction: string;
  type: string;
  rewardXP: number;
  rewardBadge: string;
  buttonText: string;
  completed: boolean;
};

export default function LessonChallenge({
  title,
  instruction,
  rewardXP,
  rewardBadge,
  buttonText,
}: LessonChallengeProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-14"
    >
      <div className="rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 p-8 backdrop-blur-xl">

        <div className="flex items-center gap-5">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500 text-3xl shadow-lg">
            🧠
          </div>

          <div>

            <p className="font-black uppercase tracking-[0.25em] text-yellow-400">
              Mission Challenge
            </p>

            <h2 className="text-3xl font-black text-white">
              {title}
            </h2>

          </div>

        </div>

        <p className="mt-8 text-lg leading-8 text-gray-300">
          {instruction}
        </p>

        <div className="mt-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex flex-wrap gap-3">

            <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-300">
              ⭐ {rewardXP} XP
            </span>

            <span className="rounded-full bg-purple-500/10 px-4 py-2 text-purple-300">
              🏆 {rewardBadge}
            </span>

          </div>

          <button className="rounded-2xl bg-yellow-500 px-8 py-4 font-black text-black transition hover:scale-105 hover:bg-yellow-400 active:scale-95">
            {buttonText}
          </button>

        </div>

      </div>
    </motion.section>
  );
}