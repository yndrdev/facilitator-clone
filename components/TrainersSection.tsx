import Image from "next/image";

const trainers = [
  {
    name: "Jonathan",
    bio: "Jonathan is founder and CEO of facilitator.com. He loves to help people work better together.",
    img: "/images/photos/gallery-1.jpg",
  },
  {
    name: "Rebecca",
    bio: "Rebecca is Facilitation Coach and has trained thousands of people from all over the world.",
    img: "/images/photos/gallery-2.jpg",
  },
];

export default function TrainersSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-black text-black text-center mb-16">
          Meet Your Trainers:
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
          {trainers.map((trainer) => (
            <div
              key={trainer.name}
              className="bg-white rounded-2xl shadow-md p-8 text-center"
            >
              <div className="relative w-36 h-36 mx-auto mb-6">
                <Image
                  src={trainer.img}
                  alt={trainer.name}
                  fill
                  className="object-cover rounded-full ring-4 ring-brand-yellow"
                  sizes="144px"
                />
              </div>
              <p className="font-bold text-lg text-black mb-2">{trainer.name}</p>
              <p className="text-sm text-brand-muted leading-relaxed">
                {trainer.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
