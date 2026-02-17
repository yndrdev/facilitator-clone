import Image from "next/image";

// Row 1 logos (top marquee, scrolls left)
const row1 = [
  { src: "/images/logos/ge.svg", alt: "GE", w: 50, h: 50 },
  { src: "/images/logos/prosiebensat1.svg", alt: "ProSiebenSat.1", w: 120, h: 40 },
  { src: "/images/logos/hyper-island.svg", alt: "Hyper Island", w: 50, h: 50 },
  { src: "/images/logos/similarweb.svg", alt: "Similarweb", w: 120, h: 30 },
  { src: "/images/logos/adidas.svg", alt: "Adidas", w: 60, h: 40 },
  { src: "/images/logos/autonation.svg", alt: "AutoNation", w: 120, h: 40 },
  { src: "/images/logos/publicis-groupe.svg", alt: "Publicis Groupe", w: 120, h: 40 },
  { src: "/images/logos/google.svg", alt: "Google", w: 100, h: 35 },
  { src: "/images/logos/rise.svg", alt: "RISE", w: 80, h: 30 },
  { src: "/images/logos/tetra-pak.svg", alt: "Tetra Pak", w: 50, h: 50 },
  { src: "/images/logos/n26.svg", alt: "N26", w: 70, h: 30 },
];

// Row 2 logos (bottom marquee, scrolls right)
const row2 = [
  { src: "/images/logos/gp-strategies.svg", alt: "GP Strategies", w: 50, h: 40 },
  { src: "/images/logos/zero.svg", alt: "Zero", w: 70, h: 30 },
  { src: "/images/logos/ikea.svg", alt: "IKEA", w: 70, h: 35 },
  { src: "/images/logos/airbnb.svg", alt: "Airbnb", w: 100, h: 35 },
  { src: "/images/logos/hsbc.svg", alt: "HSBC", w: 100, h: 30 },
  { src: "/images/logos/pg.svg", alt: "P&G", w: 60, h: 30 },
  { src: "/images/logos/uber.svg", alt: "Uber", w: 80, h: 25 },
  { src: "/images/logos/sharethemeal.svg", alt: "ShareTheMeal", w: 100, h: 40 },
  { src: "/images/logos/netflix.svg", alt: "Netflix", w: 100, h: 30 },
  { src: "/images/logos/eon.svg", alt: "E.ON", w: 70, h: 30 },
  { src: "/images/logos/slack.svg", alt: "Slack", w: 90, h: 25 },
];

function MarqueeRow({
  logos,
  reverse = false,
  speed = 30,
}: {
  logos: typeof row1;
  reverse?: boolean;
  speed?: number;
}) {
  // Duplicate logos for seamless loop
  const doubled = [...logos, ...logos];

  return (
    <div className="overflow-hidden py-6">
      <div
        className="flex items-center gap-16 w-max"
        style={{
          animation: `marquee ${speed}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {doubled.map((logo, i) => (
          <div
            key={`${logo.alt}-${i}`}
            className="shrink-0 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
            style={{ width: logo.w, height: logo.h }}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.w}
              height={logo.h}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CompanyLogos() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 mb-12">
        <h2 className="text-3xl md:text-5xl font-black text-black text-center mb-4 leading-tight">
          We&apos;ve trained over 35,000 people<br />from 100s of companies.
        </h2>
        <p className="text-base md:text-lg text-brand-muted text-center max-w-3xl mx-auto leading-relaxed">
          For over a decade, we design and run facilitation training programs
          for companies of all shapes and sizes. They all have one thing in
          common: They want to make working together more efficient and
          valuable!
        </p>
      </div>

      <div className="max-w-[1280px] mx-auto">
        <MarqueeRow logos={row1} speed={35} />
        <MarqueeRow logos={row2} reverse speed={40} />
      </div>
    </section>
  );
}
