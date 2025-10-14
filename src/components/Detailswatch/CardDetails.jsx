
import img from "../../assets/PageProduct/1-min-300x300.jpg"
import SmCard from "./SmCard"

import Tfasel from "./Tfasel"

export default function CardDetails() {
    return (
        <div className=" mt-5 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="w-[90%]">
                <div className="w-full rounded-2xl border border-white/30 bg-white/10 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    <img
                        src={img}
                        alt="product"
                        className="w-full rounded-2xl hover:scale-105 transition-transform duration-500"
                    />
                </div>
                <div className="w-full flex mt-3">
                    <SmCard />
                </div>
            </div>
            <Tfasel/>
        </div>
    )
}
