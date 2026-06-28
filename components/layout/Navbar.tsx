"use client";

import Link from "next/link";

const navItems = [
  { name: "Explore", href: "/explore" },
  { name: "Learn", href: "/courses" },
  { name: "Playground", href: "/playground" },
  { name: "Resources", href: "/resources" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 font-black text-white">
            K
          </div>

          <div>
            <h1 className="text-xl font-black text-white">
              KidVentor
            </h1>

            <p className="text-xs text-cyan-300">
              Learn • Build • Create
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-300 transition hover:text-cyan-400"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <button className="rounded-lg border border-white/20 px-5 py-2 text-white transition hover:bg-white/10">
            Login
          </button>

          <button className="rounded-lg bg-cyan-500 px-5 py-2 font-semibold text-white transition hover:bg-cyan-400">
            Start Learning
          </button>
        </div>

        {/* Mobile Menu */}
        <button className="text-3xl text-white lg:hidden">
          ☰
        </button>
      </div>
    </header>
  );
}