import Star from "./StarCard"
import { Link } from "react-router-dom"
export default function Tfasel() {
  return (
    <div>
       <div className="w-[100%] flex flex-col items-start  mt-4 gap-4">
                <h1 className="text-4xl">HD LED TV</h1>
                <p>Category: <Link to="/src/pages/MohamedKamel/Shop.jsx" className="text-blue-800">LED Television</Link> </p>
                <Star />
                <p>
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                </p>
                <h2 className="text-3xl">$210.00</h2>
                <p className="text-amber-600">13 in stock</p>
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                        <button className="btn btn-outline" >+</button>
                        <button className="btn btn-outline w-4" > 1 </button>
                        <button className="btn btn-outline" >-</button>
                    </div>
                    <button className="btn btn-outline btn-warning">Add to cart</button>
                </div>
            </div>
    </div>
  )
}
