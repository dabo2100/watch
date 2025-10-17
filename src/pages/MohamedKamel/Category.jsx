import React, { useState } from "react";

export default function Category() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const categories = [
    { id: "all", name: "All Watches" },
    { id: "smart", name: "Smart Watches" },
    { id: "classic", name: "Classic" },
    { id: "sport", name: "Sport" },
    { id: "luxury", name: "Luxury" },
  ];
  return (
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
  );
}
