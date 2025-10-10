import Watch from "../assets/1-min.jpg";

export default function Shop() {
  return (
    <div className="h-full bg-gray-50 p-8">
      <div className="w-full h-full mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">
          Watch Shop
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-80 bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Filters</h3>

            <div className="mb-5">
              <h4 className="font-medium mb-2">Category</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>All</li>
                <li>Men’s Watches</li>
                <li>Women’s Watches</li>
                <li>Sports Watches</li>
                <li>Smart Watches</li>
              </ul>
            </div>

            <div className="mb-5">
              <h4 className="font-medium mb-2">Price</h4>
              <input
                type="range"
                min="0"
                max="1000"
                defaultValue="500"
                className="w-full"
              />
              <div className="text-sm text-gray-500 mt-1">$500</div>
            </div>

            <div className="mb-5">
              <h4 className="font-medium mb-2">Brand</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <input type="checkbox" className="mr-2" /> Rolex
                </li>
                <li>
                  <input type="checkbox" className="mr-2" /> Casio
                </li>
                <li>
                  <input type="checkbox" className="mr-2" /> Omega
                </li>
              </ul>
            </div>

            <button className="w-full bg-blue-600 text-white py-2 rounded">
              Apply Filters
            </button>
          </aside>

          <div className="flex-1">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
              <div className="text-sm text-gray-600">6 results found</div>
              <div className="flex items-center gap-3">
                <label className="text-sm text-gray-600">Sort by</label>
                <select className="border rounded px-2 py-1 text-sm">
                  <option>Popularity</option>
                  <option>Average rating</option>
                  <option>Newness</option>
                  <option>Price: low to high</option>
                  <option>Price: high to low</option>
                </select>

                <div className="ml-2 flex items-center gap-2">
                  <button className="px-2 py-1 border rounded bg-gray-100">
                    ◻
                  </button>
                  <button className="px-2 py-1 border rounded">☰</button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((id) => (
                <div
                  key={id}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden group"
                >
                  <div className="relative">
                    <img
                      src={Watch}
                      alt={`Watch ${id}`}
                      className="w-full h-60 object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded">
                      Sale
                    </div>
                    <div className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition">
                      <div className="bg-white/90 rounded-md p-2 flex gap-2">
                        <button className="px-3 py-1 text-sm border rounded">
                          Quick view
                        </button>
                        <button className="px-3 py-1 text-sm bg-green-600 text-white rounded">
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <h4 className="font-semibold text-lg">
                      Luxury Chrono Watch {id}
                    </h4>
                    <div className="flex items-center justify-between mt-2">
                      <div>
                        <span className="text-sm text-gray-400 line-through mr-2">
                          $640
                        </span>
                        <span className="text-lg font-bold">$540</span>
                      </div>
                      <div className="text-xs text-gray-500">124 reviews</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center mt-8 gap-2">
              <button className="px-3 py-1 border rounded">Prev</button>
              {[1, 2, 3].map((n) => (
                <button
                  key={n}
                  className={`px-3 py-1 border rounded ${
                    n === 1 ? "bg-black text-white" : ""
                  }`}
                >
                  {n}
                </button>
              ))}
              <button className="px-3 py-1 border rounded">Next</button>
            </div>

            <div className="mt-8"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
