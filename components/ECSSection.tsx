export default function ECSSection() {
  return (
    <section className="bg-black py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* ECS Wheel - left side */}
          <div className="w-full max-w-[480px] md:w-1/2 shrink-0">
            <div className="relative aspect-square">
              {/* Outer wheel - rotates */}
              <div className="absolute inset-0 animate-spin-slow">
                <svg viewBox="0 0 630 630" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  {/* Outer ring background */}
                  <circle cx="315" cy="315" r="295" stroke="#444" strokeWidth="1.5" fill="none" />
                  <circle cx="315" cy="315" r="185" stroke="#444" strokeWidth="1.5" fill="none" />

                  {/* Segment divider lines (5 segments at 72° each) */}
                  {/* Line 1: 0° (top-right) */}
                  <line x1="315" y1="315" x2={315 + 295 * Math.sin(0)} y2={315 - 295 * Math.cos(0)} stroke="#444" strokeWidth="1.5" />
                  {/* Line 2: 72° */}
                  <line x1="315" y1="315" x2={315 + 295 * Math.sin((72 * Math.PI) / 180)} y2={315 - 295 * Math.cos((72 * Math.PI) / 180)} stroke="#444" strokeWidth="1.5" />
                  {/* Line 3: 144° */}
                  <line x1="315" y1="315" x2={315 + 295 * Math.sin((144 * Math.PI) / 180)} y2={315 - 295 * Math.cos((144 * Math.PI) / 180)} stroke="#444" strokeWidth="1.5" />
                  {/* Line 4: 216° */}
                  <line x1="315" y1="315" x2={315 + 295 * Math.sin((216 * Math.PI) / 180)} y2={315 - 295 * Math.cos((216 * Math.PI) / 180)} stroke="#444" strokeWidth="1.5" />
                  {/* Line 5: 288° */}
                  <line x1="315" y1="315" x2={315 + 295 * Math.sin((288 * Math.PI) / 180)} y2={315 - 295 * Math.cos((288 * Math.PI) / 180)} stroke="#444" strokeWidth="1.5" />

                  {/* Segment labels along curved path */}
                  {/* Activities - centered at 36° */}
                  <text
                    x="315"
                    y="315"
                    fill="white"
                    fontSize="28"
                    fontWeight="700"
                    fontFamily="sans-serif"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    transform={`rotate(36 315 315) translate(0 -240)`}
                  >
                    Activities
                  </text>

                  {/* Insights - centered at 108° */}
                  <text
                    x="315"
                    y="315"
                    fill="white"
                    fontSize="28"
                    fontWeight="700"
                    fontFamily="sans-serif"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    transform={`rotate(108 315 315) translate(0 -240)`}
                  >
                    Insights
                  </text>

                  {/* Principles - centered at 180° */}
                  <text
                    x="315"
                    y="315"
                    fill="white"
                    fontSize="28"
                    fontWeight="700"
                    fontFamily="sans-serif"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    transform={`rotate(180 315 315) translate(0 -240)`}
                  >
                    Principles
                  </text>

                  {/* Structures - centered at 252° */}
                  <text
                    x="315"
                    y="315"
                    fill="white"
                    fontSize="28"
                    fontWeight="700"
                    fontFamily="sans-serif"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    transform={`rotate(252 315 315) translate(0 -240)`}
                  >
                    Structures
                  </text>

                  {/* Skills - centered at 324° */}
                  <text
                    x="315"
                    y="315"
                    fill="white"
                    fontSize="28"
                    fontWeight="700"
                    fontFamily="sans-serif"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    transform={`rotate(324 315 315) translate(0 -240)`}
                  >
                    Skills
                  </text>
                </svg>
              </div>

              {/* Center pin - stays static */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[38%] h-[38%]">
                  {/* Outer circle */}
                  <circle cx="100" cy="100" r="95" stroke="white" strokeWidth="2.5" fill="black" />
                  {/* Inner circle */}
                  <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="2" fill="black" />

                  {/* E card */}
                  <g transform="translate(62, 58) rotate(-15 20 25)">
                    <rect width="36" height="42" rx="4" fill="white" />
                    <text x="18" y="30" textAnchor="middle" fontSize="24" fontWeight="800" fontFamily="sans-serif" fill="black">E</text>
                  </g>

                  {/* C card */}
                  <g transform="translate(82, 52) rotate(5 20 25)">
                    <rect width="36" height="42" rx="4" fill="white" />
                    <text x="18" y="30" textAnchor="middle" fontSize="24" fontWeight="800" fontFamily="sans-serif" fill="black">C</text>
                  </g>

                  {/* S card */}
                  <g transform="translate(98, 68) rotate(20 20 25)">
                    <rect width="36" height="42" rx="4" fill="white" />
                    <text x="18" y="30" textAnchor="middle" fontSize="24" fontWeight="800" fontFamily="sans-serif" fill="black">S</text>
                  </g>

                  {/* ® symbol */}
                  <text x="145" y="108" fill="white" fontSize="16" fontWeight="400" fontFamily="sans-serif">®</text>
                </svg>
              </div>
            </div>
          </div>

          {/* Text content - right side */}
          <div className="text-center md:text-center max-w-[640px] md:w-1/2">
            <p className="text-[48px] font-bold text-white leading-[100%] mb-6">
              Powered by ECS&reg;
            </p>

            <p className="text-[18px] font-medium text-white leading-[130%] mb-10">
              This training program is based on ECS&reg; &ndash; our Emergent
              Collaboration System&reg;. It enables you to fluidly and
              confidently facilitate any process, for any group, at any company,
              for any challenge &ndash; in any situation.
            </p>

            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black text-[22px] font-bold rounded-full hover:bg-white/90 transition-colors shadow-[0_6px_5px_rgba(0,0,0,0.08)] tracking-[-0.02em] leading-[110%]"
            >
              Learn more about ECS&reg;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
