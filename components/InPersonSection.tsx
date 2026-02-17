import Image from "next/image";

const photos = [
  { src: "/images/photos/gallery-1.jpg", alt: "In-person facilitation workshop" },
  { src: "/images/photos/gallery-2.jpg", alt: "Collaborative group learning" },
  { src: "/images/photos/gallery-3.jpg", alt: "Workshop participants in discussion" },
  { src: "/images/photos/gallery-4.jpg", alt: "Hands-on facilitation training" },
  { src: "/images/photos/gallery-5.jpg", alt: "Team building exercise" },
  { src: "/images/photos/gallery-6.jpg", alt: "In-person training in Palo Alto" },
];

export default function InPersonSection() {
  // Duplicate for seamless infinite scroll
  const allPhotos = [...photos, ...photos, ...photos];

  return (
    <section id="inperson" className="py-20 bg-white border-t border-brand-border">
      {/* Centered headline */}
      <div className="max-w-[1280px] mx-auto px-6 mb-10">
        <div className="text-center">
          <p className="text-[58px] font-bold text-black leading-none mb-2">
            In-Person &mdash;
          </p>
          <div className="relative inline-block">
            <p className="text-[88px] font-bold italic text-black leading-none">
              Incredible!
            </p>
            {/* Yellow swirl decoration */}
            <svg
              className="absolute -right-10 -top-4 w-16 h-16"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30 5C40 8 50 15 48 28C46 41 35 48 22 45C14 43 8 36 10 26C12 18 20 14 28 16C34 18 38 24 36 30C34 35 28 38 23 36"
                stroke="#fff200"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>
        </div>

        <p className="text-[28px] font-medium text-black leading-[120%] text-center max-w-4xl mx-auto mt-8">
          Zoom fatigue? Us too! We believe there&apos;s a unique magic when
          people come together to learn in-person. We&apos;re excited to offer
          Full-Stack Facilitator in Palo Alto, the heart of tech in the US.
        </p>
      </div>

      {/* Full-width horizontal image carousel */}
      <div className="overflow-hidden px-6">
        <div
          className="flex gap-[30px] w-max"
          style={{
            animation: "marquee 40s linear infinite",
          }}
        >
          {allPhotos.map((photo, i) => (
            <div
              key={`${photo.alt}-${i}`}
              className="shrink-0 relative rounded-2xl overflow-hidden"
              style={{ width: 675, height: 380 }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="675px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
