import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { getAllWatches } from "../../data/api/GetAllWatches";
import WatchCard from "./WatchCard";
import HeaderShop from "./HeaderShop";
import SideBar from "./SideBar";

export default function WatchProducts() {
  const [sortBy, setSortBy] = useState("featured");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllWatches().then(setProducts);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeaderShop />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <SideBar />

          {/* Products Grid */}
          <main className="flex-1">
            {/* Sort and Results */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                {/* Showing <span className="font-semibold">{filteredProducts.length}</span> products */}
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <WatchCard key={product.documentId} product={product} />
              ))}
            </div>
          </main>
        </div>
      </div>

      <Outlet />
    </div>
  );
}
