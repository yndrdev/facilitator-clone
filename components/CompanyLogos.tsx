const logos = [
  // Row 1
  { src: "/images/logos/adidas.svg", alt: "Adidas" },
  { src: "/images/logos/autonation.svg", alt: "AutoNation Mobility" },
  { src: "/images/logos/publicis-groupe.svg", alt: "Publicis Groupe" },
  { src: "/images/logos/airbnb.svg", alt: "Airbnb" },
  { src: "/images/logos/pg.svg", alt: "P&G" },
  { src: "/images/logos/uber.svg", alt: "Uber" },
  { src: "/images/logos/google.svg", alt: "Google" },
  { src: "/images/logos/ge.svg", alt: "GE" },
  { src: "/images/logos/prosiebensat1.svg", alt: "ProSiebenSat.1" },
  // Row 2
  { src: "/images/logos/sharethemeal.svg", alt: "ShareTheMeal" },
  { src: "/images/logos/netflix.svg", alt: "Netflix" },
  { src: "/images/logos/hsbc.svg", alt: "HSBC" },
  { src: "/images/logos/rise.svg", alt: "RISE" },
  { src: "/images/logos/tetra-pak.svg", alt: "Tetra Pak" },
  { src: "/images/logos/n26.svg", alt: "N26" },
  { src: "/images/logos/gp-strategies.svg", alt: "GP Strategies" },
  { src: "/images/logos/zero.svg", alt: "Zero" },
  { src: "/images/logos/ikea.svg", alt: "IKEA" },
];

export default function CompanyLogos() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 mb-16">
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

      <div className="max-w-[1280px] mx-auto px-6">
        <div
          className="flex flex-wrap justify-center items-center"
          style={{ gap: 30 }}
        >
          {logos.map((logo) => (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              width={166}
              height={165}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
