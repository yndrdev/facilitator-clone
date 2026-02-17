"use client";

import { useState } from "react";

export default function ContactAndWaitlist() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
  });

  return (
    <section className="py-20 bg-black">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden">
          {/* Left: Schedule a call */}
          <div className="bg-brand-yellow p-10 md:p-16 flex flex-col justify-center text-center">
            <h2 className="text-4xl md:text-5xl font-black text-black leading-tight mb-6">
              Have questions?
              <br />
              Speak with our Admissions Team!
            </h2>
            <p className="text-base text-black/70 leading-relaxed mb-8">
              Our Admissions Team is happy to help you with any questions
              relating to our Full Stack Facilitator training, just schedule a
              call and let&apos;s chat!
            </p>
            <div className="flex justify-center">
              <a
                href="#"
                className="inline-flex items-center gap-3 bg-black text-white font-bold px-8 py-4 rounded-full hover:bg-gray-800 transition"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule a Call
              </a>
            </div>
          </div>

          {/* Right: Waitlist form */}
          <div className="bg-[#f5f5f5] p-10 md:p-16">
            <h2 className="text-2xl md:text-3xl font-black text-black text-center mb-2">
              Join our Training Waitlist
            </h2>
            <p className="text-base text-brand-muted text-center mb-8">
              Be the first to know when new trainings become available!
            </p>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-black mb-2">
                  Your Full Name*
                </label>
                <input
                  type="text"
                  placeholder="Your Full Name Here…"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-black mb-2">
                  Your Email Address*
                </label>
                <input
                  type="email"
                  placeholder="Your Email Address Here…"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-black mb-2">
                  Which training location do you prefer?*
                </label>
                <select
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                >
                  <option value="" disabled>
                    Select…
                  </option>
                  <option value="berlin">Berlin</option>
                  <option value="palo-alto">Palo Alto, California</option>
                  <option value="both">Both / no preference</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-brand-yellow text-black font-bold py-4 rounded-full hover:brightness-95 transition shadow-md text-base"
              >
                Submit
              </button>
              <p className="text-xs text-brand-muted text-center leading-relaxed">
                By submitting your info, you agree to receive communications
                from us. You can opt out any time with a click. You also agree
                to our Privacy Policy and our Terms of Service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
