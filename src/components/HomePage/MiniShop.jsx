import { CiHeart } from "react-icons/ci";
import { motion } from "motion/react";
import { useState } from "react";
//img
import w1 from "../../assets/HomePege/1-min.jpg";
import w2 from "../../assets/HomePege/2-min.jpg";
import w3 from "../../assets/HomePege/3-min.jpg";
import w4 from "../../assets/HomePege/7-min.jpg";

export default function MiniShop() {
  const [isHovered, setIsHovered] = useState(false);
  let prodact = [
    {
      name: "Woman Gold Watch",
      type: "Watch",
      pric: "$540.00",
      oldPric: "$640.00",
      pic: w2,
    },
    {
      name: "HD LED TV",
      type: "LED Television",
      pric: "$210.00",
      oldPric: "$310.00",
      pic: w1,
    },
    {
      name: "Diamond Watches",
      type: "Watch",
      pric: "$210.00",
      oldPric: "$310.00",
      pic: w3,
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
      pic: w1,
    },
  ];
  return (
    <>
      <div className="flex flex-col md:flex-row mt-[70px] md:justify-items-center gap-5 ">
        <img
          src="https://demo.xpeedstudio.com/marketov2/watch/wp-content/uploads/sites/14/2018/10/ad-min-1.jpg"
          alt=""
          className="max-sm:hidden"
        />
        <div className="w-full">
          <div className="flex flex-col items-center gap-3 lg:gap-0 lg:flex-row md:justify-between pb-3 border-b-[1px] border-[#EFEFEF] ">
            <h2 className="text-[22px] font-semibold leading-[22px] text-[#1C1C24] ">
              Discount Product
            </h2>
            <nav className="flex gap-5 text-[18px] leading-[18px] ">
              <span className="text-[#F07F13] border-b-[2px] border-[#F07F13] ">
                On Sell
              </span>
              <span>Hot Sell</span>
              <span>Trend</span>
              <span>Best Sell</span>
            </nav>
          </div>
          <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:p-2 lg:p-8 ">
            {prodact.map((el, index) => {
              const [isHovered, setIsHovered] = useState(false);
              return (
                <motion.div
                  key={index}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="relative"
                >
                  <div className="rounded-xl border-[#EFEFEF] w-fit p-[30px] flex flex-col gap-8 max-sm:items-center hover:shadow-md">
                    <motion.div
                      initial={{ y: -20, opacity: 0 }}
                      animate={{
                        y: isHovered ? 0 : -20,
                        opacity: isHovered ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-[#EB6A2A] flex justify-end px-[30px] text-xl"
                    >
                      <CiHeart />
                    </motion.div>

                    <div className="w-[170px]">
                      <img
                        src={el.pic}
                        className="hover:scale-105  object-fill transition duration-150"
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="text-[13px] font-medium leading-[19px] text-[#999999] cursor-pointer ">
                        {el.type}
                      </p>
                      <h3 className="text-[16px] font-semibold leading-[26px] text-[#222222] ">
                        {el.name}
                      </h3>
                      <div className="flex flex-row gap-4">
                        <span className="line-through text-[17px] leading-[26px] text-[#D4D4D4] ">
                          {el.oldPric}
                        </span>
                        <span className="text-[18px] font-semibold text-[#282828] leading-[27px] ">
                          {el.pric}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
