import { FaSearch } from 'react-icons/fa';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import logo from '/src/assets/logo.png';
import { useState, useRef, useEffect } from 'react';
import { cart } from '../../store';
import BurgerMenu from './BurgerMenu';
import CartModal from './CartModal';
import NavComponent from './NavComponent';

export default function HeaderLowerPart() {
    const { value: cartProducts } = cart();
    const [searchOpen, setsearchOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const searchRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                setsearchOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    return (
        <>
            <div className="sticky top-0 z-50 w-full bg-[#f6f7fb]">
                <div className="container max-w-[1140px] mx-auto flex items-center justify-between h-[106px]  p-4">
                    <img src={logo} alt="" />

                    <NavComponent />
                    <BurgerMenu />
                    <div className="flex items-center  gap-3">
                        <div className="relative inline-block" ref={searchRef}>
                            <FaSearch onClick={() => setsearchOpen(!searchOpen)} className="cursor-pointer text-2xl text-[#EB6A2A]" />
                            {searchOpen && (
                                <div className="absolute right-0 mt-2 z-50 bg-white animate-fadeIn">
                                    <input type="text" placeholder="Find your product" className="p-3 border text-[ #959595] border-[#222222] w-[300px] h-[50px]  text-sm " />
                                </div>
                            )}
                        </div>
                        <div className=" cursor-pointer relative inline-block" onClick={() => setIsOpen(true)}>
                            <LiaShoppingBagSolid className="text-3xl text-[#EB6A2A]" />
                            <span className=" absolute -top-1 -right-1  bg-[#EB6A2A] text-white text-xs font-semibold w-5 h-5 flex items-center justify-center  rounded-full border-[#ffffff] border-2">
                                {cartProducts.length}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <CartModal isOpen={isOpen} setIsOpen={setIsOpen}/>

        </>
    )
}
