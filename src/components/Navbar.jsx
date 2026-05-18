"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation Links array for clean code
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "All Facilities", href: "/all-facilities" },
    { name: "My Bookings", href: "/my-bookings" },
    { name: "Add Facility", href: "/add-facility" },
    { name: "Manage My Facilities", href: "/manage-facilities" },
  ];

  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* LOGO AREA */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-md shadow-teal-100">
              <span className="text-white font-extrabold text-xl tracking-tight">SN</span>
            </div>
            <span className="text-[#0D9488] font-bold text-2xl tracking-wide">
              Sport<span className="text-[#06B6D4]">Nest</span>
            </span>
          </div>

          {/* DESKTOP NAVIGATION LINKS */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-[#374151] hover:text-[#0D9488] font-medium text-[16px] transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* AUTH BUTTONS (Login / Sign Up) */}
          <div className="hidden lg:flex items-center gap-4">
            <Link 
              href="/login" 
              className="px-5 py-2.5 text-[#374151] hover:text-[#0D9488] font-medium transition-colors duration-200"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-5 py-2.5 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-medium rounded-xl hover:opacity-9 w-full shadow-sm hover:shadow-md transition-all duration-200"
            >
              Sign Up
            </Link>
          </div>

          {/* MOBILE MENU BUTTON (Hamburger) */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-teal-600 focus:outline-none p-2"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-3 shadow-lg absolute w-full left-0 transition-all duration-200 ease-in-out">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-[#374151] hover:text-[#0D9488] hover:bg-teal-50/50 px-3 py-2 rounded-lg font-medium text-base transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <hr className="border-gray-100 my-2" />
          <div className="flex flex-col gap-2 pt-2">
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-2.5 text-[#374151] hover:text-[#0D9488] font-medium rounded-lg border border-gray-200"
            >
              Login
            </Link>
            <Link
              href="/signup"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-2.5 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-medium rounded-lg shadow-sm"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}