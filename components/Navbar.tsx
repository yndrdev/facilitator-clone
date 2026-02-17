"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="text-xl font-black tracking-tight text-black">
            facilitator.com
          </span>
          <span className="bg-brand-yellow text-[10px] font-bold px-1.5 py-0.5 rounded text-black leading-tight">
            by AJ&Smart
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-brand-gray">
          <div className="relative group cursor-pointer flex items-center gap-1">
            Training Programs
            <svg
              className="w-3.5 h-3.5 transition-transform group-hover:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <a href="#" className="hover:text-black transition-colors">
            Corporate Training
          </a>
          <a href="#" className="hover:text-black transition-colors">
            Hire a Facilitator
          </a>
          <a href="#" className="hover:text-black transition-colors">
            Free Resources
          </a>
          <a href="#" className="hover:text-black transition-colors">
            About Us
          </a>
          <a href="#" className="hover:text-black transition-colors">
            Reviews
          </a>
          <a
            href="#"
            className="ml-2 border border-black rounded-full px-5 py-2 text-sm font-semibold text-black hover:bg-black hover:text-white transition-all"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4 text-sm font-medium">
          <a href="#" className="py-2">Training Programs</a>
          <a href="#" className="py-2">Corporate Training</a>
          <a href="#" className="py-2">Hire a Facilitator</a>
          <a href="#" className="py-2">Free Resources</a>
          <a href="#" className="py-2">About Us</a>
          <a href="#" className="py-2">Reviews</a>
          <a href="#" className="border border-black rounded-full px-5 py-2 text-center font-semibold">
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
}
