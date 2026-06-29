"use client";

import { motion } from "framer-motion";

type LessonObjectivesProps = {
  objectives: string[];
};

export default function LessonObjectives({
  objectives,
}: LessonObjectivesProps) {
  return (
    <section className="mt-12">

      {/* Header */}

      <div className="mb-8">

        <p className="font-black uppercase tracking-[0.25em] text-cyan-400">

          Mission Objectives

        </p>

        <h2 className="mt-2 text-4xl font-black text-white">

          What You'll Learn

        </h2>

        <p className="mt-3 max-w-2xl text-gray-400">

          Complete these objectives to finish
          this mission successfully.

        </p>

      </div>

      {/* Objectives */}

      <div className="space-y-5">

        {objectives.map((objective, index) => (

          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: -30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: index * 0.12,
            }}
            className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/20 hover:bg-cyan-500/5"
          >

            {/* Icon */}

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 text-xl font-black text-white shadow-lg">

              ✓

            </div>

            {/* Text */}

            <p className="text-lg font-medium text-gray-300 group-hover:text-white">

              {objective}

            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}