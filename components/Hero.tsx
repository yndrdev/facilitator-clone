import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-brand-yellow">
      <div className="max-w-[1280px] mx-auto px-6 pt-20 md:pt-32 pb-8">
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-black mb-4">
          In-Person Training Program
        </p>
        <h1 className="text-[clamp(3rem,8vw,6.5rem)] font-black leading-[0.95] tracking-tight text-black mb-8">
          Full-Stack
          <br />
          Facilitator
        </h1>
        <div className="max-w-2xl mb-8">
          <p className="text-lg md:text-xl text-black leading-relaxed">
            <strong className="font-bold">
              Our transformational 5-day training bootcamp
            </strong>{" "}
            where you&apos;ll learn the fundamentals of facilitation, group
            dynamics, and workshop design.
          </p>
          <p className="text-lg md:text-xl text-black mt-2">
            It&apos;s immersive, it&apos;s practical, it&apos;s fun!
          </p>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur rounded-full px-4 py-2 text-sm font-medium text-black border border-black/10">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
            </svg>
            In-Person
          </span>
          <span className="text-black font-bold text-lg">+</span>
          <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur rounded-full px-4 py-2 text-sm font-medium text-black border border-black/10">
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
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
            Online Coaching
          </span>
          <span className="text-black font-bold text-lg">+</span>
          <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur rounded-full px-4 py-2 text-sm font-medium text-black border border-black/10">
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
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Video Course
          </span>
        </div>
      </div>

      {/* Video placeholder */}
      <div className="max-w-[1280px] mx-auto px-6 pb-0">
        <div className="relative w-full aspect-video rounded-t-2xl overflow-hidden bg-black/10">
          <Image
            src="/images/photos/workshop-1.jpg"
            alt="Workshop training session"
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1280px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
              <svg
                className="w-6 h-6 text-black ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
