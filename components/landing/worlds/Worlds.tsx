import WorldCard from "./WorldCard";
import { worlds } from "./data";

export default function Worlds() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-36">
      <div className="mb-20 text-center">
        <h2 className="text-5xl font-black text-white">
          🌍 Choose Your Adventure
        </h2>

        <p className="mt-4 text-xl text-gray-400">
          Master real digital skills by exploring exciting worlds.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {worlds.map((world) => (
          <WorldCard key={world.title} {...world} />
        ))}
      </div>
    </section>
  );
}