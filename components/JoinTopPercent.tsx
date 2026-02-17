import Image from "next/image";

export default function JoinTopPercent() {
  return (
    <section className="py-20 bg-brand-yellow">
      <div className="max-w-[1280px] mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-black text-black leading-tight mb-6">
          Join the Top 1%
        </h2>
        <p className="text-base md:text-lg text-black/70 leading-relaxed max-w-2xl mx-auto mb-4">
          Full-Stack Facilitator is limited to 50 attendees per year,
          making it our most exclusive program and certification to-date.
        </p>
        <p className="text-sm text-black/50 mb-10">
          Palo Alto Class of 2024
        </p>

        <div className="relative rounded-2xl overflow-hidden aspect-[2/1] max-w-4xl mx-auto mb-10">
          <Image
            src="/images/photos/group-1.png"
            alt="Palo Alto Class of 2024"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
          <a
            href="#dates"
            className="bg-black text-white font-bold px-8 py-4 rounded-full hover:bg-black/90 transition"
          >
            Check available dates
          </a>
          <button className="flex items-center gap-2 bg-white text-black border border-black font-bold px-8 py-4 rounded-full hover:bg-gray-50 transition">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Brochure
          </button>
        </div>
      </div>
    </section>
  );
}
