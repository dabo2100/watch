import React, { useState } from "react";
import { Outlet } from "react-router-dom";

// SVG Icons Components
const SlidersIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" y1="21" x2="4" y2="14"></line>
    <line x1="4" y1="10" x2="4" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12" y2="3"></line>
    <line x1="20" y1="21" x2="20" y2="16"></line>
    <line x1="20" y1="12" x2="20" y2="3"></line>
    <line x1="1" y1="14" x2="7" y2="14"></line>
    <line x1="9" y1="8" x2="15" y2="8"></line>
    <line x1="17" y1="16" x2="23" y2="16"></line>
  </svg>
);

const StarIcon = ({ filled = false }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

export default function WatchProducts() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const products = [
    {
      id: 1,
      name: "Classic Steel Watch",
      brand: "Timeless",
      price: 299,
      originalPrice: 399,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
      rating: 4.5,
      reviews: 128,
      category: "classic",
      discount: 25,
    },
    {
      id: 2,
      name: "Smart Watch Pro",
      brand: "TechTime",
      price: 449,
      originalPrice: 549,
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 256,
      category: "smart",
      discount: 18,
    },
    {
      id: 3,
      name: "Luxury Gold Watch",
      brand: "Elite",
      price: 899,
      originalPrice: 1199,
      image:
        "https://images.unsplash.com/photo-1587836374181-c6f1f49e2abc?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 89,
      category: "luxury",
      discount: 25,
    },
    {
      id: 4,
      name: "Sport Chronograph",
      brand: "ActiveTime",
      price: 199,
      originalPrice: 279,
      image:
        "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=400&h=400&fit=crop",
      rating: 4.3,
      reviews: 167,
      category: "sport",
      discount: 29,
    },
    {
      id: 5,
      name: "Minimalist Black",
      brand: "Modern",
      price: 179,
      originalPrice: 229,
      image:
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400&h=400&fit=crop",
      rating: 4.6,
      reviews: 203,
      category: "classic",
      discount: 22,
    },
    {
      id: 6,
      name: "Digital Smart Band",
      brand: "FitTech",
      price: 129,
      originalPrice: 179,
      image:
        "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop",
      rating: 4.4,
      reviews: 312,
      category: "smart",
      discount: 28,
    },
    {
      id: 7,
      name: "Vintage Leather",
      brand: "Heritage",
      price: 349,
      originalPrice: 449,
      image:
        "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 145,
      category: "classic",
      discount: 22,
    },
    {
      id: 8,
      name: "Titanium Pro Sport",
      brand: "ActiveTime",
      price: 549,
      originalPrice: 699,
      image:
        "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 189,
      category: "sport",
      discount: 21,
    },
  ];

  const categories = [
    { id: "all", name: "All Watches" },
    { id: "smart", name: "Smart Watches" },
    { id: "classic", name: "Classic" },
    { id: "sport", name: "Sport" },
    { id: "luxury", name: "Luxury" },
  ];

  const filteredProducts = products.filter((product) => {
    if (selectedCategory !== "all" && product.category !== selectedCategory)
      return false;
    if (priceRange === "under200" && product.price >= 200) return false;
    if (
      priceRange === "200to500" &&
      (product.price < 200 || product.price > 500)
    )
      return false;
    if (priceRange === "over500" && product.price <= 500) return false;
    return true;
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Reset to page 1 when filters change
  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handlePriceChange = (range) => {
    setPriceRange(range);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Watch Collection
          </h1>
          <p className="text-lg text-gray-300">
            Discover timeless elegance and modern innovation
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <SlidersIcon />
                Filters
              </h3>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium mb-3 text-gray-700">Categories</h4>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`w-full text-left px-3 py-2 rounded-md transition ${
                        selectedCategory === cat.id
                          ? "bg-slate-900 text-white"
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h4 className="font-medium mb-3 text-gray-700">Price Range</h4>
                <div className="space-y-2">
                  {[
                    { id: "all", label: "All Prices" },
                    { id: "under200", label: "Under $200" },
                    { id: "200to500", label: "$200 - $500" },
                    { id: "over500", label: "Over $500" },
                  ].map((range) => (
                    <button
                      key={range.id}
                      onClick={() => handlePriceChange(range.id)}
                      className={`w-full text-left px-3 py-2 rounded-md transition ${
                        priceRange === range.id
                          ? "bg-slate-900 text-white"
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="flex-1">
            {/* Sort and Results */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Showing{" "}
                <span className="font-semibold">{filteredProducts.length}</span>{" "}
                products
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
              {currentProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-sm hover:shadow-xl transition duration-300 overflow-hidden group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"
                    />
                    {product.discount && (
                      <span className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        -{product.discount}%
                      </span>
                    )}
                  </div>

                  <div className="p-5">
                    <p className="text-sm text-gray-500 mb-1">
                      {product.brand}
                    </p>
                    <h3 className="font-semibold text-lg mb-2 text-gray-800">
                      {product.name}
                    </h3>

                    <div className="flex items-center gap-1 mb-3">
                      <div className="text-yellow-400">
                        <StarIcon filled={true} />
                      </div>
                      <span className="text-sm font-medium">
                        {product.rating}
                      </span>
                      <span className="text-sm text-gray-500">
                        ({product.reviews})
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-slate-900">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>

                    <button className="w-full bg-slate-900 text-white py-3 rounded-lg hover:bg-slate-800 transition font-medium">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center items-center gap-2">
                {/* Previous Button */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    currentPage === 1
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow-sm"
                  }`}
                >
                  Previous
                </button>

                {/* Page Numbers */}
                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (pageNum) => (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={`w-10 h-10 rounded-lg font-medium transition ${
                          currentPage === pageNum
                            ? "bg-slate-900 text-white shadow-lg"
                            : "bg-white text-slate-900 hover:bg-slate-100 shadow-sm"
                        }`}
                      >
                        {pageNum}
                      </button>
                    )
                  )}
                </div>

                {/* Next Button */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    currentPage === totalPages
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow-sm"
                  }`}
                >
                  Next
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      <Outlet />
    </div>
  );
}
