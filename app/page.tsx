"use client";

import { useState } from "react";
import LoadingScreen from "@/components/landing/LoadingScreen";
import Navbar from "@/components/layout/Navbar";

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

      <main className="min-h-screen bg-[#050816] flex items-center justify-center text-white">
        <h1 className="text-5xl font-bold">
          🚀 KidVentor World Coming Next...
        </h1>
      </main>
    </>
  );
}   // ← THIS WAS MISSING