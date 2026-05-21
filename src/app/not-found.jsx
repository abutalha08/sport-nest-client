import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFCFF] px-4">
      <div className="text-center max-w-md w-full">

        {/* 404 */}
        <h1 className="text-[90px] sm:text-[120px] font-extrabold text-[#004BE8] leading-none">
          404
        </h1>

        {/* TITLE */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545] mt-4">
          Page Not Found
        </h2>

        {/* DESCRIPTION */}
        <p className="text-[#64748B] mt-3 text-sm sm:text-base leading-relaxed">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        {/* BUTTON */}
        <div className="mt-8">
          <Link href="/">
            <span className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-[#004BE8] text-white font-semibold hover:bg-[#003ec4] transition-all duration-300 active:scale-95 shadow-[0_10px_25px_rgba(0,75,232,0.25)]">
              <Home className="w-4 h-4" />
              Back to Home
            </span>
          </Link>
        </div>

      </div>
    </div>
  );
}