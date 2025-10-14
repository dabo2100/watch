import React from 'react'
import { Link } from 'react-router-dom'
import CartTable from '../components/CartTable'
import CartSubtotal from '../components/CartSubtotal'

export default function CartPage() {
  return (
    <div className="w-full h-full overflow-auto flex flex-col gap-10 justify-center mt-10 items-center">
      <div className="flex justify-center items-center w-full bg-[#f9f9f9] h-18 px-4 py-3">
        <div className="container p-4">
          <h3 className="flex items-center text-sm sm:text-base">
            <Link to="/" className="text-[#777777] text-[14px] font-(family-name:--second-font) font-bold">
              Home
            </Link>
            &nbsp; <span className="text-[#4A4A4A] ">&gt;</span>
            &nbsp; 
            <span className="text-[#4A4A4A] text-[14px] font-(family-name:--second-font) font-medium"> Cart</span>
          </h3>
        </div>
      </div>
      <CartTable/>
      <CartSubtotal/>
    </div>
    )
}

