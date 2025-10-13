import { useState } from "react";
import min2 from "../assets/PageProduct/2-min-1-300x300.jpg";
import min3 from "../assets/PageProduct/3-min-1-300x300.jpg";
import min4 from "../assets/PageProduct/4-min.jpg";
import min5 from "../assets/PageProduct/5-min-300x300.jpg";
import min6 from "../assets/PageProduct/6-min-300x300.jpg";


export default function FeaturedProduct() {
  const productTabs = {
    "On Sell": [
      { id: 1, name: "Mic for Phone", price: "$70.00", img: min2 },
      { id: 2, name: "Wireless Speaker", price: "$65.00", img: min3 },
      { id: 3, name: "Sony Gamepad", price: "$110.00 - $120.00", img: min4 },
      { id: 4, name: "Drone WI FI FPV", oldPrice: "$280.00", price: "$250.00", img: min5 },
    ],
    "Hot Sell": [{ id: 5, name: "Smart Watch", price: "$150.00", img: min6 }],
    Trend: [{ id: 9, name: "Modern Watch", price: "$180.00", img: min5 }],
    "Best Sell": [{ id: 13, name: "Headphones Pro", price: "$130.00", img: min3 }],
  };

  const [activeTab, setActiveTab] = useState("On Sell");
  const products = productTabs[activeTab];

  return (
    <div className="w-full py-12 bg-white text-center relative">
      <div className="lg:flex lg:justify-between items-center">
        
        <h2 className="text-xl font-semibold mb-6">Featured Product</h2>

        
        <div className="flex justify-center gap-6 mb-8 text-gray-500 flex-wrap">
          {Object.keys(productTabs).map((el) => (
            <button
              key={el}
              onClick={() => setActiveTab(el)}
              className={`pb-1 transition-all ${
                activeTab === el
                  ? "text-orange-500 border-b-2 border-orange-500 font-medium"
                  : "hover:text-orange-400"
              }`}
            >
              {el}
            </button>
          ))}
        </div>
      </div>

      
      <div className="w-full mx-auto border-b border-gray-200 mb-10"></div>

      
      <div
        className={`relative px-6 grid gap-x-6 gap-y-8
        sm:grid-cols-2 
        md:grid-cols-4
        lg:${
          activeTab === "On Sell" ? "grid-cols-4" : "grid-cols-1 justify-items-center"
        }`}
      >
        {products.map((el, i) => (
          <div
            key={el.id}
            className="relative group rounded-2xl hover:shadow-md transition-all duration-300 p-4 bg-white"
          >
           
            <img
              src={el.img}
              alt={el.name}
              className="w-full h-52 object-contain mx-auto mb-3"
            />
            
            <h3 className="text-gray-800 font-medium text-base">{el.name}</h3>
            <div className="mt-1">
              {el.oldPrice && (
                <span className="text-gray-400 line-through mr-2 text-sm">
                  {el.oldPrice}
                </span>
              )}
              <span className="text-black font-semibold text-sm">{el.price}</span>
            </div>

           
            {activeTab === "On Sell" && i !== products.length - 1 && (
              <div className=" lg:block absolute right-0 top-1/4 bottom-1/4 w-[1px] bg-gray-200"></div>
            )}
          </div>
        ))}

        
        {activeTab !== "On Sell" && (
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[1px] bg-gray-200"></div>
        )}
      </div>

      
      
    </div>
  );
}
