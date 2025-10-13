import { Link } from "react-router-dom";
import WatchesSection from "../components/WatchesSection";
import FeaturedProduct from "../components/FeaturedProduct";
import NewsletterProduct from "../components/NewsletterProduct";
import ProductsSection from "../components/ProductsSection";

export default function Product() {
  return (
    <div className="w-full h-full overflow-auto flex flex-col gap-10 justify-center mt-10 items-center">
      
      <div className="flex justify-center items-center w-full bg-[#f9f9f9] h-18 px-4 py-3">
        <div className="w-full max-w-[1140px] mx-auto">
          <h3 className="flex items-center text-sm sm:text-base">
            <Link to="/" className="text-gray-600">
              Home
            </Link>
            &nbsp; <span>&gt;</span>
            &nbsp; Product Category
          </h3>
        </div>
      </div>

      <div className="w-full max-w-[1140px] mx-auto px-4">
        <WatchesSection />
        <FeaturedProduct />
        <ProductsSection />
      </div>
      <div className="w-full h-[259.6px] flex justify-center items-center bg-[#f9f9f9]">
        <NewsletterProduct />
      </div>
    </div>
  );
}
