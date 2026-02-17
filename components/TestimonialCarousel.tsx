"use client";

import { useState } from "react";

const testimonials = [
  {
    quote:
      "If you feel that you\u2019re naturally a facilitator, but you haven\u2019t had the language to communicate what it is you\u2019re good at or how to go about doing it \u2013 this training is for you!",
    name: "Theo Tabah",
    role: "Full-Stack Facilitator Graduate 2024",
  },
  {
    quote:
      "Now that I\u2019ve been through this, I\u2019m pretty sure I can facilitate pretty much anything!",
    name: "Jen Shoop",
    role: "Full-Stack Facilitator Graduate 2024",
  },
  {
    quote:
      "Being here with everyone just made learning really exciting.",
    name: "Andrea Bierer",
    role: "Full-Stack Facilitator Graduate 2024",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="relative max-w-4xl mx-auto">
          {/* Cards */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div key={i} className="w-full shrink-0 px-4">
                  <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
                    <div className="text-6xl text-brand-yellow font-serif leading-none mb-4">
                      &ldquo;
                    </div>
                    <p className="text-lg md:text-xl font-medium text-black leading-relaxed mb-8">
                      {t.quote}
                    </p>
                    <div>
                      <p className="font-bold text-black">{t.name}</p>
                      <p className="text-sm text-brand-muted">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all"
              aria-label="Previous"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all"
              aria-label="Next"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
