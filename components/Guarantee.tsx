export default function Guarantee() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Satisfaction Guaranteed - full width centered */}
        <div className="text-center mb-16">
          {/* Satisfaction seal badge matching live site */}
          <div className="flex justify-center mb-8">
            <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Shadow/glow */}
              <circle cx="80" cy="82" r="62" fill="#c8c8c8" opacity="0.4" />
              {/* Outer starburst points */}
              {Array.from({ length: 24 }).map((_, i) => {
                const angle = (i * 360) / 24 - 90;
                const rad = (angle * Math.PI) / 180;
                const r1 = 55;
                const r2 = 68;
                const midAngle = ((i + 0.5) * 360) / 24 - 90;
                const midRad = (midAngle * Math.PI) / 180;
                const x1 = 80 + r1 * Math.cos(rad);
                const y1 = 80 + r1 * Math.sin(rad);
                const x2 = 80 + r2 * Math.cos(midRad);
                const y2 = 80 + r2 * Math.sin(midRad);
                const nextAngle = ((i + 1) * 360) / 24 - 90;
                const nextRad = (nextAngle * Math.PI) / 180;
                const x3 = 80 + r1 * Math.cos(nextRad);
                const y3 = 80 + r1 * Math.sin(nextRad);
                return <polygon key={i} points={`${x1},${y1} ${x2},${y2} ${x3},${y3}`} fill="#1a1a1a" />;
              })}
              {/* Yellow circle */}
              <circle cx="80" cy="80" r="55" fill="#fff200" stroke="#1a1a1a" strokeWidth="3" />
              {/* Dark inner band */}
              <circle cx="80" cy="80" r="44" fill="#1a1a1a" />
              {/* Yellow center */}
              <circle cx="80" cy="80" r="34" fill="#fff200" stroke="#1a1a1a" strokeWidth="1.5" />
              {/* SATISFACTION arcing text */}
              <defs>
                <path id="topArc" d="M 35,80 a 45,45 0 0,1 90,0" />
                <path id="bottomArc" d="M 125,80 a 45,45 0 0,1 -90,0" />
              </defs>
              <text fontSize="9" fontWeight="900" fill="white" letterSpacing="3" fontFamily="system-ui, sans-serif">
                <textPath href="#topArc" startOffset="50%" textAnchor="middle">SATISFACTION</textPath>
              </text>
              <text fontSize="9" fontWeight="900" fill="white" letterSpacing="3" fontFamily="system-ui, sans-serif">
                <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">GUARANTEED</textPath>
              </text>
              {/* 5 stars */}
              {[-16, -8, 0, 8, 16].map((offset, i) => (
                <text key={i} x={80 + offset} y="70" textAnchor="middle" fontSize="8" fill="#1a1a1a" fontFamily="system-ui">&#9733;</text>
              ))}
              {/* Center text */}
              <text x="80" y="84" textAnchor="middle" fontSize="11" fontWeight="900" fill="#1a1a1a" fontFamily="system-ui, sans-serif">facilitator.com</text>
              <text x="80" y="94" textAnchor="middle" fontSize="7" fill="#1a1a1a" fontFamily="system-ui, sans-serif">&copy;</text>
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
            Satisfaction guaranteed!
          </h2>
          <p className="text-lg text-brand-gray leading-relaxed max-w-2xl mx-auto">
            We&apos;re so confident you&apos;ll love Full-Stack Facilitator
            that we offer a full refund if you aren&apos;t satisfied by the
            end of your training. No questions asked!
          </p>
        </div>

        {/* Cancellation & Refund Policy - bordered card */}
        <div className="max-w-3xl mx-auto bg-gray-50 border border-gray-200 rounded-2xl p-10 text-center">
          <h3 className="text-lg font-bold text-black mb-4">
            Cancellation &amp; Refund Policy
          </h3>
          <div className="text-sm text-brand-gray leading-relaxed space-y-4">
            <p>
              If you buy a ticket and realize you can&apos;t attend the
              training, You can get a full refund if you let us know at least
              30 days before the training begins, and a 50% refund if you let
              us know at least 14 days before the training begins.
            </p>
            <p>
              Cancellation requests that happen less than 14-days before the
              training do not qualify for a refund. If the event needs to be
              cancelled by us because of unforeseen circumstances, we&apos;ll
              issue you a full refund.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
