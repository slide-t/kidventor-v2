export default function HeroStats() {
  return (
    <div className="mx-auto mt-16 max-w-6xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">

      <Stat number="50+" label="Courses" />

      <Stat number="100+" label="Interactive Lessons" />

      <Stat number="20+" label="Projects" />

      <Stat number="∞" label="Adventures" />

    </div>
  );
}

function Stat({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div>

      <h2 className="text-4xl font-black text-cyan-400">

        {number}

      </h2>

      <p className="mt-2 text-gray-400">

        {label}

      </p>

    </div>
  );
}