import f1 from "../../assets/HomePege/f1-min.jpg";
import f2 from "../../assets/HomePege/f2-min.jpg";

export default function AbsLine() {
  return (
    <>
      {/* <div className="flex flex-col md:flex-row gap-20 w-full justify-center mt-[70px]"> */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-[70px] justify-items-center">
        <img className="" src={f1} alt="" />
        <img className="" src={f2} alt="" />
      </div>
    </>
  );
}
