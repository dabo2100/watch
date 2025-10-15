import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const OriginalProducts = [
  {
    id: 1,
    image: "src/assets/1-min.jpg",
    name: "Orange watch",
    oldPrice: "$699.00",
    price: "$499",
    stock: "In Stock",
  },
  {
    id: 2,
    image: "src/assets/PageProduct/5-min-300x300.jpg",
    name: "Black watch",
    oldPrice: "$699.00",
    price: "$599",
    stock: "Out of Stock",
  },
  {
    id: 3,
    image: "src/assets/PageProduct/3-min-1-300x300.jpg",
    name: "Blue watch",
    oldPrice: "$799.00",
    price: "$699",
    stock: "In Stock",
  },
  {
    id: 4,
    image: "src/assets/PageProduct/7-min.jpg",
    name: "Brown watch",
    oldPrice: "$899.00",
    price: "$799",
    stock: "Out of Stock",
  },
];


export default function WishlistPage() {
  const [products, setproducts] = useState(OriginalProducts)

  const removeit = (id) => {
    const update = products.filter((item) => item.id !== id)
    setproducts(update)
  }

  return (
    <div className="flex items-center justify-center ">
      <div className="container">
        <div className=" flex flex-col mx-10 justify-center ">
          <div className="flex w-full bg-gray-200 h-18 px-4 py-3">
            <h3 className="flex items-center text-sm sm:text-base">
              <Link href="/" className="text-gray-600">
                Home
              </Link>
              &nbsp; / &nbsp;About Us
            </h3>
          </div>
          <h1 className=" text-3xl font-semibold p-8 overflow-hidden w-fill">
            My wishlist on Marketpress
          </h1>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 text-sm md:text-base">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left"></th>
                <th className="p-3 text-left font-semibold">Product name</th>
                <th className="p-3 text-left font-semibold">Unit price</th>
                <th className="p-3 text-left font-semibold">Stock status</th>
                <th className="p-3 text-left"></th>
              </tr>
            </thead>
            <tbody>
              {products.map((item) => (
                <tr key={item.id} className="border-t border-b hover:bg-gray-50">
                  {/* Delete button + Image */}
                  <td className="p-3 flex items-center gap-3">
                    <button onClick={() => { removeit(item.id) }} className="text-red-500 hover:text-red-700">
                      <FaTimes />
                    </button>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                  </td>

                  {/* Product name */}
                  <td className="p-3">
                    <p className="text-blue-600 font-medium hover:underline cursor-pointer">
                      {item.name}
                    </p>
                  </td>

                  {/* Price */}
                  <td className="p-3">
                    <span className="line-through text-gray-400 mr-2">
                      {item.oldPrice}
                    </span>
                    <span className="font-semibold text-gray-800">
                      {item.price}
                    </span>
                  </td>

                  {/* Stock status */}
                  <td className="p-3">
                    {item.stock === "In Stock" ? (
                      <span className="text-green-600 font-medium">In Stock</span>
                    ) : (
                      <span className="text-red-600 font-medium">
                        Out of stock
                      </span>
                    )}
                  </td>

                  {/* Add to Cart */}
                  <td className="p-3">
                    {item.stock === "In Stock" ? (<button className="text-blue-600 hover:underline font-medium">
                      Add to Cart
                    </button>) : (<h1 className="text-red-600 line-through font-medium">
                      Unavailable
                    </h1>)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
