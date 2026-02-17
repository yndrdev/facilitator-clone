const days = [
  {
    dayLabel: "DAY 1 OF 5  \u2022  4pm \u2013 7pm",
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
    dayLabel: "DAY 2 OF 5  \u2022  10am \u2013 6pm",
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
    dayLabel: "DAY 3 OF 5  \u2022  10am \u2013 6pm",
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
    dayLabel: "DAY 4 OF 5  \u2022  10am \u2013 6pm",
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
    dayLabel: "DAY 5 OF 5  \u2022  10am \u2013 6pm",
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
          <h2 className="text-[48px] font-bold text-black leading-[100%] text-center max-w-4xl mx-auto">
            A Decade of Experience,
            <br />
            Turned into <em className="italic">Days</em> of Learning
          </h2>
          <p className="mt-6 text-[24px] font-medium text-black leading-[120%] max-w-2xl mx-auto">
            Full-Stack Facilitator compresses over 14 years of practical
            facilitation and collaboration experience into 5 days of hands-on
            learning!
          </p>
        </div>

        {/* Days */}
        <div className="space-y-10">
          {days.map((day, i) => (
            <div
              key={i}
              className="grid md:grid-cols-2 gap-8 md:gap-12 items-start"
            >
              {/* Left: Day card with border */}
              <div className={`${day.cardBg} rounded-2xl border border-gray-200 p-8 md:p-10`}>
                <p className="text-[13px] font-bold tracking-[0.05em] uppercase text-black/70 leading-[125%] mb-3">
                  {day.dayLabel}
                </p>
                <h3 className="text-[32px] font-bold text-black leading-[120%] mb-4">
                  {day.title}
                </h3>
                <p className="text-[22px] font-medium text-[#333] leading-[120%] mb-8">
                  {day.summary}
                </p>
                <p className="text-[13px] font-bold tracking-[0.05em] uppercase text-black/70 leading-[125%] mb-3">
                  {day.tagLabel}
                </p>
                <div className="flex flex-wrap gap-2">
                  {day.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm font-semibold bg-brand-yellow/40 text-black px-4 py-2 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: What to expect / learn - no border */}
              <div className="pt-2 md:pt-4">
                <p className="text-[20px] font-bold text-black leading-[130%] mb-6">
                  {day.detailsLabel}
                </p>
                <ul className="space-y-5">
                  {day.details.map((detail, j) => (
                    <li key={j} className="flex gap-4 items-start">
                      <span className="shrink-0 mt-2 w-2 h-2 rounded-full bg-brand-yellow" />
                      <span className="text-[18px] font-medium text-[#333] leading-[130%]">
                        {detail}
                      </span>
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
