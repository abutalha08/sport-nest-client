import React from "react";
import Image from "next/image";
import { FiEdit2, FiTrash2, FiMapPin, FiMail } from "react-icons/fi";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { Button } from "@heroui/react";
import "animate.css";
import Link from "next/link";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { EditModal } from "@/components/EditModal";
import { Building2 } from "lucide-react";

const ManageMyFacilitiesPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  // ⚠️ safety check
  if (!user?.email) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-500">
        Please login to view your facilities.
      </div>
    );
  }

  const res = await fetch(
    `http://localhost:5000/my-facilities/${user.email}`,
    {
      cache: "no-store",
    }
  );

  const facilities = await res.json();

  return (
    <div className="min-h-screen bg-[#F8FAFC] px-4 py-10 sm:px-6 lg:px-8">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-10 animate__animated animate__fadeInDown">
        <h1 className="text-[#0B2545] text-3xl sm:text-4xl font-black tracking-tight">
          Manage My Facilities
        </h1>

        <p className="text-slate-500 text-sm sm:text-base font-medium mt-2">
          Manage, update and monitor your registered sports facilities.
        </p>
      </div>

      {/* LIST */}
      <div className="max-w-7xl mx-auto flex flex-col gap-7">

        {/* EMPTY STATE */}
        {!facilities?.length ? (
          <div className="flex items-center justify-center py-20">
  <div
    className="
      w-full max-w-md
      rounded-[28px]
      border border-blue-100/60
      bg-white/80
      backdrop-blur-xl
      shadow-[0_10px_40px_rgba(0,75,232,0.08)]
      p-10
      text-center
    "
  >

    {/* ICON */}
    <div
      className="
        w-20 h-20 mx-auto
        rounded-full
        bg-gradient-to-br from-[#EAF2FF] to-[#DCE9FF]
        flex items-center justify-center
        shadow-inner
        mb-6
      "
    >
      <Building2 and  className="w-10 h-10 text-[#004BE8]" />
    </div>

    {/* TITLE */}
    <h2 className="text-2xl font-black text-[#0B2545] tracking-tight">
      No Facilities Yet
    </h2>

    {/* DESCRIPTION */}
    <p className="text-slate-500 mt-3 text-sm sm:text-base leading-relaxed">
      You haven&apos;t added any sports facilities yet.
      Start by creating your first facility listing.
    </p>

    {/* BUTTON */}
    <Link
      href="/add-facility"
      className="
        inline-flex items-center justify-center
        mt-7
        h-[48px]
        px-7
        rounded-xl
        bg-gradient-to-r from-[#003EC4] to-[#004BE8]
        hover:from-[#0033A6] hover:to-[#003EC4]
        text-white
        font-bold
        shadow-lg shadow-blue-600/20
        transition-all duration-300
        hover:scale-[1.02]
        active:scale-95
      "
    >
      Add Facility
    </Link>
  </div>
</div>
        ) : (
          facilities.map((facility, index) => (
            <div
              key={facility._id}
              className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-[28px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.06)] flex flex-col lg:flex-row animate__animated animate__fadeInUp hover:shadow-[0_14px_50px_rgba(0,0,0,0.09)] transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >

              {/* IMAGE */}
              <div className="relative w-full lg:w-[340px] h-[240px] sm:h-[300px] lg:h-auto overflow-hidden">
                <Image
                  src={facility.imageUrl}
                  alt={facility.facilityName}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute top-4 left-4 bg-[#009169]/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-lg">
                  Active
                </div>
              </div>

              {/* CONTENT */}
              <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between">

                <div>
                  <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-5">

                    <div>
                      <h2 className="text-[#0B2545] text-2xl sm:text-3xl font-black tracking-tight">
                        {facility.facilityName}
                      </h2>

                      <div className="mt-4 flex flex-col gap-3">

                        <div className="flex items-center gap-3 text-slate-600">
                          <FiMapPin className="text-[#009169] text-[18px]" />
                          <span className="font-medium text-sm sm:text-base">
                            {facility.location}
                          </span>
                        </div>

                        <div className="flex items-center gap-3 text-slate-600">
                          <FiMail className="text-[#009169] text-[18px]" />
                          <span className="font-medium text-sm sm:text-base break-all">
                            {facility.ownerEmail}
                          </span>
                        </div>

                        {/* ✅ TIME SLOTS SECTION */}
                        {facility.timeSlots?.length > 0 && (
                          <div className="mt-2">
                            <p className="text-sm font-semibold text-slate-700 mb-2">
                              Available Time Slots
                            </p>

                            <div className="flex flex-wrap gap-2">
                              {facility.timeSlots.map((slot, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1 text-xs font-semibold rounded-full bg-[#E6F7F1] text-[#009169] border border-[#C7F3E6]"
                                >
                                  {slot}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                      </div>
                    </div>

                    {/* PRICE */}
                    <div className="bg-[#EEFDF8] border border-[#D1FAE5] rounded-2xl px-5 py-4 w-full sm:w-fit">
                      <p className="text-slate-400 text-xs font-semibold uppercase tracking-wide">
                        Price Per Hour
                      </p>

                      <div className="flex items-center gap-1 mt-1">
                        <HiOutlineCurrencyDollar className="text-[#009169] text-[24px]" />

                        <h3 className="text-[#009169] text-3xl font-black leading-none">
                          {facility.price}
                        </h3>

                        <span className="text-slate-500 text-sm font-semibold mt-2">
                          /hr
                        </span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* ACTIONS */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 mt-8">

                  <EditModal facility={facility} ></EditModal>

                  <Button className="h-[46px] px-6 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 font-bold transition-all duration-300">
                    <FiTrash2 className="text-[16px]" />
                    Delete
                  </Button>

                </div>

              </div>
            </div>
          ))
        )}

      </div>
    </div>
  );
};

export default ManageMyFacilitiesPage;