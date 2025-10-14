import Hero from "../components/HeroSec/Hero";
import AbsLine from "../components/HomePage/AbsLine";
import Trending from "../components/HomePage/Trending";
import Brands from "../components/HomePage/Brands";
import MiniShop from "../components/HomePage/MiniShop";
import Abs from "../components/HomePage/Abs";
import Flag from "../components/HomePage/Flag";

export default function HomePage() {
  let tittle = "Trending Now";
  let tittle2 = "Most Viewed";

  return (
    <div className="flex flex-col justify-center">
      <Hero />
      <div className=" flex flex-col justify-center px-4 overflow-x-hidden ">
        <div className="container m-auto md:max-w-[1140px] ">
          <AbsLine />
          <Trending tittle={tittle} />
          <Brands />
        </div>
      </div>
      <div className="bg-[#F6F7FB] w-full  mt-[70px]">
        <Abs />
      </div>
      <div className=" md:mx-auto px-4 overflow-x-hidden ">
        <div className="container m-auto md:max-w-[1140px] ">
          <MiniShop />
          <Trending tittle={tittle2} />
        </div>
      </div>
      <div className="bg-[#F6F7FB] w-full mt-[70px]">
        <Flag />
      </div>
    </div>
  );
}
