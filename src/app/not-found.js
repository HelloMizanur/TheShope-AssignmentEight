import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-68px)] bg-[#1a1a1a] px-4 text-center">
      {/* Background Glow */}
      <div className="absolute w-64 h-64 bg-[#7c66dc] opacity-10 blur-[100px] -z-10"></div>

      <div className="space-y-6">
        {/* Title with Gradient */}
        <h2 className="text-6xl md:text-8xl font-black bg-linear-to-b from-white to-gray-500 bg-clip-text text-transparent">
          404
        </h2>

        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-white tracking-tight">
            Not Found
          </h3>
          <p className="text-gray-400 text-lg max-w-xs mx-auto">
            Could not find the requested resource in the gallery.
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-4">
          <Link
            href="/"
            className="btn btn-wide bg-[#7c66dc] hover:bg-[#6a54c9] text-white border-none rounded-full shadow-lg shadow-[#7c66dc]/20 transition-all hover:scale-105"
          >
            Return Home
          </Link>
        </div>
      </div>

      {/* Decorative Floor */}
      <div className="mt-16 w-32 h-1 bg-[#7c66dc] rounded-full opacity-20"></div>
    </div>
  );
}
