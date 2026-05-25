import React from "react";
import Link from "next/link";
import "animate.css";

import { FaCalendarAlt, FaUsers, FaUser, FaShieldAlt } from "react-icons/fa";

export default function Banner() {
  return (
    <section className="relative w-full h-[550px] md:h-[620px] lg:h-[680px] flex items-center overflow-hidden bg-[#070B18]">

      {/* 🌤 BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/sportNest-banner.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-white/5" />
      </div>

      {/* ✨ CONTENT */}
      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 z-10">

        <div className="max-w-xl md:max-w-2xl text-left">

          {/* LABEL */}
          <div className="mb-4 animate__animated animate__fadeInDown">
            <span className="inline-flex items-center px-4 py-1 text-xs font-medium tracking-wide text-blue-200 bg-white/10 border border-white/15 rounded-full backdrop-blur-md">
              Premium Sports Booking Platform
            </span>
          </div>

          {/* HEADING */}
          <h1 className="text-white font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight mb-5 animate__animated animate__fadeInDown">
            Book Your Favorite Sports Facility
          </h1>

          {/* SUBTITLE */}
          <p className="text-gray-200/90 text-base sm:text-lg leading-relaxed max-w-lg mb-8 animate__animated animate__fadeInLeft animate__delay-1s">
            Discover and book premium local sports facilities with ease. From professional
            turfs to high-performance courts, your next session is just a click away at SportNest.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-4 items-center animate__animated animate__fadeInUp animate__delay-1s">

            <Link
              href="/all-facilities"
              className="px-8 py-3 bg-[#004BE8] hover:bg-[#003ec4] text-white font-semibold text-[15px] rounded-xl shadow-lg shadow-blue-900/30 transition-all duration-300 active:scale-95 hover:scale-105"
            >
              Explore Facilities
            </Link>

            <Link
              href="/login"
              className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-[15px] rounded-xl border border-white/20 transition-all duration-300 active:scale-95 hover:scale-105"
            >
              How it Works
            </Link>
          </div>

          {/* 🌟 STATS ROW (NEW) */}
          <div className="mt-10 flex flex-wrap gap-6 items-center animate__animated animate__fadeInUp animate__delay-2s">

            {/* Events */}
            <div className="flex items-center gap-3 text-white/80">
              <FaCalendarAlt className="text-green-400 text-xl" />
              <div>
                <p className="text-white font-semibold leading-tight">100+</p>
                <p className="text-xs text-white/60">Events</p>
              </div>
            </div>

            <div className="w-px h-8 bg-white/10" />

            {/* Teams */}
            <div className="flex items-center gap-3 text-white/80">
              <FaUsers className="text-blue-400 text-xl" />
              <div>
                <p className="text-white font-semibold leading-tight">500+</p>
                <p className="text-xs text-white/60">Teams</p>
              </div>
            </div>

            <div className="w-px h-8 bg-white/10" />

            {/* Players */}
            <div className="flex items-center gap-3 text-white/80">
              <FaUser className="text-cyan-400 text-xl" />
              <div>
                <p className="text-white font-semibold leading-tight">1000+</p>
                <p className="text-xs text-white/60">Players</p>
              </div>
            </div>

            <div className="w-px h-8 bg-white/10" />

            {/* Secure */}
            <div className="flex items-center gap-3 text-white/80">
              <FaShieldAlt className="text-emerald-400 text-xl" />
              <div>
                <p className="text-white font-semibold leading-tight">Secure</p>
                <p className="text-xs text-white/60">& Reliable</p>
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}