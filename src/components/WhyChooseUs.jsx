"use client";
import React from "react";
import {
  Star,
  Clock,
  ShieldCheck,
  Award,
} from "lucide-react";

export default function WhyChooseUs() {
  const cards = [
    {
      icon: Star,
      title: "Premium Facilities",
      desc: "Access to top-rated sports venues with professional-grade equipment",
    },
    {
      icon: Clock,
      title: "Easy Booking",
      desc: "Quick and hassle-free booking process with instant confirmation",
    },
    {
      icon: ShieldCheck,
      title: "Secure Payments",
      desc: "Safe and secure payment options for all your bookings",
    },
    {
      icon: Award,
      title: "Best Prices",
      desc: "Competitive pricing with transparent rates and no hidden fees",
    },
  ];

  return (
    <section className="w-full bg-[#F8FAFC] py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">

        
        <h2 className="text-[#0B2545] font-extrabold text-3xl sm:text-4xl tracking-tight">
          Why Choose SportNest?
        </h2>

        <p className="text-[#64748B] text-base sm:text-lg mt-3 mb-12">
          The best platform for booking sports facilities
        </p>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {cards.map((card, idx) => {
            const Icon = card.icon;

            return (
              <div
                key={idx}
                className="
                  bg-white/60
                  backdrop-blur-xl
                  border border-transparent
                  rounded-2xl
                  p-7
                  text-center

                  shadow-[0_8px_30px_rgba(0,0,0,0.04)]

                  transition-all duration-300

                  hover:-translate-y-2
                  hover:border-[#004BE8]/20
                  hover:shadow-[0_18px_45px_rgba(0,75,232,0.12)]

                  group
                "
              >
                {/* ICON */}
                <div
                  className="
                    w-12 h-12 mx-auto mb-6
                    rounded-full
                    bg-[#004BE8]/10
                    flex items-center justify-center
                    group-hover:bg-[#004BE8]/15
                    transition
                  "
                >
                  <Icon className="w-5 h-5 text-[#004BE8]" />
                </div>

                
                <h3 className="text-[#0B2545] font-bold text-xl mb-2">
                  {card.title}
                </h3>

                <p className="text-[#526484] text-[15px] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}