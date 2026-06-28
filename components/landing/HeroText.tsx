"use client";

export default function HeroText() {
  return (
    <div className="flex-1">

      <div className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2">

        <span className="text-sm font-semibold text-cyan-300">

          🚀 Africa's Next Generation Coding Platform

        </span>

      </div>

      <h1 className="text-6xl font-black leading-tight text-white lg:text-7xl">

        Learn.

        <br />

        Build.

        <br />

        Create.

      </h1>

      <p className="mt-8 max-w-xl text-xl leading-9 text-gray-400">

        KidVentor transforms children into confident creators through
        coding, digital technology, AI, cyber safety, computational
        thinking and interactive adventures.

      </p>

      <div className="mt-10 flex flex-wrap gap-5">

        <button className="rounded-xl bg-cyan-500 px-8 py-4 font-bold transition hover:bg-cyan-400">

          🚀 Start Learning

        </button>

        <button className="rounded-xl border border-white/20 px-8 py-4 font-bold hover:bg-white/10">

          ▶ Watch Demo

        </button>

      </div>

    </div>
  );
}