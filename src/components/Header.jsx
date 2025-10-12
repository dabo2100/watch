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
import { useState, useRef, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setsearchOpen] = useState(false);

  const searchRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setsearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className=" w-full flex flex-col items-center  bg-[#f6f7fb] ">
        
      <div className=" flex flex-col justify-center items-center  bg-[#f6f7fb] w-full ">
        <div className="container max-w-[1140px] hidden md:flex items-center justify-between p-4">
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

        <div className="bg-gray-300 h-px border w-full"></div>

        <div className="sticky top-0 z-50 w-full bg-[#f6f7fb]">
          <div className="container max-w-[1140px] mx-auto flex items-center justify-between h-[106px]  p-4">
            <img src={logo} alt="" />
            <nav className="hidden lg:flex items-center gap-12  ">
              
              <Link to="/" className="font-(family-name:--main-font) text-[14px] text-[#333E48] font-semibold">Home</Link>
              <div className="relative group inline-block">
                <a href="#" className="text-[14px] text-[#333E48] font-semibold flex items-center gap-2 cursor-pointer font-(family-name:--main-font)" style={{ fontFamily: "var(--main-font)" }}>
                  Pages
                  <FaChevronDown className="text-sm mt-[2px]" />
                </a>
                <div className="absolute left-0 top-full h-3 w-full bg-transparent group-hover:block"></div>
                <ul className="absolute left-0 mt-2 hidden w-52 bg-white shadow-md rounded-md py-2 group-hover:block z-50">
                  <li><Link to="/AboutUs" className="block px-4 py-2 text-[#464646]  hover:text-blue-400 text-[14px] font-(family-name:--main-font)">About Us</Link></li>
                  <li><Link to="/Contact" className="block px-4 py-2 text-[#464646]  hover:text-blue-400 text-[14px] font-(family-name:--main-font)">Contact</Link></li>
                  <li><a className="block px-4 py-2 text-[#464646]  hover:text-blue-400 text-[14px] font-(family-name:--main-font)">FAQ</a></li>
                  <li><a className="block px-4 py-2 text-[#464646]  hover:text-blue-400 text-[14px] font-(family-name:--main-font)">Terms & Conditions</a></li>
                  <li><Link to="/Products" className="block px-4 py-2 text-[#464646]  hover:text-blue-400 text-[14px] font-(family-name:--main-font)">Products</Link></li>
                </ul>
              </div>
              <div className="relative group inline-block">
                <a href="#" className="text-[14px] text-[#333E48] font-semibold flex items-center gap-2 cursor-pointer" style={{ fontFamily: "var(--main-font)" }}>
                  Shop
                  <FaChevronDown className="text-sm mt-[2px]" />
                </a>
                <div className="absolute left-0 top-full h-3 w-full bg-transparent group-hover:block"></div>
                <ul className="absolute left-0 mt-2 hidden w-52 bg-white shadow-md rounded-md py-2 group-hover:block z-50">
                  <li><Link to="/Shop" className="block px-4 py-2 text-[#464646]  hover:text-blue-400 text-[14px] font-(family-name:--main-font)">Shop </Link></li>
                  <li><a className="block px-4 py-2 text-[#464646]  hover:text-blue-400 text-[14px] font-(family-name:--main-font)">Wishlist</a></li>
                </ul>
              </div>


              <a href="" className="font-(family-name:--main-font) text-[14px] text-[#333E48] font-semibold">Blog</a>
              <a href="" className="font-(family-name:--main-font) text-[14px] text-[#333E48] font-semibold ">Gallery</a>
            </nav>
            {/* burger menu */}
            <div className="w-full flex lg:hidden items-center justify-end px-4">
              <IoMenu onClick={() => document.getElementById('menu_modal').showModal()} className="text-[#EB6A2A] text-3xl cursor-pointer" />
            </div>
            {/* Burger Menu Modal*/}
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="menu_modal" className="modal">
              <div className="modal-box w-[350px] h-dvh absolute top-0 left-0">
                <form method="dialog" className="flex justify-end">
                  <button className="btn rounded-xl"> X </button>
                </form>
                <div className="modal-action">
                </div>
                <a href="" className="block px-4 py-2 text-[#000000]  hover:text-blue-400 text-[14px] font-(family-name:--main-font) font-bold">Home</a>                
                <a href="" className="block px-4 py-2 text-[#000000]  hover:text-blue-400 text-[14px] font-(family-name:--main-font) font-bold">Pages</a>                
                <a href="" className="block px-4 py-2 text-[#000000]  hover:text-blue-400 text-[14px] font-(family-name:--main-font) font-bold">Shop</a>                
                <a href="" className="block px-4 py-2 text-[#000000]  hover:text-blue-400 text-[14px] font-(family-name:--main-font) font-bold">Blog</a>                
                <a href="" className="block px-4 py-2 text-[#000000]  hover:text-blue-400 text-[14px] font-(family-name:--main-font) font-bold">Gallery</a>                
              </div>
            </dialog>

            <div className="flex items-center  gap-3">
              <div className="relative inline-block" ref={searchRef}>
                <FaSearch onClick={() => setsearchOpen(!searchOpen)} className="cursor-pointer text-2xl text-[#EB6A2A]" />
                {searchOpen && (
                  <div className="absolute right-0 mt-2   z-50 bg-white animate-fadeIn">
                    <input type="text" placeholder="Find your product" className="p-3 border text-[ #959595] border-[#222222] w-[300px] h-[50px]  text-sm " />
                  </div>
                )}
              </div>
              <div className=" cursor-pointer relative inline-block" onClick={() => setIsOpen(true)}>
                <LiaShoppingBagSolid className="text-3xl text-[#EB6A2A]" />
                <span className=" absolute -top-1 -right-1  bg-[#EB6A2A] text-white text-xs font-semibold w-5 h-5 flex items-center justify-center  rounded-full border-[#ffffff] border-2"> 0
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-300 h-px border w-full"></div>
      </div>
      <div className="relative">
        {isOpen && (<div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsOpen(false)}></div>
        )}
        <div
          className={`fixed top-0 right-0 h-full w-[400px] bg-white shadow-lg z-50 transform transition-transform duration-400 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="p-4 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Shopping cart</h2>
              <button className="text-[13px] cursor-pointer self-end text-[#1C1C24] hover:text-blue-600 h-[30px] w-[30px] bg-gray-200 rounded-full font-extrabold" onClick={() => setIsOpen(false)}>
                ✕
              </button>
            </div>
            <span className="text-right text-[#4A4A4A]">No products in the cart. </span>
          </div>
        </div>
      </div>
    </div>
  );
}
