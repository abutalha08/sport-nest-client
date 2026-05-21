export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFCFF]">
      <div className="flex flex-col items-center gap-3">
        
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-[#004BE8] border-t-transparent rounded-full animate-spin"></div>

        {/* Text */}
        <p className="text-[#0B2545] font-medium text-sm">
          Loading...
        </p>
      </div>
    </div>
  );
}