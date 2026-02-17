import Image from "next/image";

const photos = [
  {
    src: "/images/photos/classroom-1.jpg",
    alt: "Fun training environment 1",
  },
  {
    src: "/images/photos/classroom-2.jpg",
    alt: "Engaging workshop session",
  },
  {
    src: "/images/photos/classroom-3.jpg",
    alt: "Fun training environment 2",
  },
];

export default function EduTainment() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-black leading-tight mb-4">
            Learn through
            <br />
            <span className="text-5xl md:text-6xl font-[var(--font-caveat)]">
              Edu-Tainment!
            </span>
          </h2>
          <p className="text-base text-brand-muted max-w-2xl mx-auto leading-relaxed">
            Facilitation training has a reputation of being pretty boring and
            old-school. Not ours! We believe what you learn &ldquo;sticks&rdquo;
            when you&apos;re having fun. We&apos;ll never host our training in a
            badly-lit conference room, ever!
          </p>
        </div>

        {/* 3 photos in a row matching live site */}
        <div className="grid grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`relative rounded-xl overflow-hidden group ${
                i === 1 ? "aspect-[3/2]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 33vw, 400px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
