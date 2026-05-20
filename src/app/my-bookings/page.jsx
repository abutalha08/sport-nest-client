import React from "react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";

import { Button, Card } from "@heroui/react";

import { BiSolidCalendar } from "react-icons/bi";
import { FiDollarSign } from "react-icons/fi";
import { IoLocationOutline, IoTimeOutline } from "react-icons/io5";


import "animate.css";
import { BookingCancelAlert } from "@/components/BookingCancelAlert";

const MyBookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  
  const user = session?.user;

  const {token} = await auth.api.getToken({
      headers: await headers()
    })
    // console.log(token)


  const res = await fetch(`http://localhost:5000/booking/${user?.id}`, {
    headers: {
          authorization: `Bearer ${token}`
        }
  });

  const bookings = await res.json();

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-10 sm:py-12 px-4 sm:px-6 lg:px-8">
      {/* HEADER */}
      <div className="max-w-5xl mx-auto mb-8 sm:mb-10 animate__animated animate__fadeInDown">
        <h1 className="text-[#0B2545] font-black text-2xl sm:text-3xl">
          My Bookings
        </h1>

        <p className="text-slate-500 text-sm mt-2">
          Manage and track your scheduled sports facility sessions.
        </p>
      </div>

      {/* LIST */}
      <div className="flex flex-col gap-6 items-center">
        {bookings && bookings.length > 0 ? (
          bookings.map((booking, index) => {
            const {
              _id,
              imageUrl,
              facilityName,
              bookingDate,
              timeSlots,
              location,
              price,
              hours,
            } = booking;

            return (
              <Card
                key={_id}
                className="w-full max-w-5xl bg-white/80 backdrop-blur-xl border border-white/50 rounded-[24px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.05)] flex flex-col md:flex-row animate__animated animate__fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* IMAGE */}
                <div className="relative w-full md:w-[34%] min-h-[230px] md:min-h-full">
                  <Image
                    src={imageUrl}
                    alt={facilityName}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500 rounded-t-lg sm:rounded-bl-lg"
                  />
                </div>

                {/* CONTENT */}
                <div className="w-full md:w-[66%] p-5 sm:p-7 flex flex-col justify-between gap-6">
                  {/* TOP */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center bg-[#EEF4FF] text-[#003EC4] px-3 py-1 rounded-full text-[11px] font-bold mb-3">
                        Confirmed
                      </div>

                      <h2 className="text-[#0B2545] font-black text-xl sm:text-2xl">
                        {facilityName}
                      </h2>
                    </div>

                    <BookingCancelAlert facilityName={facilityName} bookingId={_id}></BookingCancelAlert>
                  </div>

                  {/* INFO GRID */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex gap-3">
                      <BiSolidCalendar className="text-[#003EC4] text-[18px] mt-1" />
                      <div>
                        <p className="text-slate-400 text-xs">Booking Date</p>
                        <p className="text-[#0B2545] font-bold text-sm">
                          {new Date(bookingDate).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            },
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <IoTimeOutline className="text-[#003EC4] text-[18px] mt-1" />
                      <div>
                        <p className="text-slate-400 text-xs">Time Slot</p>
                        <p className="text-[#0B2545] font-bold text-sm">
                          {timeSlots}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <FiDollarSign className="text-[#003EC4] text-[18px] mt-1" />
                      <div>
                        <p className="text-slate-400 text-xs">Total Price</p>
                        <p className="text-[#0B2545] font-bold text-sm">
                          ${price} ({hours} {hours > 1 ? "hours" : "hour"})
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <IoLocationOutline className="text-[#003EC4] text-[18px] mt-1" />
                      <div>
                        <p className="text-slate-400 text-xs">Location</p>
                        <p className="text-[#0B2545] font-bold text-sm">
                          {location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })
        ) : (
          <div className="w-full max-w-5xl bg-white/80 border border-dashed border-slate-200 rounded-[24px] p-10 text-center animate__animated animate__fadeIn">
            <h3 className="text-[#0B2545] font-black text-xl">
              No Bookings Found
            </h3>

            <p className="text-slate-400 text-sm mt-2">
              You haven’t booked any sports facility yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookingPage;
