import React from "react";
import tilesData from "../../../data/tile.json";
import AllTilesClient from "./../../../Components/AllTilesClient";

const AllTiles = () => {
  const categories = [
    "All",
    ...new Set(tilesData.tiles.map((t) => t.category)),
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="pt-10 pb-6 px-4 max-w-7xl mx-auto">
        <h1 className="text-xl font-medium text-gray-700 mb-6">
          Browse the Gallery
        </h1>

        <AllTilesClient tiles={tilesData.tiles} categories={categories} />
      </header>
    </div>
  );
};

export default AllTiles;
