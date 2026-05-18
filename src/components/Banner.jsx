"use client";
import React from "react";
import Link from "next/link";
import "animate.css";

export default function Banner() {
  return (
    <section className="relative w-full h-[550px] md:h-[620px] lg:h-[680px] flex items-center overflow-hidden bg-[#070B18]">

      {/* 🌫 BACKGROUND IMAGE + BLUR LAYER */}
      <div
        className="absolute inset-0 scale-110 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1540379708242-14a809bef941')",
        }}
      >
        {/* Soft blur layer */}
        <div className="absolute inset-0 backdrop-blur-[2px]" />

        {/* Dark + gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070B18]/90 via-[#070B18]/60 to-transparent" />
      </div>

      {/* ✨ CONTENT WRAPPER */}
      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 z-10">

        <div className="max-w-xl md:max-w-2xl text-left">

          {/* 🏷 SMALL LABEL (optional premium touch) */}
          <div className="mb-4 animate__animated animate__fadeInDown">
            <span className="inline-flex items-center px-4 py-1 text-xs font-medium tracking-wide text-blue-200 bg-white/10 border border-white/15 rounded-full backdrop-blur-md">
              Premium Sports Booking Platform
            </span>
          </div>

          {/* 🧠 MAIN HEADING */}
          <h1 className="text-white font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight mb-5 animate__animated animate__fadeInDown">
            Book Your Favorite Sports Facility
          </h1>

          {/* 📝 SUBTITLE (improved readability) */}
          <p className="text-gray-200/90 text-base sm:text-lg leading-relaxed max-w-lg mb-8 animate__animated animate__fadeInLeft animate__delay-1s">
            Discover and book premium local sports facilities with ease. From professional
            turfs to high-performance courts, your next session is just a click away at SportNest.
          </p>

          {/* 🎯 CTA BUTTONS */}
          <div className="flex flex-wrap gap-4 items-center animate__animated animate__fadeInUp animate__delay-1s">

            {/* PRIMARY BUTTON */}
            <Link
              href="/all-facilities"
              className="
                px-8 py-3
                bg-[#004BE8] hover:bg-[#003ec4]
                text-white font-semibold text-[15px]
                rounded-xl
                shadow-lg shadow-blue-900/30
                transition-all duration-300
                active:scale-95 hover:scale-105
              "
            >
              Explore Facilities
            </Link>

            {/* SECONDARY GLASS BUTTON */}
            <Link
              href="/#how-it-works"
              className="
                px-8 py-3
                bg-white/10 hover:bg-white/20
                text-white font-semibold text-[15px]
                rounded-xl
                border border-white/20
                backdrop-blur-xl
                transition-all duration-300
                active:scale-95 hover:scale-105
              "
            >
              How it Works
            </Link>

          </div>

        </div>
      </div>

      {/* 🌟 subtle floating glow (premium touch) */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
    </section>
  );
}