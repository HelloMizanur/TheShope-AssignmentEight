import React from "react";
import tilesData from "../../../data/tile.json"; // Path check kore nin
import Image from "next/image";
import Link from "next/link";

const TileCard = () => {
  // 4ti bhinno category theke 1ti kore data filter kora holo
  const featuredCategories = ["ceramic", "marble", "mosaic", "porcelain"];

  const featuredData = featuredCategories
    .map((cat) => tilesData.tiles.find((tile) => tile.category === cat))
    .filter(Boolean);

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
        <h2 className="text-2xl font-semibold text-gray-800 tracking-tight">
          Featured Tiles
        </h2>
        <a
          href="/alltiles"
          className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors"
        >
          See all —
        </a>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredData.map((tile) => (
          <div
            key={tile.id}
            className="card bg-white rounded-none border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
          >
            {/* Top Banner / Image Area */}
            <figure className="relative h-48 overflow-hidden bg-gray-50">
              <Image
                src={tile.image}
                alt={tile.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </figure>

            {/* Content Area */}
            <div className="p-5 space-y-2">
              <span className="badge badge-ghost rounded-md text-[10px] uppercase tracking-tighter py-0 h-4 border-gray-200">
                {tile.category}
              </span>

              <h3 className="font-bold text-gray-800 text-sm truncate">
                {tile.title}
              </h3>

              <p className="text-gray-500 text-[11px] font-medium">
                {tile.dimensions}
              </p>

              <div className="pt-2">
                <span className="text-gray-900 font-bold text-sm">
                  ${tile.price.toFixed(2)}
                </span>
              </div>

              <div className="pt-1">
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded bg-gray-100 text-gray-600`}
                >
                  {tile.inStock ? "In Stock" : "Out of Stock"}
                </span>
              </div>
            </div>

            {/* Full Width Button */}
            <div className="mt-auto">
              <Link
                href={`/tiledetail/${tile.id}`}
                className="btn btn-primary w-full rounded-none no-animation border-none bg-blue-700 hover:bg-blue-800 text-white capitalize font-medium text-xs h-10 min-h-10"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TileCard;
