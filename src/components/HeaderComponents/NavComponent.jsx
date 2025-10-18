import { FaChevronDown } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
export default function NavComponent() {
  return (
    <nav className="hidden lg:flex items-center gap-12  ">
      <Link to="/" className="font-(family-name:--main-font) text-[14px] text-[#333E48] font-semibold">
        Home
      </Link>
      <div className="relative group inline-block">
        <a href="#" className="text-[14px] text-[#333E48] font-semibold flex items-center gap-2 cursor-pointer font-(family-name:--main-font)" style={{ fontFamily: 'var(--main-font)' }}>
          Pages
          <FaChevronDown className="text-sm mt-[2px]" />
        </a>
        <div className="absolute left-0 top-full h-3 w-full bg-transparent group-hover:block"></div>
        <ul className="absolute left-0 mt-2 hidden w-52 bg-white shadow-md rounded-md py-2 group-hover:block z-50">
          <li>
            <Link to="/AboutUs" className="block px-4 py-2 text-[#464646]  hover:text-blue-400 text-[14px] font-(family-name:--main-font)">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="block px-4 py-2 text-[#464646]  hover:text-blue-400 text-[14px] font-(family-name:--main-font)">
              Contact
            </Link>
          </li>
          <li>
            <a className="block px-4 py-2 text-[#464646]  hover:text-blue-400 text-[14px] font-(family-name:--main-font)">FAQ</a>
          </li>
          <li>
            <a className="block px-4 py-2 text-[#464646]  hover:text-blue-400 text-[14px] font-(family-name:--main-font)">Terms & Conditions</a>
          </li>
          <li>
            <Link to="/Products" className="block px-4 py-2 text-[#464646]  hover:text-blue-400 text-[14px] font-(family-name:--main-font)">
              Products
            </Link>
          </li>
        </ul>
      </div>
      <div className="relative group inline-block">
        <a href="#" className="text-[14px] text-[#333E48] font-semibold flex items-center gap-2 cursor-pointer" style={{ fontFamily: 'var(--main-font)' }}>
          Shop
          <FaChevronDown className="text-sm mt-[2px]" />
        </a>
        <div className="absolute left-0 top-full h-3 w-full bg-transparent group-hover:block"></div>
        <ul className="absolute left-0 mt-2 hidden w-52 bg-white shadow-md rounded-md py-2 group-hover:block z-50">
          <li>
            <Link to="/Shop" className="block px-4 py-2 text-[#464646]  hover:text-blue-400 text-[14px] font-(family-name:--main-font)">
              Shop{' '}
            </Link>
          </li>
          <li>
            <a className="block px-4 py-2 text-[#464646]  hover:text-blue-400 text-[14px] font-(family-name:--main-font)">Wishlist</a>
          </li>
        </ul>
      </div>

      <a href="" className="font-(family-name:--main-font) text-[14px] text-[#333E48] font-semibold">
        Blog
      </a>
      <a href="" className="font-(family-name:--main-font) text-[14px] text-[#333E48] font-semibold ">
        Gallery
      </a>
    </nav>
  )
}
