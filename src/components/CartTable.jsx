import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const OriginalProducts = [
  {
    id: 1,
    image: "src/assets/1-min.jpg",
    name: "Orange watch",
    oldPrice: "$699.00",
    price: "$499",
  },
  {
    id: 2,
    image: "src/assets/PageProduct/5-min-300x300.jpg",
    name: "Black watch",
    oldPrice: "$699.00",
    price: "$599",
  },
  {
    id: 3,
    image: "src/assets/PageProduct/3-min-1-300x300.jpg",
    name: "Blue watch",
    oldPrice: "$799.00",
    price: "$699",
  },
  {
    id: 4,
    image: "src/assets/PageProduct/7-min.jpg",
    name: "Brown watch",
    oldPrice: "$899.00",
    price: "$799",
  },
];

export default function CartTable() {
  // Add quantity to each product when initializing
  const [products, setProducts] = useState(
    OriginalProducts.map((item) => ({
      ...item,
      quantity: 1,
    }))
  );

  const removeit = (id) => {
    const update = products.filter((item) => item.id !== id);
    setProducts(update);
  };

  // Quantity controls
  const increase = (id) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrease = (id) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Calculate total price
  const totalPrice = products.reduce((sum, item) => {
    const priceNum = parseFloat(item.price.replace("$", ""));
    return sum + priceNum * item.quantity;
  }, 0);

  return (
    <div className="overflow-x-auto container p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 text-sm md:text-base">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left"></th>
              <th className="p-3 text-left font-semibold">Product name</th>
              <th className="p-3 text-left font-semibold">Unit price</th>
              <th className="p-3 text-left font-semibold">Quantity</th>
              <th className="p-3 text-left font-semibold"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr
                key={item.id}
                className="border-t border-b hover:bg-gray-50 transition"
              >
                {/* Delete + Image */}
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                </td>

                {/* Product Name */}
                <td className="p-3 font-medium text-blue-600 cursor-pointer">
                  <a href="/shop">{item.name}</a>
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

                {/* Quantity Controls */}
                <td className="p-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decrease(item.id)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increase(item.id)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </td>

                {/* Stock */}
                <td className="p-3">
                  <button onClick={() => removeit(item.id)}className="btn btn-error">
                    Remove from cart
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ✅ Total Section */}
        <div className="flex justify-end mt-5">
          <div className="text-right">
            <p className="text-lg font-semibold">
              Total: ${totalPrice.toFixed(2)}
            </p>
            <p className="text-gray-500 text-sm">
              ({products.reduce((sum, i) => sum + i.quantity, 0)} items)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
