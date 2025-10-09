export default function ItemInSwiper() {
  
  return (
    <div className="w-[1279px] h-[660px] max-h-[660px] flex flex-row justify-around bg-blue-300 ">
      {/* contant */}
      <div className=""> 
        Relogio Faminino
      </div>

      {/* img */}
      <div>
        <img src={item1} alt="" />
      </div>
    </div>
  );
}
