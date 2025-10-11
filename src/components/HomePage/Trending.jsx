import { CiHeart } from "react-icons/ci";
import { motion } from "motion/react";
import { useState } from "react";
//img
import w1 from "../../assets/HomePege/1-min.jpg";
import w2 from "../../assets/HomePege/2-min.jpg";
import w3 from "../../assets/HomePege/3-min.jpg";
import w4 from "../../assets/HomePege/7-min.jpg";

export default function Trending({tittle}) {
  const [isHovered, setIsHovered] = useState(false);

  let prodact = [
    {
      name: "Drones Helicoprer",
      type: "Dorne",
      pric: "$540.00",
      oldPric: "$720.00",
      pic: w4,
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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-[70px] justify-items-center">
        <div className="pb-[55px] col-span-4">
          <h2 className="text-[26px] font-medium leading-[26px] text-[#222222] ">
            {tittle}
          </h2>
        </div>

        {prodact.map((el, index) => {
          const [isHovered, setIsHovered] = useState(false);
          return (
            <motion.div
              key={index}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative"
            >
              <div className="border-[1px] border-[#EFEFEF] p-[30px] flex flex-col gap-8">
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

                <div className="">
                  <img src={el.pic} className="hover:scale-105 transition duration-150" alt="" />
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
    </>
  );
}
