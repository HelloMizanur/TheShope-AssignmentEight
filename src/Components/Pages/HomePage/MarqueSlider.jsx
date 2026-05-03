import Marquee from "react-fast-marquee";

const marqueeItems = [
  { id: 1, title: "New Arrivals: Ceramic Blue Tile" },
  { id: 2, title: "Weekly Feature: Modern Geometric Patterns" },
  { id: 3, title: "Join the Community" },
  { id: 4, title: "New Arrivals: Marble Stone Elite" },
  { id: 5, title: "Trending: Terracotta Collection" },
  { id: 6, title: "Sale: Up to 30% off Mosaic Tiles" },
];

const MarqueSlider = () => {
  return (
    <div className=" bg-[#7c66dc] py-4 ">
      <Marquee gradientColor="#1a1a1a" speed={50} pauseOnHover={true}>
        {marqueeItems.map((item) => (
          <div key={item.id} className="flex items-center mx-10">
            {/* Dot Icon or Star Icon */}
            <div className="w-2 h-2 bg-[#ffffff] rounded-full mr-4 "></div>

            <span className="text-white text-lg font-medium tracking-wide">
              {item.title}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueSlider;
