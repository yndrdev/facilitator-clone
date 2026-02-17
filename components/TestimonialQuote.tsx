"use client";

import Image from "next/image";
import { useState } from "react";

const quotes = [
  {
    text: "Now that I\u2019ve been through this, I\u2019m pretty sure I can facilitate pretty much anything!",
    name: "Jen Shoop",
    role: "Full-Stack Facilitator Graduate 2024",
  },
  {
    text: "Being here with everyone just made learning really exciting.",
    name: "Andrea Bierer",
    role: "Full-Stack Facilitator Graduate 2024",
  },
  {
    text: "I\u2019m leaving with tons of new stuff, and I can\u2019t wait to get cracking.",
    name: "David Meade",
    role: "Full-Stack Facilitator Graduate 2024",
  },
  {
    text: "If you feel that you\u2019re naturally a facilitator, but you haven\u2019t had the language to communicate what it is you\u2019re good at or how to go about doing it \u2013 this training is for you!",
    name: "Theo Tabah",
    role: "Full-Stack Facilitator Graduate 2024",
  },
];

export default function TestimonialQuote() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? quotes.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === quotes.length - 1 ? 0 : c + 1));

  return (
    <section className="relative w-full min-h-[500px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/photos/testimonial-bg.jpg"
        alt="Facilitator workshop participant"
        fill
        className="object-cover"
        sizes="100vw"
        priority={false}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />

      {/* Quote Content */}
      <div className="relative z-10 flex flex-col justify-center h-full min-h-[500px] px-16 md:px-20 lg:px-28 py-16 max-w-4xl">
        <blockquote className="mb-8">
          <p className="text-3xl md:text-4xl lg:text-[42px] font-black text-white leading-tight">
            &ldquo;{quotes[current].text}&rdquo;
          </p>
        </blockquote>

        <div className="space-y-1">
          <p className="text-white text-lg font-semibold">
            {quotes[current].name}
          </p>
          <p className="text-white/80 text-sm">{quotes[current].role}</p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border-2 border-white/60 flex items-center justify-center text-white/80 hover:bg-white/20 hover:border-white transition-all"
        aria-label="Previous testimonial"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border-2 border-white/60 flex items-center justify-center text-white/80 hover:bg-white/20 hover:border-white transition-all"
        aria-label="Next testimonial"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </section>
  );
}
