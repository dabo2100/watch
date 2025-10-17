import ProductByRating from "./ProductByRating";
import Category from "./Category";
import PriceRange from "./PriceRange";

export default function SideBar() {
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

  return (
    <aside className="lg:w-64 space-y-6">
      {/* Products By Rating Section */}
      <ProductByRating />

      {/* Filters Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
          <SlidersIcon />
          Filters
        </h3>

        {/* Categories */}
        <Category />

        {/* Price Range */}
        <PriceRange />
      </div>
    </aside>
  );
}
