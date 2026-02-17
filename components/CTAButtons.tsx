export default function CTAButtons() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col items-center gap-5">
        <a
          href="#dates"
          className="inline-flex items-center justify-center bg-black text-white font-semibold text-lg px-12 py-5 rounded-full hover:bg-gray-800 transition-colors"
        >
          Check available dates
        </a>
        <a
          href="/brochure.pdf"
          download
          className="inline-flex items-center gap-2 text-sm font-bold text-black hover:opacity-70 transition-opacity"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v12m0 0l-4-4m4 4l4-4"
              />
            </svg>
          </span>
          Download Brochure
        </a>
      </div>
    </section>
  );
}
