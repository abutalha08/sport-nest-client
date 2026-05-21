"use client";

import FacilityCard from "@/components/FacilityCard";
import React, { useEffect, useState } from "react";
import "animate.css";

const AllFacilitiesPage = () => {
  const [facilities, setFacilities] = useState([]);
  const [search, setSearch] = useState("");
  const [facilityType, setFacilityType] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/facility?search=${search}&facilityType=${facilityType}`
      );
      const data = await res.json();
      setFacilities(data);
    };

    fetchData();
  }, [search, facilityType]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-4 sm:px-6 lg:px-10">

      {/* Header*/}
      <div className="max-w-7xl mx-auto mb-10 animate__animated animate__fadeInDown">

        <h1 className="text-[#0B2545] font-extrabold text-3xl sm:text-4xl tracking-tight text-left">
          Explore All Facilities
        </h1>

        <p className="text-[#64748B] text-sm sm:text-base mt-2 text-left max-w-xl">
          Browse and book from our wide range of premium sports facilities across different locations and categories.
        </p>

        {/* SEARCH + FILTER */}
        <div className="mt-6 flex flex-col md:flex-row gap-4">

          <input
            type="text"
            placeholder="Search facilities..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:flex-1 h-12 px-4 rounded-xl border border-slate-200 bg-white outline-none focus:ring-2 focus:ring-[#003EC4]/20 transition"
          />

          <select
            value={facilityType}
            onChange={(e) => setFacilityType(e.target.value)}
            className="w-full md:w-60 h-12 px-3 rounded-xl border border-slate-200 bg-white outline-none focus:ring-2 focus:ring-[#003EC4]/20 transition"
          >
            <option value="">All Categories</option>
            <option value="Swimming">Swimming</option>
            <option value="Football">Football</option>
            <option value="Tennis">Tennis</option>
            <option value="Basketball">Basketball</option>
            <option value="Cricket">Cricket</option>
            <option value="Badminton">Badminton</option>
          </select>

        </div>

      </div>

      {/* GRID */}
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

export default AllFacilitiesPage;