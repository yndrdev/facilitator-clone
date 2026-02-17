import Image from "next/image";

const benefits = [
  {
    text: "A facilitator can help teams",
    highlight: "make better decisions.",
    img: "/images/photos/benefit-1.jpg",
  },
  {
    text: "Facilitated meetings have",
    highlight: "less conflict.",
    img: "/images/photos/benefit-2.jpg",
  },
  {
    text: "A facilitator can help teams",
    highlight: "solve problems faster.",
    img: "/images/photos/benefit-3.jpg",
  },
  {
    text: "A facilitator ensures",
    highlight: "actionable outcomes.",
    img: "/images/photos/benefit-4.jpg",
  },
];

export default function TheFix() {
  const rayCount = 28;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Hand-drawn curved arrows pointing down */}
        <div className="flex justify-center gap-12 mb-6">
          <svg className="w-16 h-24 text-black" viewBox="0 0 60 90" fill="none">
            <path
              d="M30 5 C20 20, 12 40, 18 60 C22 72, 28 78, 30 85"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            <path d="M24 78 L30 88 L36 78" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
          <svg className="w-16 h-24 text-black" viewBox="0 0 60 90" fill="none">
            <path
              d="M30 5 C38 18, 22 30, 35 45 C42 55, 32 70, 30 85"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            <path d="M24 78 L30 88 L36 78" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
          <svg className="w-16 h-24 text-black" viewBox="0 0 60 90" fill="none">
            <path
              d="M30 5 C40 20, 48 40, 42 60 C38 72, 32 78, 30 85"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            <path d="M24 78 L30 88 L36 78" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </div>

        {/* Sunburst with "The Fix? Facilitators!" */}
        <div className="flex justify-center mb-20">
          <div className="sun-pulse relative w-[340px] h-[340px] md:w-[480px] md:h-[480px] flex items-center justify-center">
            {/* Sunburst rays - triangular/tapered shapes radiating from center */}
            {Array.from({ length: rayCount }).map((_, i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  width: "40px",
                  height: "200px",
                  left: "50%",
                  top: "50%",
                  transformOrigin: "center top",
                  transform: `translate(-50%, 0) rotate(${i * (360 / rayCount)}deg)`,
                }}
              >
                <div
                  className="w-full h-full"
                  style={{
                    backgroundColor: "#fff200",
                    clipPath: "polygon(50% 0%, 15% 100%, 85% 100%)",
                    opacity: 0.95,
                  }}
                />
              </div>
            ))}

            {/* White circle behind text for clean readability */}
            <div
              className="absolute rounded-full bg-white z-[5]"
              style={{ width: "62%", height: "62%" }}
            />

            {/* Center text on top of rays */}
            <div className="relative z-10 text-center">
              <p className="text-5xl md:text-7xl font-black text-black leading-tight">
                The Fix?
              </p>
              <p className="text-5xl md:text-7xl font-black text-black mt-1">
                <span className="bg-brand-yellow px-4 py-1 inline-block">
                  Facilitators!
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Benefits grid with photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 max-w-4xl mx-auto">
          {benefits.map((b, i) => (
            <div key={i} className="flex flex-col">
              {/* Text above photo */}
              <p className="text-lg md:text-xl leading-relaxed text-gray-800 mb-4 text-center">
                {b.text}
                <br />
                <span
                  className="font-black text-black"
                  style={{
                    backgroundImage:
                      "linear-gradient(to top, #fff200 40%, transparent 40%)",
                    paddingBottom: "2px",
                  }}
                >
                  {b.highlight}
                </span>
              </p>
              {/* Photo */}
              <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden">
                <Image
                  src={b.img}
                  alt={b.highlight}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 450px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
