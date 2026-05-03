import React from "react";
import HeroSlider from "@/components/HeroSlider"; // পাথ চেক করে নিন
import NavLink from "@/Components/Shared/NavLink";

const Home = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=1920",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?q=80&w=1920",
    },
  ];

  return (
    <section className="relative w-full h-[80vh] min-h-125 overflow-hidden">
      {/* শুধু স্লাইডারটি ক্লায়েন্ট কম্পোনেন্ট হিসেবে এখানে বসবে */}
      <HeroSlider slides={slides} />

      {/* এই অংশটুকু সার্ভার সাইডেই রেন্ডার হবে (SEO friendly) */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
        <div className="max-w-3xl space-y-6 pointer-events-auto">
          <div className="flex justify-center">
            <span className="border border-[#7c66dc] text-[#917df2] px-4 py-1 rounded-full text-sm font-medium uppercase tracking-widest bg-[#7c66dc]/10">
              Premium Tile Collection
            </span>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight">
            Discover Your Perfect <br />
            <span className="text-[#7c66dc]">Aesthetic</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-xl mx-auto">
            Browse thousands of curated tiles for every style & space
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="btn bg-[#7c66dc] hover:bg-[#6a54c9] text-white border-none px-10 rounded-sm text-lg">
              <NavLink
                href="/alltiles"
                className="btn bg-[#7c66dc] hover:bg-[#6a54c9] text-white border-none px-10 rounded-sm text-lg shadow-lg shadow-[#7c66dc]/20 transition-all hover:scale-105 active:scale-95"
              >
                Browse Now
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
