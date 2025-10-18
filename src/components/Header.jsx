

import HeaderUpperPart from './HeaderComponents/HeaderUpperPart';
import HeaderLowerPart from './HeaderComponents/HeaderLowerPart';

export default function Header() {
 

  return (
    <div className=" w-full flex flex-col items-center  bg-[#f6f7fb] ">
      <div className=" flex flex-col justify-center items-center  bg-[#f6f7fb] w-full ">
        <HeaderUpperPart />

        <div className="bg-gray-300 h-px border w-full"></div>
        <HeaderLowerPart />

        <div className="bg-gray-300 h-px border w-full"></div>
      </div>

  
    </div>
  );
}
