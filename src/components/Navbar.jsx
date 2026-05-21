"use client";

import { Menu, LogOut } from "lucide-react";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const pathname = usePathname();
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
    setProfileDropdownOpen(false);
    window.location.reload();
  };

  const navLinkClass = (path) =>
    `text-sm font-medium transition px-1 py-1 border-b-2 ${
      pathname === path
        ? "text-[#004BE8] border-[#004BE8]"
        : "text-gray-600 border-transparent hover:text-[#004BE8] hover:border-[#004BE8]"
    }`;

  const mobileLinkClass = (path) =>
    `block py-2 text-sm font-medium transition ${
      pathname === path
        ? "text-[#004BE8]"
        : "text-gray-700 hover:text-[#004BE8]"
    }`;

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-11 h-11 bg-gradient-to-br from-[#004BE8] to-[#1D4ED8] rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/30">
              <span className="text-white font-bold text-sm tracking-wide">
                SN
              </span>
            </div>

            <span className="font-bold text-2xl text-[#004BE8]">
              SportNest
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className={navLinkClass("/")}>Home</Link>

            <Link
              href="/all-facilities"
              className={navLinkClass("/all-facilities")}
            >
              All Facilities
            </Link>

            {user && (
              <>
                <Link href="/my-bookings" className={navLinkClass("/my-bookings")}>
                  My Bookings
                </Link>

                <Link href="/add-facility" className={navLinkClass("/add-facility")}>
                  Add Facility
                </Link>

                <Link href="/manage-facilities" className={navLinkClass("/manage-facilities")}>
                  Manage Facilities
                </Link>
              </>
            )}
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden md:flex items-center gap-4">
            {!user && (
              <Link href="/login">
                <button className="bg-[#004BE8] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#003ec4] transition">
                  Login
                </button>
              </Link>
            )}

            {user && (
              <div className="relative">
                <button
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg cursor-pointer
                  transition-all duration-200 ease-in-out
                  hover:bg-gray-50 hover:shadow-sm hover:border-gray-300"
                >
                  <Image
                    src={user?.image || "/avatar.png"}
                    alt={user.name}
                    width={30}
                    height={30}
                    className="w-7 h-7 rounded-full object-cover"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {user.name}
                  </span>
                </button>

                {profileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-52 bg-white border border-gray-100 rounded-lg shadow-lg overflow-hidden">
                    <Link href="/my-bookings" className="block px-4 py-2 text-sm hover:bg-gray-50">
                      My Bookings
                    </Link>

                    <Link href="/add-facility" className="block px-4 py-2 text-sm hover:bg-gray-50">
                      Add Facility
                    </Link>

                    <Link href="/manage-facilities" className="block px-4 py-2 text-sm hover:bg-gray-50">
                      Manage Facilities
                    </Link>

                    <hr />

                    <button
                      onClick={handleSignOut}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50 flex items-center gap-2"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 space-y-2">

            {/* 👤 USER INFO (ADDED ONLY FOR MOBILE) */}
            {user && (
              <div className="flex items-center gap-3 px-3 py-3 border-b border-gray-100">
                <Image
                  src={user?.image || "/avatar.png"}
                  alt={user.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {user.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    Logged in
                  </p>
                </div>
              </div>
            )}

            <Link href="/" className={mobileLinkClass("/")}>
              Home
            </Link>

            <Link href="/all-facilities" className={mobileLinkClass("/all-facilities")}>
              All Facilities
            </Link>

            {user && (
              <>
                <Link href="/my-bookings" className={mobileLinkClass("/my-bookings")}>
                  My Bookings
                </Link>

                <Link href="/add-facility" className={mobileLinkClass("/add-facility")}>
                  Add Facility
                </Link>

                <Link href="/manage-facilities" className={mobileLinkClass("/manage-facilities")}>
                  Manage Facilities
                </Link>
              </>
            )}

            {!user ? (
              <Link href="/login" className="block py-2 text-[#004BE8] font-medium">
                Login
              </Link>
            ) : (
              <button
                onClick={handleSignOut}
                className="block py-2 text-red-600 font-medium"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}