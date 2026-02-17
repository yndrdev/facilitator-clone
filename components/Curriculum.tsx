const days = [
  {
    dayLabel: "DAY 1 OF 5",
    time: "4pm – 7pm",
    title: "Orientation Evening",
    summary:
      "Day one is all about arriving, settling in and getting to know the new friends you\u2019re going to be spending the week with.",
    tags: ["Introductions", "Training Overview", "Materials"],
    tagLabel: "CORE ACTIVITIES",
    detailsLabel: "What to expect:",
    details: [
      "Arrival and familiarizing yourself with the training location",
      "Meeting the AJ&Smart team and your fellow participants",
      "Collecting your training materials and nametag",
      "A chance to network and get to know everybody in a more relaxed environment before the training starts",
      "A short presentation giving an overview of the week ahead",
    ],
    cardBg: "bg-[#fdf6e8]",
  },
  {
    dayLabel: "DAY 2 OF 5",
    time: "10am – 6pm",
    title: "Collaboration & Decision Making",
    summary:
      "Learn and deeply understand the fundamental reason why teams struggle to collaborate on complex challenges (and how Facilitation can help).",
    tags: ["Group Dynamics", "Decision Making", "Problem-Solving"],
    tagLabel: "CORE TOPICS",
    detailsLabel: "What you\u2019ll learn:",
    details: [
      "A simple but powerful framework for understanding group dynamics: How groups make decisions, solve problems and come up with innovative solutions",
      "Why collaboration breaks down within most groups, including common pitfalls and challenges",
      "How our brains didn\u2019t develop for decision-making and problem-solving in modern, complex work settings",
      "How facilitation and workshops can improve collaboration without disrupting established patterns of work",
    ],
    cardBg: "bg-[#e8faf4]",
  },
  {
    dayLabel: "DAY 3 OF 5",
    time: "10am – 6pm",
    title: "Facilitation Fundamentals",
    summary:
      "Understand the foundational theory, skills and techniques designed to enable facilitators to help groups to collaborate better and make better decisions, faster.",
    tags: ["Facilitation Theory", "Facilitation Core Skills"],
    tagLabel: "CORE TOPICS",
    detailsLabel: "What you\u2019ll learn:",
    details: [
      "The foundations of facilitation: Understand what facilitation is, what a facilitator does and why facilitation is essential for a team\u2019s success",
      "When and why we need facilitation: Learn where a skilled facilitator is crucial, and why facilitation is becoming THE skill of the future",
      "The facilitator\u2019s toolbox: Learn the core skills and techniques every facilitator needs to manage group dynamics and make teamwork smoother and more effective",
    ],
    cardBg: "bg-[#f3edff]",
  },
  {
    dayLabel: "DAY 4 OF 5",
    time: "10am – 6pm",
    title: "Workshop Design 101",
    summary:
      "Learn the practical tools every facilitator needs to be familiar with to design, modify, and run successful purpose-built, custom workshops.",
    tags: ["Workshop Principles", "The Anatomy of a Workshop", "Core Materials and Activities"],
    tagLabel: "CORE TOPICS",
    detailsLabel: "What you\u2019ll learn:",
    details: [
      'A blueprint for understanding the structure of a successful workshop through our famous "4Cs Framework"',
      "How to design, modify, and run workshops from scratch, and understanding what to do before, during and after a workshop",
      "The core materials and activities we recommend for running successful workshops",
    ],
    cardBg: "bg-[#e6f4ff]",
  },
  {
    dayLabel: "DAY 5 OF 5",
    time: "10am – 6pm",
    title: "Live Practice & Graduation Ceremony",
    summary:
      "You\u2019ll put your new skills to the test in a low-risk, fun, live practice session, and then receive your certification!",
    tags: ["Practical Application", "Graduation"],
    tagLabel: "CORE TOPICS",
    detailsLabel: "What you\u2019ll learn:",
    details: [
      "Put everything you\u2019ve learned into practice: you\u2019ll facilitate a workshop, practice your facilitation skills, and deal with troublemaker participants",
      "Graduation ceremony where you\u2019ll receive your signed certificate and celebrate with your peers",
      "Closing Circle where we\u2019ll recap and reflect on the week",
    ],
    cardBg: "bg-[#f7e9f5]",
  },
];

export default function Curriculum() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight max-w-4xl mx-auto">
            A Decade of Experience,
            <br />
            Turned into <em className="italic">Days</em> of Learning
          </h2>
          <p className="mt-6 text-lg text-brand-muted max-w-2xl mx-auto">
            Full-Stack Facilitator compresses over 14 years of practical
            facilitation and collaboration experience into 5 days of hands-on
            learning!
          </p>
        </div>

        {/* Days */}
        <div className="space-y-6">
          {days.map((day, i) => (
            <div
              key={i}
              className="grid md:grid-cols-2 gap-0 rounded-2xl border border-gray-200 overflow-hidden"
            >
              {/* Left: Day card */}
              <div className={`${day.cardBg} p-8 md:p-10`}>
                <p className="text-xs font-semibold tracking-wider uppercase text-brand-muted mb-3">
                  {day.dayLabel} &bull; {day.time}
                </p>
                <h3 className="text-2xl md:text-3xl font-black text-black mb-4">
                  {day.title}
                </h3>
                <p className="text-base text-brand-gray leading-relaxed mb-6">
                  {day.summary}
                </p>
                <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-brand-muted mb-3">
                  {day.tagLabel}
                </p>
                <div className="flex flex-wrap gap-2">
                  {day.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm font-semibold bg-brand-yellow/50 text-black px-4 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: What to expect / learn */}
              <div className="bg-white p-8 md:p-10 flex flex-col justify-center">
                <p className="text-base font-bold text-black mb-5">
                  {day.detailsLabel}
                </p>
                <ul className="space-y-4">
                  {day.details.map((detail, j) => (
                    <li key={j} className="flex gap-3 text-base text-brand-gray leading-relaxed">
                      <span className="shrink-0 mt-1">&bull;</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
