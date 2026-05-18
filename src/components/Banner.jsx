"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#009169] via-[#00a884] to-[#00bcd4] text-white py-20 px-4">
      
      {/* Background Blur */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Book Your Favorite Sports Facility
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Discover and reserve premium sports venues for football,
              badminton, tennis, swimming, and more. Play your game at the
              best facilities in town.
            </p>

            <Link
              href="/facilities"
              className="inline-flex items-center gap-2 bg-white text-[#009169] px-8 py-4 rounded-xl font-semibold shadow-xl hover:scale-105 transition-all duration-300"
            >
              Explore Facilities
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Right Image */}
          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-lg p-3 rounded-3xl border border-white/20 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop"
                alt="Sports Facility"
                width={600}
                height={400}
                className="rounded-2xl object-cover w-full h-[400px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;