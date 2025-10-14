import React from 'react'

const watches = [
  {img:"" , name :"Gold watch"  , price:"499" , stock: "In Stock" },
  {img:"" , name :"Black watch"  , price:"599" , stock: "Out of Stock" },
  {img:"" , name :"Emerald watch"  , price:"699" , stock: "In Stock" },
  {img:"" , name :"Gold watch"  , price:"799" , stock: "Out of Stock" },
]
export default function WishlistPage() {
  return (
    <>
    <div className="container flex justify-center">
      <h1 className=" text-3xl font-semibold p-8 w-[800px]">My wishlist on Marketpress</h1>
    </div>
    </>
  )
}
