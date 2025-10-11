import a1 from "../../assets/HomePege/watch-bb-1.png";

export default function Abs() {
  return (
    <>
      <div className="md:max-w-screen-xl bg-[#F6F7FB] md:m-auto flex items-center justify-items-center overflow-hidden ">
        <div>
          <img
            src={a1}
            alt=""
            className="h-[500px] hover:scale-110 duration-150"
          />
        </div>
        <div className="w-1/3 flex flex-col gap-5">
          <h2 className="text-3xl font-semibold leading-[48px] text-[#222222] ">
            We are the leading Luxury watch retailer in UK.
          </h2>
          <p className="text-[16px] font-medium text-[#666666] leading-[28px] ">
            Stocking the finest luxury watch brands, we specialise in sourcing
            new and used quality timepieces through our website
          </p>
          <button className="bg-[#222222] text-white px-11 py-3.5 w-fit">VIEW COLLECTIONS</button>
        </div>
      </div>
    </>
  );
}
