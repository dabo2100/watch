import { LiaShuttleVanSolid } from "react-icons/lia";
import { FaGlobeEurope } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialPinterest } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import { LiaShoppingBagSolid } from "react-icons/lia";
import logo from '/src/assets/logo.png'
import { FaChevronDown } from "react-icons/fa6";



export default function Header() {
  return (
    <div className="w-full flex flex-col items-center  bg-[#fafafa] ">
      <div className=" container bg-[#fafafa] w-full ">
        <div className=" border-b border-[#d9d9d9] flex items-center justify-between p-4">
          <div className="flex items-center gap-6 ">
            <div className="flex items-center gap-4 ">
              <LiaShuttleVanSolid size={20} />
              <span className="font-(family-name:--main-font) text-[13px] text-[#222222] "> Free Delivery</span>
            </div>
            <div className="flex items-center gap-4 border-l border-r border-[#d9d9d9] pl-2 pr-2" >
              <FaGlobeEurope size={15} />
              <span className="font-(family-name:--main-font) text-[13px] text-[#222222]">Returns Policy</span>
            </div>
            <div className="flex items-center gap-4" >
              <span className="font-(family-name:--main-font) text-[13px] text-[#222222]">Follow Us</span>
              <div className="flex items-center gap-2">
                <TiSocialFacebook size={20} />
                <TiSocialTwitter size={20} />
                <IoLogoInstagram size={15} />
                <TiSocialPinterest size={20} />
              </div>
            </div>
          </div>
          <div>
            <button className="cursor-pointer font-(family-name:--main-font) text-[13px] hover:text-white ">
              Login
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between h-[106px] border-b border-[#d9d9d9] p-4 ">
          <img src={logo} alt="" />
          <nav className="flex items-center gap-12">
            <a href="" className="font-(family-name:--main-font) text-[14px] text-[#333E48] font-semibold">Home</a>
            <div className="relative group inline-block">
              <a href="#" className="text-[14px] text-[#333E48] font-semibold flex items-center gap-2 cursor-pointer font-(family-name:--main-font)" style={{ fontFamily: "var(--main-font)" }}>
                Pages
                <FaChevronDown className="text-sm mt-[2px]" />
              </a>
              <div className="absolute left-0 top-full h-3 w-full bg-transparent group-hover:block"></div>
              <ul className="absolute left-0 mt-2 hidden w-52 bg-white shadow-md rounded-md py-2 group-hover:block z-50">
                <li><a className="block px-4 py-2 text-[#464646]  hover:text-blue-400 text-[14px] font-(family-name:--main-font)">About Us</a></li>
                <li><a className="block px-4 py-2 text-[#464646]  hover:text-blue-400 text-[14px] font-(family-name:--main-font)">Contact</a></li>
                <li><a className="block px-4 py-2 text-[#464646]  hover:text-blue-400 text-[14px] font-(family-name:--main-font)">FAQ</a></li>
                <li><a className="block px-4 py-2 text-[#464646]  hover:text-blue-400 text-[14px] font-(family-name:--main-font)">Terms & Conditions</a></li>
                <li><a className="block px-4 py-2 text-[#464646]  hover:text-blue-400 text-[14px] font-(family-name:--main-font)">Products</a></li>
              </ul>
            </div>
            <div className="relative group inline-block">
              <a href="#" className="text-[14px] text-[#333E48] font-semibold flex items-center gap-2 cursor-pointer" style={{ fontFamily: "var(--main-font)" }}>
                Shop
                <FaChevronDown className="text-sm mt-[2px]" />
              </a>
              <div className="absolute left-0 top-full h-3 w-full bg-transparent group-hover:block"></div>
              <ul className="absolute left-0 mt-2 hidden w-52 bg-white shadow-md rounded-md py-2 group-hover:block z-50">
                <li><a className="block px-4 py-2 text-[#464646]  hover:text-blue-400 text-[14px] font-(family-name:--main-font)">Shop </a></li>
                <li><a className="block px-4 py-2 text-[#464646]  hover:text-blue-400 text-[14px] font-(family-name:--main-font)">Wishlist</a></li>
              </ul>
            </div>


            <a href="" className="font-(family-name:--main-font) text-[14px] text-[#333E48] font-semibold">Blog</a>
            <a href="" className="font-(family-name:--main-font) text-[14px] text-[#333E48] font-semibold ">Gallery</a>
          </nav>
          <div className="flex items-center  gap-3">
            <FaSearch className="text-2xl text-[#EB6A2A]" />
            <div className="relative inline-block">
              <LiaShoppingBagSolid className="text-3xl text-[#EB6A2A]" />
              <span className=" absolute -top-1 -right-1  bg-[#EB6A2A] text-white text-xs font-semibold w-5 h-5 flex items-center justify-center  rounded-full border-[#ffffff] border-2"> 0
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
