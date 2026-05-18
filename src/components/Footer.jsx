import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#D3E4FE] text-[#0F172A] overflow-hidden">

      {/* 🌤 Soft glow */}
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#004BE8]/10 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* 🏷 BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-4">

              <div className="
                w-11 h-11
                bg-gradient-to-br from-[#004BE8] to-[#1D4ED8]
                rounded-xl
                flex items-center justify-center
                shadow-md shadow-blue-300/40
              ">
                <span className="text-white font-bold text-lg">SN</span>
              </div>

              <span className="text-[#0F172A] font-bold text-xl">
                Sport<span className="text-[#004BE8]">Nest</span>
              </span>

            </div>

            <p className="text-[#334155] text-sm leading-relaxed">
              Your premier destination for booking sports facilities.
              Play your favorite sport at the best venues with ease and speed.
            </p>
          </div>

          {/* 🔗 QUICK LINKS */}
          <div>
            <h3 className="text-[#0F172A] font-semibold mb-4">Quick Links</h3>

            <div className="flex flex-col gap-2">
              <Link href="/" className="text-[#334155] hover:text-[#004BE8] transition">
                Home
              </Link>

              <Link href="/all-facilities" className="text-[#334155] hover:text-[#004BE8] transition">
                All Facilities
              </Link>

              <Link href="/my-bookings" className="text-[#334155] hover:text-[#004BE8] transition">
                My Bookings
              </Link>

              <Link href="/add-facility" className="text-[#334155] hover:text-[#004BE8] transition">
                Add Facility
              </Link>
            </div>
          </div>

          {/* 📞 CONTACT */}
          <div>
            <h3 className="text-[#0F172A] font-semibold mb-4">Contact Us</h3>

            <div className="flex flex-col gap-4 text-sm">

              <div className="flex items-center gap-3 text-[#334155]">
                <Mail className="w-4 h-4 text-[#004BE8]" />
                support@sportnest.com
              </div>

              <div className="flex items-center gap-3 text-[#334155]">
                <Phone className="w-4 h-4 text-[#004BE8]" />
                +1 (555) 123-4567
              </div>

              <div className="flex items-center gap-3 text-[#334155]">
                <MapPin className="w-4 h-4 text-[#004BE8]" />
                123 Sports Ave, City Center
              </div>

            </div>
          </div>

          {/* 🌐 SOCIAL */}
          <div>
            <h3 className="text-[#0F172A] font-semibold mb-4">Follow Us</h3>

            <div className="flex gap-3">

              <a
                href="https://facebook.com"
                target="_blank"
                className="
                  w-10 h-10
                  bg-white/50 hover:bg-[#004BE8]/10
                  border border-white/60
                  rounded-full
                  flex items-center justify-center
                  transition
                  hover:scale-110
                "
              >
                <FaFacebook className="w-5 h-5 text-[#334155] hover:text-[#004BE8]" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                className="
                  w-10 h-10
                  bg-white/50 hover:bg-[#004BE8]/10
                  border border-white/60
                  rounded-full
                  flex items-center justify-center
                  transition
                  hover:scale-110
                "
              >
                <FaInstagram className="w-5 h-5 text-[#334155] hover:text-[#004BE8]" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                className="
                  w-10 h-10
                  bg-white/50 hover:bg-[#004BE8]/10
                  border border-white/60
                  rounded-full
                  flex items-center justify-center
                  transition
                  hover:scale-110
                "
              >
                <FaLinkedin className="w-5 h-5 text-[#334155] hover:text-[#004BE8]" />
              </a>

            </div>
          </div>

        </div>

        {/* 📌 COPYRIGHT */}
        <div className="border-t border-[#93C5FD]/50 mt-12 pt-6 text-center text-sm text-[#475569]">
          © {new Date().getFullYear()} SportNest. All rights reserved.
        </div>

      </div>
    </footer>
  );
}