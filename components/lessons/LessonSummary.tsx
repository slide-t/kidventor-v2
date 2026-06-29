"use client";

type LessonSummaryProps = {
  title: string;
};

export default function LessonSummary({
  title,
}: LessonSummaryProps) {
  return (
    <section className="mt-12">

      <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-8">

        <h2 className="text-3xl font-black text-cyan-400">
          📝 Lesson Summary
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-300">
          Congratulations! You have completed the lesson on{" "}
          <span className="font-bold text-white">
            {title}
          </span>.
        </p>

        <p className="mt-4 leading-8 text-gray-400">
          Before moving to the next lesson, make sure you can explain
          the main ideas in your own words and complete the activity
          provided.
        </p>

      </div>

    </section>
  );
}