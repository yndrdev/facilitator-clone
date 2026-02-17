"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Can I get my company to pay for this?",
    a: "Absolutely! Many of our participants have their training paid for by their employer. We can provide invoices, purchase orders, and any documentation your company needs to approve the investment.",
  },
  {
    q: "How does Facilitation Fundamentals compare to the Design Sprint Masterclass?",
    a: "The Design Sprint Masterclass focuses specifically on running Google Design Sprints. Full-Stack Facilitator is broader \u2013 it teaches you the underlying facilitation skills and frameworks to design and run any type of workshop or collaborative session.",
  },
  {
    q: "How does Facilitation Fundamentals compare to Workshopper Master?",
    a: "Workshopper Master is our online certification course. Full-Stack Facilitator is an in-person bootcamp that provides hands-on practice, live coaching, and direct feedback from our trainers in a collaborative environment.",
  },
  {
    q: "What do I actually get when I buy?",
    a: "You get 5 days of in-person training, unlimited digital course access, 6 months of group coaching calls, private community access, printed workbook and materials, and an official certificate of completion.",
  },
  {
    q: "I want to train my company/employees \u2013 do you offer a bulk discount?",
    a: "Yes! We offer special pricing for teams and corporate groups. Please get in touch with our admissions team to discuss your specific needs and group size.",
  },
  {
    q: "How long does the course take to complete?",
    a: "The in-person training runs over 5 days. Day 1 is an orientation evening (4pm-7pm), and days 2-5 run from 10am to 6pm. You also get 6 months of follow-up coaching.",
  },
  {
    q: "Will I get a certificate?",
    a: "Yes! Upon completing the training, you\u2019ll receive an official signed certificate of completion that you can share with your employer and on professional networks.",
  },
  {
    q: "How does the money back guarentee work?",
    a: "If you\u2019re not satisfied by the end of your training, we\u2019ll give you a full refund \u2013 no questions asked. We\u2019re that confident you\u2019ll love it.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-black text-black text-center mb-12">
          Still have questions?
        </h2>

        <div className="divide-y divide-gray-200 border border-gray-200 rounded-2xl overflow-hidden">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                <span className="text-base font-medium text-black">
                  {faq.q}
                </span>
                <svg
                  className={`w-5 h-5 shrink-0 text-brand-muted transition-transform duration-300 ${
                    openIdx === i ? "rotate-45" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </button>
              <div className={`accordion-content ${openIdx === i ? "open" : ""}`}>
                <div>
                  <div className="px-6 pb-5 text-sm text-brand-muted leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
