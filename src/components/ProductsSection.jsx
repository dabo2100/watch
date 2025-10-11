import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import min1 from "../assets/PageProduct/1-min-300x300.jpg";
import min2 from "../assets/PageProduct/2-min-1-300x300.jpg";
import min3 from "../assets/PageProduct/3-min-1-300x300.jpg";
import min4 from "../assets/PageProduct/4-min.jpg";
import min5 from "../assets/PageProduct/5-min-300x300.jpg";
import min6 from "../assets/PageProduct/6-min-300x300.jpg";
import min7 from "../assets/PageProduct/7-min.jpg";

export default function ProductsSection() {
  // البيانات
  const featured = [
    { img: min1, name: "Women Gold Watch", oldPrice: "$640.00", price: "$540.00" },
    { img: min2, name: "Mens Watches", price: "$240.00" },
    { img: min3, name: "Drones Helicopter", oldPrice: "$720.00", price: "$540.00" },
  ];

  const trending = [
    { img: min3, name: "Drones Helicopter", oldPrice: "$720.00", price: "$540.00" },
    { img: min1, name: "Women Gold Watch", oldPrice: "$640.00", price: "$540.00" },
    { img: min5, name: "Diamond Watches", oldPrice: "$310.00", price: "$210.00" },
  ];

  const hotSale = [
    { img: min2, name: "Mic for Phone", price: "$70.00" },
    { img: min4, name: "Wireless Speaker", price: "$65.00" },
    { img: min7, name: "Sony Gamepad", price: "$110.00 – $120.00" },
  ];

  // مكون قسم
 const Section = ({ title, products }) => (
  <div className="w-full flex flex-col gap-4 md:w-1/3 px-3 mb-8 md:mb-0">
    
    <div className="flex flex-col  md:flex-row md:items-center md:justify-between">
      <h2 className="text-lg font-semibold mb-2 text-center md:text-left">
        {title}
      </h2>

      
      <div className="hidden lg:flex gap-2">
        <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
          <FaChevronLeft />
        </button>
        <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
          <FaChevronRight />
        </button>
      </div>
    </div>

    
    <div className="border-t border-gray-300 w-full mb-4"></div>


    
    <div className="space-y-4">
      {products.map((p, i) => (
        <div key={i} className="flex items-center gap-3">
          <img src={p.img} alt={p.name} className="w-16 h-16 object-cover rounded" />
          <div>
            <p className="font-medium">{p.name}</p>
            {p.oldPrice && (
              <span className="text-gray-400 line-through mr-2">{p.oldPrice}</span>
            )}
            <span className="font-semibold">{p.price}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);


  
  return (
    <div className=" mx-auto py-10 px-4">
      
      <div className="flex flex-col md:flex-row gap-7">
        <Section title="Featured Products" products={featured} />
        <Section title="Trending Products" products={trending} />
        <Section title="Hot Sale" products={hotSale} />
      </div>
    </div>
  );
}
