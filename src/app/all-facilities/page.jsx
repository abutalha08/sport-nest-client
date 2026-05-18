import FacilityCard from "@/components/FacilityCard";
import React from "react";
import "animate.css";

const allFacilitiesPage = async () => {
  const res = await fetch("http://localhost:5000/facility");

  const facilities = await res.json();

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-4 sm:px-6 lg:px-10">
      {/* Header*/}
      <div className="max-w-7xl mx-auto mb-10 animate__animated animate__fadeInDown">
        <h1 className="text-[#0B2545] font-extrabold text-3xl sm:text-4xl tracking-tight text-left">
          Explore All Facilities
        </h1>

        <p className="text-[#64748B] text-sm sm:text-base mt-2 text-left max-w-xl">
          Browse and book from our wide range of premium sports facilities
          across different locations and categories.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {facilities?.map((facility, index) => (
          <div
            key={facility._id}
            className="animate__animated animate__fadeInUp"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <FacilityCard facility={facility} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default allFacilitiesPage;
