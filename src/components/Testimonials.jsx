"use client";

import Marquee from "react-fast-marquee";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Anderson",
    review:
      "Amazing platform! Booking facilities is super easy and fast. UI is very clean.",
    role: "Fitness Coach",
  },
  {
    name: "Emily Carter",
    review:
      "I love how smooth the experience is. Everything is well organized and fast.",
    role: "Yoga Instructor",
  },
  {
    name: "Michael Brown",
    review:
      "Best facility booking system I’ve used so far. Highly recommended for everyone!",
    role: "Sports Trainer",
  },
  {
    name: "Sophia Williams",
    review:
      "Very professional design and easy to navigate. Great user experience overall.",
    role: "Wellness Coach",
  },
  {
    name: "David Miller",
    review:
      "Booking process is super quick. Loved the UI and responsiveness of the platform.",
    role: "Gym Manager",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-24 bg-[#FAFCFF] overflow-hidden">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <h2 className="text-center text-[#0B2545] font-bold text-3xl sm:text-4xl tracking-tight font-[Poppins]">
          What Our Clients Say
        </h2>
        <p className="text-center text-[#64748B] text-base sm:text-lg mt-3 font-[Inter]">
          Real feedback from global users
        </p>
      </div>

      {/* MARQUEE */}
      <Marquee direction="left" speed={50} pauseOnHover gradient={false}>
        <div className="flex gap-8 py-6">
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="w-[480px] mx-3 bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_60px_rgba(0,75,232,0.15)] transition-all duration-300"
            >
              {/* STARS */}
              <div className="flex items-center gap-1 text-[#004BE8] mb-5">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#004BE8] text-[#004BE8]"
                    />
                  ))}
              </div>

              {/* REVIEW */}
              <p className="text-[#475569] text-[16px] leading-[1.8] font-medium tracking-[0.2px] mb-7 font-[Inter]">
                “{item.review}”
              </p>

              {/* USER */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-[#0B2545] text-[18px] tracking-tight font-[Poppins]">
                    {item.name}
                  </h4>
                  <span className="text-[13px] text-[#64748B] font-medium font-[Inter]">
                    {item.role}
                  </span>
                </div>

                <div className="w-3.5 h-3.5 rounded-full bg-[#004BE8] shadow-[0_0_12px_rgba(0,75,232,0.5)]" />
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
}