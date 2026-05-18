import React from 'react';
import { Search, Calendar, Trophy } from 'lucide-react';

export default function BookingJourney() {
  const steps = [
    {
      icon: <Search className="w-6 h-6 text-white" />,
      title: "Find",
      description:
        "Search through 500+ verified premium facilities based on location, sport, and availability.",
    },
    {
      icon: <Calendar className="w-6 h-6 text-white" />,
      title: "Book",
      description:
        "Secure your slot instantly with our high-contrast, professional booking engine and secure payments.",
    },
    {
      icon: <Trophy className="w-6 h-6 text-white" />,
      title: "Play",
      description:
        "Show up, scan your digital pass, and focus on your performance. We handle all the logistics.",
    },
  ];

  return (
    <section className="w-full bg-[#FAFCFF] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-[#0B2545] font-bold text-3xl sm:text-4xl tracking-tight mb-3">
            Seamless Booking Journey
          </h2>

          <p className="text-[#64748B] text-base sm:text-lg">
            Three simple steps to hit the field.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {steps.map((step, index) => (
            <div
              key={index}
              className="
                relative group

                bg-white/25 backdrop-blur-xl
                border border-[#DBEAFE]/70

                rounded-2xl p-8

                flex flex-col items-start

                transition-all duration-500
                hover:-translate-y-2 hover:shadow-xl

                shadow-sm

                hover:border-[#004BE8]/30
                hover:shadow-[0_15px_35px_rgba(0,75,232,0.12)]

                animate-fade-in-up
              "
              style={{
                animationDelay: `${index * 120}ms`,
              }}
            >

              {/* Glow background on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#004BE8]/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* ICON */}
              <div className="
                relative w-12 h-12
                bg-[#004BE8]
                rounded-xl
                flex items-center justify-center
                mb-6
                shadow-md shadow-[#004BE8]/25
                transition-transform duration-300
                group-hover:scale-110
              ">
                {step.icon}
              </div>

              {/* TITLE */}
              <h3 className="relative text-[#0B2545] font-bold text-xl mb-3">
                {step.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="relative text-[#526484] text-[15px] leading-relaxed">
                {step.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}