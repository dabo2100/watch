import { useState } from "react";

export default function PriceRange() {
  const [priceRange, setPriceRange] = useState("all");
  return (
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
  );
}
