import { useEffect, useState } from "react";
import { getAllCategories } from "../data/api/GetAllCategories";
import { domain } from "../store";
import { Link } from "react-router-dom";

export default function WatchesSection() {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    getAllCategories().then((data) => {
      setCategories(data);
      if (data.length > 0) {
        setActiveCategory(data[0]); 
      }
    });
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      
      <div className="w-full border border-gray-300 flex justify-center">
        <div className="w-full max-w-[1200px] grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 text-center">
          {categories.map((el, index) => (
            <div
              key={el.id}
              onClick={() => setActiveCategory(el)} 
              className={`relative flex flex-col justify-center items-center 
                h-[170px] w-full transition-all duration-200 cursor-pointer 
                ${
                  activeCategory?.id === el.id
                    ? "bg-blue-600 text-white"
                    : "bg-white text-black hover:bg-blue-50"
                }`}
            >
              <span className="font-semibold text-sm md:text-base lg:text-base">
                {el.name}
              </span>

              <p className="text-xs md:text-sm lg:text-sm">
                <span className="opacity-70">{el.watches?.length || 0}</span>{" "}
                items Available
              </p>
              {activeCategory?.id === el.id && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-6 h-6 bg-blue-600 rotate-45"></div>
              )}
              {index < categories.length - 1 && (
                <div
                  className={`absolute top-1/4 right-0 h-1/2 w-[1px]
                  ${
                    activeCategory?.id === el.id ? "bg-blue-600" : "bg-gray-300"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Link to="/shop" className="w-full mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
        {activeCategory?.watches?.length > 0 ? (
          activeCategory.watches.map((el, index) => (
            <div
              key={el.id || index}
              className="w-[185px] h-[200px] flex flex-col items-center text-center"
            >
              <img
                src={
                  el?.img?.url ? `${domain}${el.img.url}` : "/default-watch.jpg"
                }
                alt={el.name || "Watch"}
                className="w-full h-[120px] object-cover rounded-md"
              />
              <h3 className="font-semibold mt-2">{el.name}</h3>
              <p className="text-gray-600">${el.price}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full">No watches available</p>
        )}
      </Link>
    </div>
  );
}
