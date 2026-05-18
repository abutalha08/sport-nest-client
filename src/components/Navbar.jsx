"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "All Facilities", href: "/all-facilities" },
    { name: "My Bookings", href: "/my-bookings" },
    { name: "Add Facility", href: "/add-facility" },
    { name: "Manage My Facilities", href: "/manage-facilities" },
  ];

  return (
    <nav className="w-full sticky top-0  z-50">

      {/* 🌫 GLASS BACKGROUND */}
      <div className="
        backdrop-blur-xl
        bg-[#070B18]/70
        border-b border-white/10
        shadow-lg
      ">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">

            {/* 🏷 LOGO */}
            <div className="flex items-center gap-3 cursor-pointer">

              <div className="
                w-11 h-11
                bg-gradient-to-br from-[#004BE8] to-[#1D4ED8]
                rounded-xl
                flex items-center justify-center
                shadow-lg shadow-blue-900/30
              ">
                <span className="text-white font-bold text-lg">SN</span>
              </div>

              <span className="text-white font-bold text-2xl tracking-wide">
                Sport<span className="text-[#60A5FA]">Nest</span>
              </span>
            </div>

            {/* 🧭 DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="
                    text-gray-300
                    hover:text-white
                    transition-colors duration-200
                    font-medium
                    relative
                    after:content-['']
                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-[2px]
                    after:w-0
                    after:bg-[#004BE8]
                    after:transition-all
                    hover:after:w-full
                  "
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* 🔐 AUTH BUTTONS */}
            <div className="hidden lg:flex items-center gap-3">

              <Link
                href="/login"
                className="
                  px-5 py-2.5
                  text-gray-300
                  hover:text-white
                  font-medium
                  transition
                "
              >
                Login
              </Link>

              <Link
                href="/signup"
                className="
                  px-5 py-2.5
                  bg-[#004BE8]
                  hover:bg-[#003ec4]
                  text-white
                  font-medium
                  rounded-xl
                  shadow-lg shadow-blue-900/30
                  transition-all duration-300
                  active:scale-95
                "
              >
                Sign Up
              </Link>

            </div>

            {/* 📱 MOBILE BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white p-2"
            >
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
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

      {/* 📱 MOBILE MENU */}
      {isOpen && (
        <div className="
          lg:hidden
          bg-[#070B18]/95
          backdrop-blur-xl
          border-b border-white/10
          px-4 pt-4 pb-6
          space-y-3
        ">

          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="
                block
                text-gray-300
                hover:text-white
                px-3 py-2
                rounded-lg
                hover:bg-white/5
                transition
              "
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-4 flex flex-col gap-3">

            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="
                text-center py-2.5
                text-gray-300
                border border-white/10
                rounded-xl
                hover:text-white
                hover:bg-white/5
              "
            >
              Login
            </Link>

            <Link
              href="/signup"
              onClick={() => setIsOpen(false)}
              className="
                text-center py-2.5
                bg-[#004BE8]
                hover:bg-[#003ec4]
                text-white
                rounded-xl
                shadow-lg shadow-blue-900/30
              "
            >
              Sign Up
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}