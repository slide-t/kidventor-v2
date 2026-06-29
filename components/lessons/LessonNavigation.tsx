"use client";

type LessonNavigationProps = {
  previous?: string;
  next?: string;
};

export default function LessonNavigation({
  previous,
  next,
}: LessonNavigationProps) {
  return (
    <section className="mt-12 mb-16">

      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">

        {/* Previous Lesson */}
        <button
          disabled={!previous}
          className={`rounded-2xl px-6 py-4 font-bold transition
          ${
            previous
              ? "bg-white/5 border border-white/10 hover:bg-white/10 text-white"
              : "cursor-not-allowed bg-white/5 text-gray-600"
          }`}
        >
          ← {previous ?? "No Previous Lesson"}
        </button>

        {/* Next Lesson */}
        <button
          disabled={!next}
          className={`rounded-2xl px-6 py-4 font-bold transition
          ${
            next
              ? "bg-cyan-500 hover:bg-cyan-400 text-white"
              : "cursor-not-allowed bg-white/5 text-gray-600"
          }`}
        >
          {next ?? "End of Module"} →
        </button>

      </div>

    </section>
  );
}