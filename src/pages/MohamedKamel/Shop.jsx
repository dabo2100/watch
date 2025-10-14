import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { getAllWatches } from '../../data/api/GetAllWatches';
import WatchCard from './WatchCard';

// SVG Icons Components
const SlidersIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
  <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

export default function WatchProducts() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllWatches().then(setProducts);
  }, []);

  const categories = [
    { id: 'all', name: 'All Watches' },
    { id: 'smart', name: 'Smart Watches' },
    { id: 'classic', name: 'Classic' },
    { id: 'sport', name: 'Sport' },
    { id: 'luxury', name: 'Luxury' },
  ];

  // const filteredProducts = products.filter((product) => {
  //   if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
  //   if (priceRange === 'under200' && product.price >= 200) return false;
  //   if (priceRange === '200to500' && (product.price < 200 || product.price > 500)) return false;
  //   if (priceRange === 'over500' && product.price <= 500) return false;
  //   return true;
  // });

  // // Pagination calculations
  // const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  // const indexOfLastProduct = currentPage * productsPerPage;
  // const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // // Handle page change
  // const handlePageChange = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // };

  // // Reset to page 1 when filters change
  // const handleCategoryChange = (cat) => {
  //   setSelectedCategory(cat);
  //   setCurrentPage(1);
  // };

  // const handlePriceChange = (range) => {
  //   setPriceRange(range);
  //   setCurrentPage(1);
  // };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Watch Collection</h1>
          <p className="text-lg text-gray-300">Discover timeless elegance and modern innovation</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 space-y-6">
            {/* Products By Rating Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-4 border-l-4 border-slate-900 pl-3">Products By Rating</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3 pb-4 border-b border-gray-100">
                  <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop" alt="Classic Steel Watch" className="w-14 h-14 object-cover rounded" />
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-700 mb-1">Classic Steel Watch</h4>
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xs">
                          ★
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400 line-through">$670.00</span>
                      <span className="text-sm font-bold text-slate-900">$569.00</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 pb-4 border-b border-gray-100">
                  <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop" alt="Smart Watch Pro" className="w-14 h-14 object-cover rounded" />
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-700 mb-1">Smart Watch Pro</h4>
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xs">
                          ★
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-slate-900">$70.00</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <img src="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=400&h=400&fit=crop" alt="Sport Chronograph" className="w-14 h-14 object-cover rounded" />
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-700 mb-1">Sport Chronograph</h4>
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xs">
                          ★
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400 line-through">$600.00</span>
                      <span className="text-sm font-bold text-slate-900">$560.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Filters Section */}
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
                    <button key={cat.id} onClick={() => handleCategoryChange(cat.id)} className={`w-full text-left px-3 py-2 rounded-md transition ${selectedCategory === cat.id ? 'bg-slate-900 text-white' : 'hover:bg-gray-100 text-gray-700'}`}>
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
                    { id: 'all', label: 'All Prices' },
                    { id: 'under200', label: 'Under $200' },
                    { id: '200to500', label: '$200 - $500' },
                    { id: 'over500', label: 'Over $500' },
                  ].map((range) => (
                    <button key={range.id} onClick={() => handlePriceChange(range.id)} className={`w-full text-left px-3 py-2 rounded-md transition ${priceRange === range.id ? 'bg-slate-900 text-white' : 'hover:bg-gray-100 text-gray-700'}`}>
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
              <p className="text-gray-600">{/* Showing <span className="font-semibold">{filteredProducts.length}</span> products */}</p>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent">
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
