import React from 'react'

export default function CartSubtotal() {
    let borderStyle = '  border border-[#E7E7E7] border-collapse '
    let hesderTableStyle = 'font-bold font-(family-name:--second-font) text-[#4A4A4A] text-[14px] p-6'
    let rightTableStyle = 'font-bold font-(family-name:--second-font) text-[16px] font-medium text-[#282828]'
    return (
        <div className='w-full flex items-center justify-center'>
            <div className='container flex justify-end'>
                <div className='flex flex-col justify-end w-[537px] p-4 gap-6'>
                    <h1 className='text-4xl text-[#1C1C24] font-(family-name:--second-font)'>Cart Totals</h1>
                    <table className='table W-full border-collapse border-1 text-center'>
                        <tr className={borderStyle}>
                            <td className={hesderTableStyle}>Subtotal</td >
                            <td className={rightTableStyle}>$540.00</td>
                        </tr>
                        <tr className={borderStyle}>
                            <td className={hesderTableStyle}>Shipping</td>
                            <td className={rightTableStyle}>Free Shipping<br />
                                Shipping to Egypt <br />
                                <button>Change address</button>
                            </td>
                        </tr>
                        <tr className={borderStyle}>
                            <td className={hesderTableStyle}>Total</td>
                            <td className={rightTableStyle}>$540.00</td>
                        </tr>
                    </table>

                </div>

            </div>

        </div>
    )
}
