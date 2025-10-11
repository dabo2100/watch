import Hero from "../components/HeroSec/Hero";
import AbsLine from "../components/HomePage/AbsLine";
import Trending from "../components/HomePage/Trending";
import Brands from "../components/HomePage/Brands";

//img
import w1 from "../assets/HomePege/1-min.jpg";
import w2 from "../assets/HomePege/2-min.jpg";
import w3 from "../assets/HomePege/3-min.jpg";
import w4 from "../assets/HomePege/7-min.jpg";

export default function HomePage() {
  let tittle = "Top Brands";
  let tittle2 = "Most Viewed";
  let prodact = [
    {
      name: "Drones Helicoprer",
      type: "Dorne",
      pric: "$540.00",
      oldPric: "$720.00",
      pic: w1,
    },
    {
      name: "Woman Gold Watch",
      type: "Watch",
      pric: "$540.00",
      oldPric: "$640.00",
      pic: w2,
    },
    {
      name: "Diamond Watches",
      type: "Watch",
      pric: "$210.00",
      oldPric: "$310.00",
      pic: w3,
    },
    {
      name: "HD LED TV",
      type: "LED Television",
      pric: "$210.00",
      oldPric: "$310.00",
      pic: w4,
    },
  ];

  return (
    <>
      <div className="flex flex-col ">
        <Hero />
        <div className="max-w-screen-xl mx-auto px-4">
          <AbsLine />
          <Trending tittle={tittle} />
          <Brands />
          <Trending tittle={tittle2} />
        </div>
      </div>
    </>
  );
}
