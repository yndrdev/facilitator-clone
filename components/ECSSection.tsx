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
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/photos/ecs-wheel.svg"
                  alt=""
                  className="w-full h-full"
                  aria-hidden="true"
                />
              </div>

              {/* Center pin - stays static */}
              <div className="absolute inset-0 pointer-events-none">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/photos/ecs-pin.svg"
                  alt="ECS - Emergent Collaboration System"
                  className="w-full h-full"
                />
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
