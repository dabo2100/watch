import { IoMenu } from 'react-icons/io5';

export default function BurgerMenu() {
    return (
        <>
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
                    <div className="modal-action"></div>
                    <a href="" className="block px-4 py-2 text-[#000000]  hover:text-blue-400 text-[14px] font-(family-name:--main-font) font-bold">
                        Home
                    </a>
                    <a href="" className="block px-4 py-2 text-[#000000]  hover:text-blue-400 text-[14px] font-(family-name:--main-font) font-bold">
                        Pages
                    </a>
                    <a href="" className="block px-4 py-2 text-[#000000]  hover:text-blue-400 text-[14px] font-(family-name:--main-font) font-bold">
                        Shop
                    </a>
                    <a href="" className="block px-4 py-2 text-[#000000]  hover:text-blue-400 text-[14px] font-(family-name:--main-font) font-bold">
                        Blog
                    </a>
                    <a href="" className="block px-4 py-2 text-[#000000]  hover:text-blue-400 text-[14px] font-(family-name:--main-font) font-bold">
                        Gallery
                    </a>
                </div>
            </dialog>

        </>
    )
}
