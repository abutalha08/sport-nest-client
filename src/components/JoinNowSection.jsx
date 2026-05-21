import React from "react";
import { Button } from "@heroui/react";
import { ArrowRight } from "lucide-react";
import "animate.css";
import Link from "next/link";

export default function JoinNowSection() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      {/* CARD */}
      <div
        className="
        w-full max-w-7xl
        bg-[#004BE8]
        rounded-[28px]
        p-10 sm:p-16 lg:p-20
        text-center
        relative overflow-hidden
        shadow-[0_20px_50px_rgba(0,75,232,0.15)]

        animate__animated animate__fadeInUp
      "
      >
        {/* GLOW EFFECTS */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-white/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <h2
            className="
            text-white font-black
            text-3xl sm:text-4xl lg:text-5xl
            leading-tight tracking-tight

            animate__animated animate__fadeInLeft
            animate__delay-1s
          "
          >
            Ready to hit the field?
          </h2>

          <p
            className="
            text-white/90
            text-sm sm:text-base
            font-medium leading-relaxed
            max-w-lg mx-auto

            animate__animated animate__fadeInLeft
            animate__delay-1s
          "
          >
            Create an account today and get exclusive access to member-only
            discounts and priority bookings.
          </p>

          {/* BUTTON */}
          <div
            className="
            pt-4

            animate__animated animate__fadeInUp
            animate__delay-2s
          "
          >
            <Link href="/register">
              <Button
                className="
      bg-white hover:bg-slate-50
      text-[#004BE8]
      font-bold text-[15px]
      h-[52px] px-8
      rounded-xl
      inline-flex items-center gap-2
      transition-all duration-200
      active:scale-95
      shadow-lg shadow-black/5
      hover:scale-[1.03]
    "
              >
                Get Started Free
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
