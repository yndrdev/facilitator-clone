export default function UpcomingDates() {
  return (
    <section id="dates" className="py-20 bg-[#f5f5f5]">
      <div className="max-w-[1280px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-black text-black text-center mb-12">
          Upcoming Training Dates
        </h2>

        {/* Upcoming event card */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm border-l-4 border-l-brand-yellow">
          <div className="p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            {/* Left side - event details */}
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-black text-black mb-4">
                Full-Stack Facilitator California
              </h3>
              <div className="flex items-center gap-2 text-sm text-brand-gray mb-2">
                <svg
                  className="w-4 h-4 text-brand-muted shrink-0"
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
                Hotel Citrine, Palo Alto, CA {"\u{1F1FA}\u{1F1F8}"}
              </div>
              <div className="flex items-center gap-2 text-sm text-brand-gray">
                <svg
                  className="w-4 h-4 text-brand-muted shrink-0"
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
                July 27 - 31, 2026
              </div>
            </div>

            {/* Right side - price and CTA */}
            <div className="flex flex-col items-start sm:items-end shrink-0">
              <p className="text-2xl font-black text-black mb-3">$14,300.00</p>
              <a
                href="#"
                className="bg-brand-yellow text-black font-bold px-8 py-3 rounded-full hover:brightness-95 transition shadow-md text-center whitespace-nowrap"
              >
                Buy your ticket
              </a>
              <p className="text-sm text-red-500 font-medium mt-2">
                Limited tickets available!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
