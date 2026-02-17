export default function TestimonialVideo() {
  return (
    <section className="py-20 bg-white" id="below-stage-2">
      <div className="max-w-[1280px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-black text-black text-center mb-12">
          What people say about Full-Stack Facilitator:
        </h2>
        {/* Full-width Wistia video embed */}
        <div className="w-full aspect-video rounded-2xl overflow-hidden">
          <iframe
            src="https://fast.wistia.net/embed/iframe/yu09uuv7f7?seo=false"
            title="Full-Stack Facilitator testimonial"
            allow="autoplay; fullscreen"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </section>
  );
}
