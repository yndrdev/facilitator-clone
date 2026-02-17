"use client";

import { useState } from "react";
import Image from "next/image";

const pastEvents = [
  {
    title: "Full-Stack Facilitator\nCalifornia",
    location: "Hotel Citrine, Palo Alto, CA",
    flag: "\u{1F1FA}\u{1F1F8}",
    date: "July 28 - August 1, 2025",
    price: "$14,300.00",
    image: "/images/photos/gallery-3.jpg",
  },
  {
    title: "Full-Stack Facilitator\nBerlin",
    location: "AJ&Smart, Berlin, Germany",
    flag: "\u{1F1E9}\u{1F1EA}",
    date: "October 14 - 18, 2024",
    price: "\u20AC13,300.00",
    image: "/images/photos/gallery-4.jpg",
  },
  {
    title: "Full-Stack Facilitator California",
    location: "Hotel Citrine, Palo Alto, CA",
    flag: "\u{1F1FA}\u{1F1F8}",
    date: "July 30 - August 2, 2024",
    price: "$14,300.00",
    image: "/images/photos/gallery-5.jpg",
  },
  {
    title: "Full-Stack Facilitator\nBerlin",
    location: "AJ&Smart, Berlin, Germany",
    flag: "\u{1F1E9}\u{1F1EA}",
    date: "May 21 - 24, 2024",
    price: "\u20AC13,300.00",
    image: "/images/photos/gallery-6.jpg",
  },
];

export default function PastDates() {
  const [scrollPos, setScrollPos] = useState(0);

  return (
    <section className="py-16 bg-[#f5f5f5]">
      <div className="max-w-[1280px] mx-auto px-6">
        <h2 className="text-2xl font-black text-black mb-8">
          Past Training Dates
        </h2>

        <div className="relative">
          <div
            className="flex gap-6 overflow-x-auto no-scrollbar pb-4"
            onScroll={(e) =>
              setScrollPos((e.target as HTMLDivElement).scrollLeft)
            }
          >
            {pastEvents.map((evt, i) => (
              <div
                key={i}
                className="min-w-[280px] max-w-[300px] bg-white rounded-2xl border border-gray-200 overflow-hidden shrink-0 shadow-sm"
              >
                {/* Event photo */}
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={evt.image}
                    alt={evt.title}
                    fill
                    className="object-cover"
                    sizes="300px"
                  />
                  <span className="absolute top-3 left-3 inline-block text-[10px] font-bold tracking-wider uppercase text-red-600 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    Event Over
                  </span>
                </div>

                {/* Event details */}
                <div className="p-5">
                  <h3 className="text-base font-black text-black mb-3 leading-tight whitespace-pre-line">
                    {evt.title}
                  </h3>

                  <div className="flex items-start gap-2 text-sm text-brand-muted mb-1.5">
                    <svg
                      className="w-3.5 h-3.5 mt-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>
                      {evt.location} {evt.flag}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-brand-muted mb-4">
                    <svg
                      className="w-3.5 h-3.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {evt.date}
                  </div>

                  <p className="text-lg font-black text-black">{evt.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll arrow */}
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center z-10 border border-gray-200 hover:bg-gray-50"
            onClick={() => {
              const container = document.querySelector('.no-scrollbar');
              if (container) container.scrollBy({ left: 320, behavior: 'smooth' });
            }}
            aria-label="Scroll right"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
