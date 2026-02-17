export default function ECSSection() {
  /* ── SVG geometry constants ──────────────────────────── */
  const C  = 250;   // center x & y
  const oR = 215;   // outer radius of wedges
  const iR = 68;    // inner radius (around center grid)
  const lR = 155;   // label radius

  /** Convert (degrees clockwise from 12-o'clock, radius) → [x, y] */
  const xy = (deg: number, r: number): [number, number] => {
    const rad = ((deg - 90) * Math.PI) / 180;
    return [C + r * Math.cos(rad), C + r * Math.sin(rad)];
  };

  /** SVG path for an annular wedge sweeping clockwise from a1° to a2° */
  const wedge = (a1: number, a2: number) => {
    const [x1, y1] = xy(a1, oR);
    const [x2, y2] = xy(a2, oR);
    const [x3, y3] = xy(a2, iR);
    const [x4, y4] = xy(a1, iR);
    return [
      `M${x1.toFixed(1)},${y1.toFixed(1)}`,
      `A${oR},${oR} 0 0,1 ${x2.toFixed(1)},${y2.toFixed(1)}`,
      `L${x3.toFixed(1)},${y3.toFixed(1)}`,
      `A${iR},${iR} 0 0,0 ${x4.toFixed(1)},${y4.toFixed(1)}`,
      'Z',
    ].join(' ');
  };

  /** Keep labels right-side-up: flip when in the bottom half */
  const labelRot = (deg: number) => {
    const n = ((deg % 360) + 360) % 360;
    return n > 90 && n < 270 ? deg + 180 : deg;
  };

  /* Segment definitions: start/end angles + label midpoint */
  const segs = [
    { label: 'Activities',  a1: 324, a2:  36, mid:   0 },
    { label: 'Insights',    a1:  36, a2: 108, mid:  72 },
    { label: 'Principles',  a1: 108, a2: 180, mid: 144 },
    { label: 'Structures',  a1: 180, a2: 252, mid: 216 },
    { label: 'Skills',      a1: 252, a2: 324, mid: 288 },
  ];

  const fills  = ['#19191f', '#1d1d24', '#19191f', '#1d1d24', '#19191f'];
  const spokes = [36, 108, 180, 252, 324]; // boundary angles between segments

  return (
    <section className="bg-[#0f0f10] py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: ECS Wheel ─────────────────────────── */}
          <div className="flex items-center justify-center">
            <svg
              viewBox="0 0 500 500"
              className="w-full max-w-[480px]"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Subtle outer glow */}
              <circle
                cx={C} cy={C} r={oR + 10}
                fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="8"
              />

              {/* 5 filled wedge segments */}
              {segs.map((s, i) => (
                <path key={s.label} d={wedge(s.a1, s.a2)} fill={fills[i]} />
              ))}

              {/* Spoke dividers between segments */}
              {spokes.map((a) => {
                const [x1, y1] = xy(a, iR);
                const [x2, y2] = xy(a, oR);
                return (
                  <line
                    key={a}
                    x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1"
                  />
                );
              })}

              {/* Outer ring */}
              <circle
                cx={C} cy={C} r={oR}
                fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"
              />

              {/* Decorative concentric circles */}
              <circle cx={C} cy={C} r={185} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
              <circle cx={C} cy={C} r={140} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />

              {/* Faint pentagon connecting label midpoints */}
              <polygon
                points={segs.map((s) => xy(s.mid, lR).join(',')).join(' ')}
                fill="none"
                stroke="rgba(255,255,255,0.04)"
                strokeWidth="0.5"
              />

              {/* Inner circle around center grid */}
              <circle
                cx={C} cy={C} r={iR}
                fill="#0f0f10" stroke="rgba(255,255,255,0.15)" strokeWidth="1"
              />

              {/* Rotated perimeter labels */}
              {segs.map((s) => {
                const [lx, ly] = xy(s.mid, lR);
                const r = labelRot(s.mid);
                return (
                  <text
                    key={`lbl-${s.label}`}
                    x={lx}
                    y={ly}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill="white"
                    fontSize="14"
                    fontWeight="600"
                    fontFamily="system-ui, -apple-system, sans-serif"
                    letterSpacing="0.06em"
                    transform={`rotate(${r},${lx.toFixed(1)},${ly.toFixed(1)})`}
                  >
                    {s.label}
                  </text>
                );
              })}

              {/* Small marker dots at outer edge of each segment */}
              {segs.map((s) => {
                const [dx, dy] = xy(s.mid, oR + 4);
                return (
                  <circle
                    key={`dot-${s.label}`}
                    cx={dx} cy={dy} r="2"
                    fill="rgba(255,255,255,0.25)"
                  />
                );
              })}

              {/* ── Center 3x3 Grid ────────────────────── */}
              <rect x="215" y="215" width="70" height="70" fill="#0f0f10" rx="3" />

              {/* Vertical grid lines */}
              <line x1="238.3" y1="215" x2="238.3" y2="285" stroke="rgba(255,255,255,0.35)" strokeWidth="0.75" />
              <line x1="261.7" y1="215" x2="261.7" y2="285" stroke="rgba(255,255,255,0.35)" strokeWidth="0.75" />

              {/* Horizontal grid lines */}
              <line x1="215" y1="238.3" x2="285" y2="238.3" stroke="rgba(255,255,255,0.35)" strokeWidth="0.75" />
              <line x1="215" y1="261.7" x2="285" y2="261.7" stroke="rgba(255,255,255,0.35)" strokeWidth="0.75" />

              {/* Grid border */}
              <rect x="215" y="215" width="70" height="70" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="0.75" rx="3" />

              {/* E (top-left cell) */}
              <text
                x="226.5" y="226.5"
                textAnchor="middle" dominantBaseline="central"
                fill="white" fontSize="15" fontWeight="700"
                fontFamily="system-ui, sans-serif"
              >
                E
              </text>

              {/* C (center cell) */}
              <text
                x="250" y="250"
                textAnchor="middle" dominantBaseline="central"
                fill="white" fontSize="15" fontWeight="700"
                fontFamily="system-ui, sans-serif"
              >
                C
              </text>

              {/* S (bottom-right cell) */}
              <text
                x="273.5" y="273.5"
                textAnchor="middle" dominantBaseline="central"
                fill="white" fontSize="15" fontWeight="700"
                fontFamily="system-ui, sans-serif"
              >
                S
              </text>

              {/* Registered trademark outside wheel, bottom-left */}
              <text
                x="130" y="428"
                fill="rgba(255,255,255,0.35)" fontSize="11"
                fontFamily="system-ui, sans-serif"
              >
                &reg;
              </text>
            </svg>
          </div>

          {/* ── Right: Content ─────────────────────────── */}
          <div className="lg:pl-8">
            <div className="mb-8">
              <p className="text-base text-white/60 font-normal mb-1">
                Powered by
              </p>
              <p className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight">
                ECS<sup className="text-xl md:text-2xl align-super">&reg;</sup>
              </p>
            </div>

            <p className="text-base md:text-lg text-white/70 leading-relaxed mb-10 max-w-[520px]">
              This training program is based on ECS&reg; &ndash; our Emergent
              Collaboration System&reg;. It enables you to fluidly and
              confidently facilitate any process, for any group, at any company,
              for any challenge &ndash; in any situation.
            </p>

            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-white/90 transition-colors"
            >
              Learn more about ECS&reg;
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
