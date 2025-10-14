import { useState } from 'react';
import cartImg from '/src/assets/2-min-1.jpg'
import { IoClose } from "react-icons/io5";

export default function CartTable() {
    let borderStyle = '  border border-[#E7E7E7] border-collapse '
    let btnStyle = 'bg-[#F07F13] text-white px-4 py-1 rounded-[4px] w-[150px] h-[46px] hover:bg-[#83B735] cursor-pointer'
    const [quantity, setQuantity] = useState(10);

    const increase = () => setQuantity(quantity + 1);
    const decrease = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    return (
        <div className="overflow-x-auto container p-4">
            <table className="table border border-[#E7E7E7] border-collapse text-center" >
                <thead>
                    <tr className={borderStyle}>
                        <th className={borderStyle}></th>
                        <th className={borderStyle}></th>
                        <th className={borderStyle}>Product</th>
                        <th className={borderStyle}>Price</th>
                        <th className={borderStyle}>Quantity</th>
                        <th className={borderStyle}>Subtotal</th>
                    </tr>
                </thead>
                <tbody >
                    <tr className={borderStyle}>
                        <td className={borderStyle}>
                            <IoClose className='h-[21px] w-[21px] rounded-full hover:bg-red-500 hover:text-white cursor-pointer' />
                        </td>
                        <td className={borderStyle}>
                            <div className="flex items-center justify-center">
                                <img src={cartImg} alt="" className='h-[100px] w-[100px]' />
                            </div>
                        </td>
                        <td className={borderStyle}>Women Gold Watch</td>
                        <td className={borderStyle}>$540.00</td>
                        <td className={borderStyle}>
                            <div className='flex items-center '>
                                <button  onClick={decrease} className='h-[45px] bg-[#F9F9F9] w-[43px] border-1 border-gray-200 cursor-pointer'>-</button>
                                <span className='flex items-center justify-center h-[45px] w-[65px] border-1 border-gray-200 '> {quantity} </span>
                                <button onClick={increase} className='h-[45px] bg-[#F9F9F9] w-[43px] border-1 border-gray-200 cursor-pointer'>+</button>
                            </div>
                        </td>
                        <td className={borderStyle}>$540.00</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="6" >
                            <div className="flex items-center justify-between px-4 py-3">
                                <div className="flex items-center gap-2">
                                    <input type="text" className="border border-gray-300 rounded-[4px] w-[150px] h-[46px] px-2 py-1" placeholder="Coupon code" />
                                    <button className={btnStyle}> Apply coupon</button>
                                </div>
                                <div>
                                    <button className={btnStyle}>
                                        Update cart
                                    </button>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tfoot>


            </table>
        </div>)
}
[]