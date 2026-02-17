const levels = [
  {
    emoji: "🌱",
    level: "Beginner",
    question: "Interested in learning Facilitation and Collaboration from the ground up?",
    answer: "We\u2019ll teach you all the fundamentals you need to start your facilitation journey.",
    bg: "bg-brand-yellow",
  },
  {
    emoji: "🌿",
    level: "Intermediate",
    question: "Have some experience but want to build a more robust foundation for your skills?",
    answer: "We\u2019ll teach you a framework that will carry you through your entire facilitation career.",
    bg: "bg-brand-yellow",
  },
  {
    emoji: "🌳",
    level: "Advanced",
    question: "Interested in learning how AJ&Smart approaches facilitation and collaboration?",
    answer: "We\u2019ll show you our \u2018secret sauce\u2019 that powers all of AJ&Smart\u2019s workshops.",
    bg: "bg-brand-yellow",
  },
];

export default function WhoIsItFor() {
  return (
    <section className="py-20 bg-brand-yellow">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-black mb-4">
            Who&apos;s This Training For?
          </h2>
          <p className="text-xl text-black/80 max-w-2xl mx-auto">
            Whether you&apos;re a total newbie or seasoned-pro, Full-Stack
            Facilitator has something for you!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {levels.map((lvl) => (
            <div
              key={lvl.level}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4">{lvl.emoji}</div>
              <h3 className="text-xl font-black text-black mb-3">
                {lvl.level}
              </h3>
              <p className="text-sm text-black leading-relaxed">
                <strong className="font-bold">{lvl.question}</strong>{" "}
                {lvl.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
