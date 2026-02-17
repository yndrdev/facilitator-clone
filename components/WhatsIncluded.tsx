const items = [
  {
    icon: (
      <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Lightbulb / screen at top */}
        <rect x="40" y="6" width="60" height="42" rx="4" fill="#fff200" stroke="black" strokeWidth="2.5" />
        <rect x="46" y="12" width="48" height="30" rx="2" stroke="black" strokeWidth="1.5" />
        <line x1="60" y1="48" x2="60" y2="54" stroke="black" strokeWidth="2" />
        <line x1="80" y1="48" x2="80" y2="54" stroke="black" strokeWidth="2" />
        <line x1="55" y1="54" x2="85" y2="54" stroke="black" strokeWidth="2" />
        {/* Lightbulb icon on screen */}
        <ellipse cx="70" cy="24" rx="8" ry="9" stroke="black" strokeWidth="1.5" />
        <line x1="66" y1="33" x2="74" y2="33" stroke="black" strokeWidth="1.5" />
        <line x1="67" y1="36" x2="73" y2="36" stroke="black" strokeWidth="1.5" />
        <line x1="70" y1="15" x2="70" y2="12" stroke="black" strokeWidth="1.2" />
        <line x1="60" y1="18" x2="57" y2="15" stroke="black" strokeWidth="1.2" />
        <line x1="80" y1="18" x2="83" y2="15" stroke="black" strokeWidth="1.2" />
        {/* Row of 8 people below */}
        {[18, 32, 46, 60, 74, 88, 102, 116].map((cx) => (
          <g key={cx}>
            <circle cx={cx} cy="80" r="5" stroke="black" strokeWidth="1.8" fill="none" />
            <path d={`M${cx - 7} 98 Q${cx - 7} 88 ${cx} 88 Q${cx + 7} 88 ${cx + 7} 98`} stroke="black" strokeWidth="1.8" fill="none" />
          </g>
        ))}
        {/* Floor line */}
        <line x1="8" y1="100" x2="132" y2="100" stroke="black" strokeWidth="1.5" strokeDasharray="3 3" />
        {/* Decorative hand-drawn squiggles */}
        <path d="M20 115 Q30 110 40 115 Q50 120 60 115 Q70 110 80 115 Q90 120 100 115 Q110 110 120 115" stroke="black" strokeWidth="1.2" fill="none" />
      </svg>
    ),
    title: "In-Person Training",
    desc: "5 days of immersive, hands-on training in a beautiful, creative environment.",
    bg: "bg-[#fff9db] border-yellow-300",
  },
  {
    icon: (
      <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Back card */}
        <rect x="30" y="10" width="80" height="56" rx="5" stroke="black" strokeWidth="2" fill="none" />
        {/* Middle card, offset */}
        <rect x="22" y="22" width="80" height="56" rx="5" stroke="black" strokeWidth="2" fill="white" />
        {/* Front card */}
        <rect x="14" y="34" width="80" height="56" rx="5" stroke="black" strokeWidth="2.5" fill="#fff200" />
        {/* Play button on front card */}
        <circle cx="54" cy="62" r="14" stroke="black" strokeWidth="2" fill="none" />
        <polygon points="49,54 49,70 63,62" fill="black" />
        {/* Progress lines on front card */}
        <line x1="22" y1="80" x2="62" y2="80" stroke="black" strokeWidth="1.5" />
        <line x1="22" y1="84" x2="50" y2="84" stroke="black" strokeWidth="1.2" />
        {/* Decorative corner marks */}
        <path d="M100 44 L108 44 L108 52" stroke="black" strokeWidth="1.5" fill="none" />
        <path d="M100 84 L108 84 L108 76" stroke="black" strokeWidth="1.5" fill="none" />
        {/* Video counter dot */}
        <circle cx="108" cy="100" r="3" fill="black" />
        <circle cx="118" cy="100" r="3" stroke="black" strokeWidth="1.5" fill="none" />
        <circle cx="128" cy="100" r="3" stroke="black" strokeWidth="1.5" fill="none" />
        {/* Hand-drawn underline */}
        <path d="M14 120 Q40 116 70 120 Q100 124 130 118" stroke="black" strokeWidth="1.2" fill="none" />
      </svg>
    ),
    title: "Digital Course Access",
    desc: "Unlimited access to our digital companion course, covering the training\u2019s content.",
    bg: "bg-[#fff0e0] border-orange-200",
  },
  {
    icon: (
      <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Central large person (coach) */}
        <circle cx="70" cy="32" r="12" stroke="black" strokeWidth="2.5" fill="none" />
        <path d="M52 68 Q52 48 70 48 Q88 48 88 68" stroke="black" strokeWidth="2.5" fill="none" />
        {/* Connection lines from center to surrounding people */}
        <line x1="58" y1="56" x2="30" y2="72" stroke="black" strokeWidth="1.2" strokeDasharray="4 3" />
        <line x1="82" y1="56" x2="110" y2="72" stroke="black" strokeWidth="1.2" strokeDasharray="4 3" />
        <line x1="64" y1="66" x2="42" y2="100" stroke="black" strokeWidth="1.2" strokeDasharray="4 3" />
        <line x1="76" y1="66" x2="98" y2="100" stroke="black" strokeWidth="1.2" strokeDasharray="4 3" />
        <line x1="70" y1="68" x2="70" y2="102" stroke="black" strokeWidth="1.2" strokeDasharray="4 3" />
        {/* Surrounding smaller people */}
        {[
          { cx: 24, cy: 78 },
          { cx: 116, cy: 78 },
          { cx: 38, cy: 106 },
          { cx: 70, cy: 112 },
          { cx: 102, cy: 106 },
        ].map((p, i) => (
          <g key={i}>
            <circle cx={p.cx} cy={p.cy} r="7" stroke="black" strokeWidth="1.8" fill="none" />
            <path d={`M${p.cx - 6} ${p.cy + 14} Q${p.cx - 6} ${p.cy + 8} ${p.cx} ${p.cy + 8} Q${p.cx + 6} ${p.cy + 8} ${p.cx + 6} ${p.cy + 14}`} stroke="black" strokeWidth="1.5" fill="none" />
          </g>
        ))}
        {/* Signal/broadcast waves from coach */}
        <path d="M50 28 Q46 22 50 16" stroke="black" strokeWidth="1.2" fill="none" />
        <path d="M46 30 Q40 22 46 12" stroke="black" strokeWidth="1" fill="none" />
        <path d="M90 28 Q94 22 90 16" stroke="black" strokeWidth="1.2" fill="none" />
        <path d="M94 30 Q100 22 94 12" stroke="black" strokeWidth="1" fill="none" />
      </svg>
    ),
    title: "Continued Online Coaching",
    desc: "6-month access to high-level group coaching calls with our trainers.",
    bg: "bg-[#e0fff2] border-emerald-200",
  },
  {
    icon: (
      <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Network nodes as people with connections */}
        {/* Center node */}
        <circle cx="70" cy="70" r="10" stroke="black" strokeWidth="2.2" fill="#fff200" />
        <circle cx="70" cy="64" r="4" stroke="black" strokeWidth="1.5" fill="none" />
        <path d="M64 76 Q64 72 70 72 Q76 72 76 76" stroke="black" strokeWidth="1.5" fill="none" />
        {/* Top node */}
        <circle cx="70" cy="22" r="8" stroke="black" strokeWidth="2" fill="none" />
        <circle cx="70" cy="18" r="3" stroke="black" strokeWidth="1.2" fill="none" />
        {/* Bottom node */}
        <circle cx="70" cy="118" r="8" stroke="black" strokeWidth="2" fill="none" />
        <circle cx="70" cy="114" r="3" stroke="black" strokeWidth="1.2" fill="none" />
        {/* Left node */}
        <circle cx="22" cy="70" r="8" stroke="black" strokeWidth="2" fill="none" />
        <circle cx="22" cy="66" r="3" stroke="black" strokeWidth="1.2" fill="none" />
        {/* Right node */}
        <circle cx="118" cy="70" r="8" stroke="black" strokeWidth="2" fill="none" />
        <circle cx="118" cy="66" r="3" stroke="black" strokeWidth="1.2" fill="none" />
        {/* Top-left node */}
        <circle cx="34" cy="34" r="7" stroke="black" strokeWidth="1.8" fill="none" />
        <circle cx="34" cy="31" r="2.5" stroke="black" strokeWidth="1" fill="none" />
        {/* Top-right node */}
        <circle cx="106" cy="34" r="7" stroke="black" strokeWidth="1.8" fill="none" />
        <circle cx="106" cy="31" r="2.5" stroke="black" strokeWidth="1" fill="none" />
        {/* Bottom-left node */}
        <circle cx="34" cy="106" r="7" stroke="black" strokeWidth="1.8" fill="none" />
        <circle cx="34" cy="103" r="2.5" stroke="black" strokeWidth="1" fill="none" />
        {/* Bottom-right node */}
        <circle cx="106" cy="106" r="7" stroke="black" strokeWidth="1.8" fill="none" />
        <circle cx="106" cy="103" r="2.5" stroke="black" strokeWidth="1" fill="none" />
        {/* Connection lines */}
        <line x1="70" y1="30" x2="70" y2="60" stroke="black" strokeWidth="1.5" />
        <line x1="70" y1="80" x2="70" y2="110" stroke="black" strokeWidth="1.5" />
        <line x1="30" y1="70" x2="60" y2="70" stroke="black" strokeWidth="1.5" />
        <line x1="80" y1="70" x2="110" y2="70" stroke="black" strokeWidth="1.5" />
        <line x1="40" y1="38" x2="62" y2="62" stroke="black" strokeWidth="1.3" />
        <line x1="100" y1="38" x2="78" y2="62" stroke="black" strokeWidth="1.3" />
        <line x1="40" y1="102" x2="62" y2="78" stroke="black" strokeWidth="1.3" />
        <line x1="100" y1="102" x2="78" y2="78" stroke="black" strokeWidth="1.3" />
        {/* Small decorative dots at intersections */}
        <circle cx="70" cy="46" r="2" fill="black" />
        <circle cx="70" cy="94" r="2" fill="black" />
        <circle cx="46" cy="70" r="2" fill="black" />
        <circle cx="94" cy="70" r="2" fill="black" />
      </svg>
    ),
    title: "Private Community Access",
    desc: "6-month access to our private community for ambitious facilitators.",
    bg: "bg-[#fff9db] border-yellow-300",
  },
  {
    icon: (
      <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Notepad outer shape */}
        <rect x="28" y="14" width="84" height="112" rx="4" stroke="black" strokeWidth="2.5" fill="#fff200" />
        {/* Spiral binding holes at top */}
        {[42, 56, 70, 84, 98].map((cx) => (
          <g key={cx}>
            <circle cx={cx} cy="14" r="4" stroke="black" strokeWidth="1.5" fill="white" />
            <line x1={cx} y1="6" x2={cx} y2="10" stroke="black" strokeWidth="1.8" />
          </g>
        ))}
        {/* Page fold corner */}
        <path d="M92 126 L112 126 L112 106" stroke="black" strokeWidth="1.5" fill="none" />
        <path d="M92 126 L112 106" stroke="black" strokeWidth="1" fill="none" strokeDasharray="2 2" />
        {/* Text lines */}
        <line x1="40" y1="36" x2="100" y2="36" stroke="black" strokeWidth="2" />
        <line x1="40" y1="46" x2="96" y2="46" stroke="black" strokeWidth="1.5" />
        <line x1="40" y1="56" x2="100" y2="56" stroke="black" strokeWidth="1.5" />
        <line x1="40" y1="66" x2="88" y2="66" stroke="black" strokeWidth="1.5" />
        <line x1="40" y1="76" x2="100" y2="76" stroke="black" strokeWidth="1.5" />
        <line x1="40" y1="86" x2="92" y2="86" stroke="black" strokeWidth="1.5" />
        <line x1="40" y1="96" x2="100" y2="96" stroke="black" strokeWidth="1.5" />
        <line x1="40" y1="106" x2="78" y2="106" stroke="black" strokeWidth="1.5" />
        {/* Checkbox at first line */}
        <rect x="36" y="32" width="8" height="8" rx="1" stroke="black" strokeWidth="1.2" fill="none" />
        <path d="M38 36 L40 38 L43 34" stroke="black" strokeWidth="1.2" />
        {/* Pencil icon bottom right */}
        <line x1="106" y1="130" x2="120" y2="116" stroke="black" strokeWidth="2" />
        <path d="M120 116 L124 112 L128 116 L124 120 Z" stroke="black" strokeWidth="1.5" fill="none" />
        <line x1="106" y1="130" x2="104" y2="132" stroke="black" strokeWidth="2" />
      </svg>
    ),
    title: "Printed Materials",
    desc: "Workbook and printed resources covering everything you learned in the training.",
    bg: "bg-[#f0e8ff] border-purple-200",
  },
  {
    icon: (
      <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Certificate body */}
        <rect x="16" y="16" width="108" height="76" rx="4" stroke="black" strokeWidth="2.5" fill="#fff200" />
        {/* Inner decorative border */}
        <rect x="24" y="24" width="92" height="60" rx="2" stroke="black" strokeWidth="1" strokeDasharray="4 2" fill="none" />
        {/* Star / seal in center-top */}
        <circle cx="70" cy="44" r="10" stroke="black" strokeWidth="1.8" fill="none" />
        <polygon points="70,33 72,40 80,40 74,44 76,52 70,48 64,52 66,44 60,40 68,40" stroke="black" strokeWidth="1.2" fill="black" />
        {/* Certificate text lines */}
        <line x1="44" y1="62" x2="96" y2="62" stroke="black" strokeWidth="1.8" />
        <line x1="52" y1="70" x2="88" y2="70" stroke="black" strokeWidth="1.2" />
        <line x1="56" y1="78" x2="84" y2="78" stroke="black" strokeWidth="1" />
        {/* Ribbon hanging from bottom center */}
        <path d="M60 92 L60 126 L70 118 L80 126 L80 92" stroke="black" strokeWidth="2.2" fill="none" />
        {/* Ribbon V fold */}
        <line x1="60" y1="126" x2="70" y2="118" stroke="black" strokeWidth="2" />
        <line x1="80" y1="126" x2="70" y2="118" stroke="black" strokeWidth="2" />
        {/* Medal circle at ribbon junction */}
        <circle cx="70" cy="98" r="6" stroke="black" strokeWidth="2" fill="none" />
        <circle cx="70" cy="98" r="2.5" fill="black" />
        {/* Decorative corner flourishes */}
        <path d="M20 20 Q28 16 20 24" stroke="black" strokeWidth="1.2" fill="none" />
        <path d="M120 20 Q112 16 120 24" stroke="black" strokeWidth="1.2" fill="none" />
        <path d="M20 88 Q28 92 20 84" stroke="black" strokeWidth="1.2" fill="none" />
        <path d="M120 88 Q112 92 120 84" stroke="black" strokeWidth="1.2" fill="none" />
      </svg>
    ),
    title: "Certification",
    desc: "Our official signed certificate of completion, so you can promote your new skills!",
    bg: "bg-[#fff9db] border-yellow-300",
  },
];

export default function WhatsIncluded() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-black leading-tight">
            What&apos;s included in
            <br />
            Full-Stack Facilitator?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="p-8 text-center flex flex-col items-center gap-4"
            >
              <div className="text-black">{item.icon}</div>
              <h3 className="text-xl font-bold text-black">{item.title}</h3>
              <p className="text-base text-brand-muted leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
