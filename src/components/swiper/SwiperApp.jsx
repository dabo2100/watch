import item1 from "../../assets/heroSec/banner_watch.png";
import item2 from "../../assets/heroSec/banner_img2-min.png";
import item3 from "../../assets/heroSec/banner_img3-min.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./swiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

let slide = [
  {
    item: item1,
    title: " Cagarny 6839",
    pric: "1,200",
    oldPric: "1,500",
    disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero in enim repudiandae eos porro quis nostrum eum, cupiditate quasi dolores consequatur optio quia quisquam inventore repellat sapiente, quaerat, officiis doloribus?",
  },
  {
    item: item2,
    title: "Omega Seamaster",
    pric: "1,200",
    oldPric: "1,500",
    disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero in enim repudiandae eos porro quis nostrum eum, cupiditate quasi dolores consequatur optio quia quisquam inventore repellat sapiente, quaerat, officiis doloribus?",
  },
  {
    item: item3,
    title: "Apple Watch",
    pric: "1,200",
    oldPric: "1,500",
    disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero in enim repudiandae eos porro quis nostrum eum, cupiditate quasi dolores consequatur optio quia quisquam inventore repellat sapiente, quaerat, officiis doloribus?",
  },
];

export default function SwiperApp() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slide.map((el, index) => (
          <SwiperSlide className="bg-yellow-400">
            <div className="w-[1279px] h-[660px] max-h-[660px] flex flex-row justify-around items-center bg-blue-300 ">
              <div className="">{el.title}</div>

              <div>
                <img src={el.item} alt="" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
