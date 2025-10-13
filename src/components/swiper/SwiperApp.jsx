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
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false} //theArorr
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slide.map((el, index) => (
          <SwiperSlide className="bg-[#F6F7FB]" key={index}>
            <div className="con max-h-[660px] h-[660px] flex flex-row justify-center items-center bg-[#F6F7FB] ">
              <div className="tag-wrapper fixed bottom-25 flex w-full text-[190px] font-extrabold leading-[250px] text-[#EBECF0]">
                {"TAGHEUER".split("").map((ch, i) => (
                  <span key={i} className="tag-letter" style={{ "--order": i }}>
                    {ch}
                  </span>
                ))}
              </div>

              <div className="flex flex-row justify-around items-center z-10 w-full max-sm:gap-8">
                <div className="flex flex-col items-start text-start w-1/2 gap-4 md:gap-6">
                  <h2
                    className="text-[60px] font-bold leading-[70px] stagger-item"
                    style={{ "--order": 1 }}
                  >
                    {el.title}
                  </h2>

                  <p
                    className="text-[#666666] text-[16px] leading-[28px] font-medium stagger-item slide-desc"
                    style={{ "--order": 2 }}
                  >
                    {el.disc}
                  </p>

                  <div className="stagger-item" style={{ "--order": 3 }}>
                    <span className="text-[#EB6A2A] font-bold text-[36px] leading-[36px]">
                      {el.pric}
                    </span>
                    <span className="text-[#A6A6A6] text-[24px] leading-[25px] line-through">
                      {el.oldPric}
                    </span>
                  </div>

                  <button
                    className="py-4 px-10  bg-[#EB6A2A] hover:bg-[#7d3410] btn-cta text-[16px] text-white font-medium leading-[17px] text-center stagger-item"
                    style={{ "--order": 4 }}
                  >
                    view collection
                  </button>
                </div>

                <div className="stagger-item img" style={{ "--order": 5 }}>
                  <img
                    src={el.item}
                    alt={el.title}
                    // loading="lazy"
                    className="min-sm:w-[200px] h-[500px] object-contain hover:scale-105 transition-transform duration-300 ease-in-out slide-image"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
