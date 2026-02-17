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
        <div className="border border-[#e5e5e5] rounded-2xl px-6 md:px-10 py-7">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-5">
            {items.map((item, index) => (
              <div
                key={item.label}
                className={`flex flex-col gap-2 px-5 md:px-6 ${
                  index < items.length - 1
                    ? "border-r border-[#e5e5e5]"
                    : ""
                } ${index === 0 ? "pl-0" : ""}`}
              >
                <p className="text-[22px] font-bold text-black leading-[130%]">
                  {item.label}
                </p>
                <p className="text-[18px] font-medium text-[#333] leading-[130%]">
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
