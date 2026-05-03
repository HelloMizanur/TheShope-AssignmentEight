"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const AllTilesClient = ({ tiles, categories }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Search and Filter Logic
  const filteredTiles = tiles.filter((tile) => {
    const matchesSearch = tile.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || tile.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Search Input Section */}
      <div className="flex gap-0 border border-gray-300 overflow-hidden mb-8">
        <input
          type="text"
          placeholder="Search tiles by title..."
          className="flex-1 px-4 py-3 outline-none text-sm text-gray-600"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="bg-[#001b4e] text-white px-8 py-3 text-sm font-medium hover:bg-blue-900">
          Search
        </button>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-6 border-b border-gray-100 pb-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`text-sm pb-2 capitalize transition-all ${
              selectedCategory === cat
                ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Tiles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTiles.length > 0 ? (
          filteredTiles.map((tile) => (
            <div
              key={tile.id}
              className="group border border-gray-100 shadow-sm hover:shadow-md"
            >
              <div className="relative h-56 w-full overflow-hidden bg-gray-50">
                <Image
                  src={tile.image}
                  alt={tile.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-4 bg-white">
                <span className="text-[10px] text-blue-500 uppercase font-bold tracking-widest">
                  {tile.category}
                </span>
                <h3 className="text-sm font-semibold text-gray-800 mt-1">
                  {tile.title}
                </h3>
                <p className="text-[11px] text-gray-400 mt-1">
                  {tile.dimensions} — {tile.category}
                </p>
              </div>
              <Link
                href={`/tiledetail/${tile.id}`}
                className="block w-full text-center bg-[#3b5998] text-white py-2.5 text-xs font-medium"
              >
                Details
              </Link>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-20 text-gray-400">
            No tiles found matching your search.
          </div>
        )}
      </div>
    </>
  );
};

export default AllTilesClient;
