"use client";

import HeroText from "./HeroText";
import HeroVisual from "./HeroVisual";
import HeroStats from "./HeroStats";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050816] pt-28">

      {/* Background Glow */}
      <div className="absolute -left-40 top-10 h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-purple-600/20 blur-[140px]" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-[82vh] w-full max-w-7xl flex-col items-center justify-center gap-16 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 xl:px-10">

        {/* Left Side */}
        <div className="flex w-full justify-center lg:w-1/2 lg:justify-start">
          <HeroText />
        </div>

        {/* Right Side */}
        <div className="flex w-full justify-center lg:w-1/2">
          <HeroVisual />
        </div>

      </div>

      {/* Statistics */}
      <div className="relative z-10 mt-10">
        <HeroStats />
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />

    </section>
  );
}