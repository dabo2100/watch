import EG from "../../assets/HomePege/eg.png";
import pls from "../../assets/HomePege/pls-01.png";
import eraa from "../../assets/HomePege/eraa.jpeg";

export default function Flag() {
  return (
    <div className="">
      <div className="bg-[#F6F7FB] items-center grid grid-cols-1 md:grid-cols-3 gap-5 w-full  p-5  md:max-w-screen-xl  md:m-auto  md:flex-row flex-col  justify-items-center-safe overflow-hidden">
        <div className="flex items-center gap-3 w-full   ">
          <img src={EG} alt="" className="w-10" />
          <span className="text-2xl">Egypt</span>
        </div>
        <div className=" flex items-center gap-3 w-full   ">
          <img src={pls} alt="" className="w-10" />
          <span className="text-2xl">Palstaine</span>
        </div>
        <div className=" flex items-center gap-3 w-full ">
          <img src={eraa} alt="" className="rounded-full w-15" />
          <span className="text-2xl ">Eraa Soft</span>
        </div>
      </div>
    </div>
  );
}
