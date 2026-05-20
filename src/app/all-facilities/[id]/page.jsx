import React from "react";
import { MapPin, DollarSign, Users, Clock, ArrowLeft } from "lucide-react";
import Image from "next/image";
import "animate.css";
import BookingCard from "@/components/BookingCard";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const FacilityDetailsPage = async ({ params }) => {
  const { id } = await params;

  const {token} = await auth.api.getToken({
    headers: await headers()
  })
  // console.log(token)

  const res = await fetch(`http://localhost:5000/facility/${id}`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  });

  if (!res.ok) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Failed to load facility
      </div>
    );
  }

  const facility = await res.json();

  //   console.log(facility);

  const {
    timeSlots,
    imageUrl,
    description,
    capacity,
    price,
    location,
    facilityType,
    facilityName,
  } = facility;

  return (
    <div className="bg-[#F8FAFC]">
      <div className="px-4 pt-6 animate__animated animate__fadeInDown animate__faster">
        <Link
          href="/all-facilities"
          className="inline-flex items-center gap-2 text-[#64748B] hover:text-[#004BE8] font-medium transition-all duration-300 group"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          Back to All Facilities
        </Link>
      </div>
      <div className="bg-[#F8FAFC] flex items-center justify-center px-4 py-12">
        {/* MAIN CARD */}
        <div className="w-full max-w-7xl bg-white/60 backdrop-blur-xl border border-white/40 rounded-[24px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.06)] flex flex-col md:flex-row">
          {/* IMAGE - LEFT SLIDE IN */}
          <div className="relative w-full md:w-1/2 min-h-[300px] md:min-h-[450px] animate__animated animate__fadeInLeft">
            <Image
              src={imageUrl}
              alt={facilityName || "Facility"}
              fill
              className="object-cover"
            />
          </div>

          {/* CONTENT - RIGHT SLIDE IN */}
          <div className="w-full md:w-1/2 p-6 sm:p-10 animate__animated animate__fadeInRight">
            <span className="inline-block bg-[#EEF4FF]/80 backdrop-blur-md border border-[#DBEAFE] text-[#004BE8] px-4 py-1.5 rounded-full text-[13px] font-semibold mb-4 shadow-sm">
              {facilityType}
            </span>

            <h1 className="text-[#0B2545] font-extrabold text-2xl sm:text-3xl mb-6">
              {facilityName}
            </h1>

            {/* INFO */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-[#526484]">
                <MapPin className="w-5 h-5 text-[#004BE8]" />
                {location}
              </div>

              <div className="flex items-center gap-3 text-[#526484]">
                <DollarSign className="w-5 h-5 text-[#004BE8]" />

                <span className="font-extrabold text-[#0B2545] text-lg">
                  ${price}
                </span>

                <span className="text-sm text-[#64748B] font-medium">
                  / hour
                </span>
              </div>

              <div className="flex items-center gap-3 text-[#526484]">
                <Users className="w-5 h-5 text-[#004BE8]" />
                Maximum Capacity: {capacity}
              </div>

              <div className="flex items-center gap-3 text-[#526484]">
                <Clock className="w-5 h-5 text-[#004BE8]" />
                {Array.isArray(timeSlots)
                  ? `${timeSlots.length} time slots available`
                  : timeSlots}
              </div>
            </div>

            <hr className="border-white/40 my-6" />

            <div className="bg-white/30 backdrop-blur-md border border-white/20 rounded-xl p-4">
              <h3 className="font-bold text-[#0B2545] mb-2">Description</h3>
              <p className="text-[#526484] text-sm leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <BookingCard facility={facility}></BookingCard>
    </div>
  );
};

export default FacilityDetailsPage;
