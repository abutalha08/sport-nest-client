import { Button } from "@heroui/react";
import { Clock, MapPin, Users, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "animate.css";

const FeaturedFacilities = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`, {
    cache: "no-store",
  });
  const facilities = await res.json();

  return (
    <section className="w-full bg-[#FAFCFF] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
    <h2 className="text-[#0B2545] text-3xl sm:text-4xl font-extrabold tracking-tight">
      Featured Facilities
    </h2>

    <p className="text-[#64748B] text-base sm:text-lg mt-2">
  Browse our most popular sports venues and book your slot today
</p>
  </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {facilities?.map((facility, index) => (
            <div
              key={facility._id}
              className="w-full bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)] transition-all duration-300 group animate__animated animate__fadeInUp hover:-translate-y-2 active:scale-[0.99]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-[220px] overflow-hidden">
                <Image
                  src={facility.imageUrl}
                  alt={facility.facilityName}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  <span className="text-white text-[12px] font-medium tracking-wide">
                    {facility.facilityType}
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-4">
                <h3 className="text-[#0B2545] font-bold text-[20px] leading-tight">
                  {facility.facilityName}
                </h3>

                <div className="flex items-center gap-2 text-[#64748B]">
                  <MapPin className="w-4 h-4 text-[#004BE8]" />
                  <span className="text-sm truncate">{facility.location}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-end gap-1">
                    <span className="text-[#004BE8] font-bold text-xl">
                      ${facility.price}
                    </span>
                    <span className="text-[#64748B] text-sm mb-0.5">/hr</span>
                  </div>

                  <div className="flex items-center gap-2 text-[#64748B]">
                    <Users className="w-4 h-4 text-[#004BE8]" />
                    <span className="text-sm font-medium">
                      {facility.capacity}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[#64748B]">
                  <Clock className="w-4 h-4 text-[#004BE8]" />
                  <span className="text-sm">
                    {Array.isArray(facility.timeSlots)
                      ? `${facility.timeSlots.length} slots available`
                      : facility.timeSlots}
                  </span>
                </div>

                <Link href={`/all-facilities/${facility._id}`}>
                  <Button className="w-full h-[46px] bg-[#004BE8] hover:bg-[#003ec4] text-white font-semibold rounded-xl shadow-md shadow-blue-600/10 transition-all duration-200 active:scale-95 hover:scale-[1.02]">
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

       <div className="flex justify-center mt-14">
  <Link
    href="/all-facilities"
    className="group inline-flex items-center gap-2 text-[#004BE8] font-semibold text-sm sm:text-base transition-all duration-300"
  >
    <span className="relative">
      View All Facilities
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#004BE8] transition-all duration-300 group-hover:w-full" />
    </span>

    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
  </Link>
</div>
      </div>
    </section>
  );
};

export default FeaturedFacilities;
