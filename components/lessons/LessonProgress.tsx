"use client";

type LessonProgressProps = {
  current: number;
  total: number;
};

export default function LessonProgress({
  current,
  total,
}: LessonProgressProps) {

  const percent = Math.round((current / total) * 100);

  const radius = 70;
  const stroke = 10;

  const normalizedRadius = radius - stroke / 2;

  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset =
    circumference - (percent / 100) * circumference;

  return (

    <section className="mb-12">

      <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">

        <div className="flex flex-col items-center gap-10 lg:flex-row">

          {/* Circular Progress */}

          <div className="relative">

            <svg
              height={radius * 2}
              width={radius * 2}
              className="-rotate-90"
            >
                <defs>

  <linearGradient
    id="progressGradient"
    x1="0%"
    y1="0%"
    x2="100%"
    y2="100%"
  >

    <stop
      offset="0%"
      stopColor="#22D3EE"
    />

    <stop
      offset="100%"
      stopColor="#3B82F6"
    />

  </linearGradient>

  <filter id="glow">

    <feGaussianBlur
      stdDeviation="3"
      result="coloredBlur"
    />

    <feMerge>

      <feMergeNode in="coloredBlur"/>

      <feMergeNode in="SourceGraphic"/>

    </feMerge>

  </filter>

</defs>

              {/* Background Circle */}

              <circle
                stroke="#1F2937"
                fill="transparent"
                strokeWidth={stroke}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
              />

              {/* Progress Circle */}

              <circle
                stroke="url(#progressGradient)"
                fill="transparent"
                strokeWidth={stroke}
                strokeLinecap="round"
                strokeDasharray={`${circumference} ${circumference}`}
                strokeDashoffset={strokeDashoffset}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
                filter="url(#glow)"

style={{
  transition:
    "stroke-dashoffset 1s ease",
}}
              />

            </svg>

            {/* Percentage */}

            <div className="absolute inset-0 flex flex-col items-center justify-center">

              <span className="text-3xl font-black text-white">

                {percent}%

              </span>

              <span className="text-xs text-gray-400">

                Complete

              </span>

            </div>

          </div>

          {/* Lesson Information */}

          <div className="text-center lg:text-left">

            <p className="text-gray-400">

              Lesson {current} of {total}

            </p>

            <h2 className="mt-2 text-4xl font-black text-white">

              Your Progress

            </h2>
            <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 px-4 py-2">

  <span className="text-xl">

    ⭐

  </span>

  <span className="font-bold text-cyan-300">

    Beginner Explorer

  </span>

</div>

           <p className="mt-5 max-w-xl leading-8 text-gray-400">

Every lesson completed unlocks new
digital skills.

Keep learning to become a real
KidVentor Explorer!

</p>

          </div>

        </div>

      </div>

    </section>

  );
}