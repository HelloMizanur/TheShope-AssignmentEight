import React from "react";
import tilesData from "../../../../data/tile.json";
import Image from "next/image";
import Link from "next/link";

const TileDetailPage = async ({ params }) => {
  const { id } = await params;
  console.log(id, "Paasind id");

  const tile = tilesData.tiles.find((t) => t.id === parseInt(id));
  console.log(tile, "Paasind tile");

  if (!tile) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
        <h2 className="text-2xl font-bold">Tile Not Found!</h2>
        <Link href="/" className="btn btn-primary">
          Go Back Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb (Navigation help) */}
        <div className="text-sm breadcrumbs mb-8 text-gray-500">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/alltiles">Tiles</Link>
            </li>
            <li className="text-blue-600 font-medium">{tile.title}</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Product Image */}
          <div className="relative h-100 md:h-150 w-full bg-gray-100 rounded-none border border-gray-200 overflow-hidden">
            <Image
              src={tile.image}
              alt={tile.title}
              fill
              className="object-cover"
              priority
            />
            {/* Corner Tag */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-1 text-xs font-bold uppercase tracking-widest border border-gray-200">
              {tile.material}
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="flex flex-col space-y-6">
            <div>
              <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">
                {tile.category} Collection
              </span>
              <h1 className="text-4xl font-semibold text-gray-900 mt-2">
                {tile.title}
              </h1>
              <p className="text-2xl font-light text-gray-700 mt-4">
                ${tile.price.toFixed(2)}{" "}
                <span className="text-sm text-gray-400">/ per sq. ft.</span>
              </p>
            </div>

            <div className="border-t border-b border-gray-100 py-6">
              <h3 className="text-sm font-bold text-gray-900 uppercase mb-3">
                Description
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {tile.description}
              </p>
            </div>

            {/* Specifications Table */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-gray-50 p-4 border border-gray-100">
                <p className="text-gray-400 uppercase text-[10px] font-bold">
                  Dimensions
                </p>
                <p className="text-gray-900 font-medium mt-1">
                  {tile.dimensions}
                </p>
              </div>
              <div className="bg-gray-50 p-4 border border-gray-100">
                <p className="text-gray-400 uppercase text-[10px] font-bold">
                  Creator
                </p>
                <p className="text-gray-900 font-medium mt-1">{tile.creator}</p>
              </div>
              <div className="bg-gray-50 p-4 border border-gray-100">
                <p className="text-gray-400 uppercase text-[10px] font-bold">
                  Stock Status
                </p>
                <p
                  className={`font-medium mt-1 ${tile.inStock ? "text-green-600" : "text-red-500"}`}
                >
                  {tile.inStock ? "Available" : "Out of Stock"}
                </p>
              </div>
              <div className="bg-gray-50 p-4 border border-gray-100">
                <p className="text-gray-400 uppercase text-[10px] font-bold">
                  Material
                </p>
                <p className="text-gray-900 font-medium mt-1">
                  {tile.material}
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tile.tags.map((tag, index) => (
                <span
                  key={index}
                  className="badge badge-outline text-gray-400 rounded-none text-[10px] uppercase px-3 py-2"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                disabled={!tile.inStock}
                className="btn btn-primary flex-1 rounded-none bg-blue-700 hover:bg-blue-800 border-none text-white h-14"
              >
                {tile.inStock ? "Order Sample" : "Notify When Available"}
              </button>
              <button className="btn btn-outline flex-1 rounded-none border-gray-200 hover:bg-gray-50 hover:text-gray-900 h-14">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TileDetailPage;
