import { useState } from 'react';
import { cart } from '../../store';

export default function CartModal({ isOpen, setIsOpen }) {
    const { value: cartProducts } = cart();


    return (
        <div className="relative">
            {isOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsOpen(false)}></div>}
            <div className={`fixed top-0 right-0 h-full w-[400px] bg-white shadow-lg z-50 transform transition-transform duration-400 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-4 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold">Shopping cart</h2>
                        <button className="text-[13px] cursor-pointer self-end text-[#1C1C24] hover:text-blue-600 h-[30px] w-[30px] bg-gray-200 rounded-full font-extrabold" onClick={() => setIsOpen(false)}>
                            ✕
                        </button>
                    </div>
                    {cartProducts.length == 0 && <h1>No Products in Cart</h1>}
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Item Name</th>
                                <th>Item Price</th>
                                <th>Item Qty</th>
                                <th>Item Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartProducts?.map((el, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{el.name}</td>
                                    <td>{el.price}</td>
                                    <td>{el.qty}</td>
                                    <td>{el.price * el.qty}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <span className="text-right text-[#4A4A4A]"></span>
                </div>
            </div>
        </div>
    )
}
