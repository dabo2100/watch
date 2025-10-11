import Hero from "../components/HeroSec/Hero";
import AbsLine from "../components/HomePage/AbsLine";
import Trending from "../components/HomePage/Trending";
import Brands from "../components/HomePage/Brands";
import MiniShop from "../components/HomePage/MiniShop";
import Abs from "../components/HomePage/Abs";

export default function HomePage() {
  let tittle = "Trending Now";
  let tittle2 = "Most Viewed";

  return (
    <>
      <div className="flex flex-col ">
        <Hero />
        <div className="md:max-w-screen-xl md:mx-auto px-4 overflow-x-hidden ">
          <AbsLine />
          <Trending tittle={tittle} />
          <Brands />
        </div>
        <div className="bg-[#F6F7FB] w-full  mt-[70px]">
          <Abs />
        </div>
        <div className="md:max-w-screen-xl md:mx-auto px-4 overflow-x-hidden ">
          <MiniShop />
          <Trending tittle={tittle2} />
        </div>
      </div>
    </>
  );
}
