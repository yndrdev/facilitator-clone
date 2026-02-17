export default function InfoBar() {
  const items = [
    { label: "Duration", value: "5 days in-person" },
    { label: "Locations", value: "Palo Alto, USA" },
    { label: "Price", value: "$14,300" },
    { label: "Certification", value: "Certificate of completion" },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-[1280px] mx-auto px-6 py-8">
        <div className="bg-[#f5f5f5] rounded-2xl px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {items.map((item, index) => (
              <div
                key={item.label}
                className={`flex flex-col gap-1.5 px-6 ${
                  index === 0 ? "pl-2" : ""
                } ${
                  index < items.length - 1
                    ? "border-r border-brand-border"
                    : ""
                }`}
              >
                <p className="text-sm font-bold text-black leading-snug">
                  {item.label}
                </p>
                <p className="text-[15px] font-normal text-brand-muted leading-snug">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
