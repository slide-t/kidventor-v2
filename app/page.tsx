"use client";

import { useState } from "react";

import LoadingScreen from "@/components/landing/LoadingScreen";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import Worlds from "@/components/landing/worlds";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return (
      <LoadingScreen
        onComplete={() => setLoaded(true)}
      />
    );
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050816] text-white">
        <Hero />

        <Worlds />
      </main>
    </>
  );
}