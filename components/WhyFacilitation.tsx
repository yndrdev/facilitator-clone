const stats = [
  {
    value: "$100",
    unit: "Million",
    desc: "is the yearly cost for big companies for staff being in pointless meetings.",
    source: "Bloomberg 2022",
  },
  {
    value: "65%",
    unit: "",
    desc: "of senior managers say that meetings keep them from completing their own work.",
    source: "Harvard Business Review 2017",
  },
  {
    value: "58%",
    unit: "",
    desc: "of Americans would rather go to a doctor\u2019s appointment than attend a work meeting.",
    source: "Deputy 2022",
  },
  {
    value: "75%",
    unit: "",
    desc: "of decision-makers feel that collaboration needs to be improved in their companies.",
    source: "Forrester Research 2021",
  },
];

export default function WhyFacilitation() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black leading-tight mb-4">
            Why facilitation?
          </h2>
          <p className="text-xl md:text-2xl text-black/80 max-w-2xl mx-auto leading-relaxed">
            Because helping people work better together is{" "}
            <br className="hidden md:block" />
            <strong className="font-black">more important than ever before!</strong>
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-brand-dark rounded-2xl p-6 text-white flex flex-col justify-between min-h-[220px]"
            >
              <div>
                <div className="mb-3">
                  <span className="text-3xl md:text-4xl font-black text-brand-yellow">
                    {stat.value}
                  </span>
                  {stat.unit && (
                    <span className="text-xl md:text-2xl font-black text-brand-yellow ml-1">
                      {stat.unit}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {stat.desc}
                </p>
              </div>
              <p className="text-xs text-gray-500 mt-4">{stat.source}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
