import img from "../../assets/PageProduct/1-min-300x300.jpg"

export default function SmCard() {
    return (
        <div>
            <div className=" w-full flex gap-3 rounded-2xl border border-white/30 bg-white/10 backdrop-blur-md shadow-lg ">
                <div className="w-[25%] rounded-2xl border border-white/30 bg-white/10 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    <img
                        src={img}
                        alt="product"
                        className="w-full rounded-2xl hover:scale-105 transition-transform duration-500"
                    />
                </div>
                <div className="w-[25%] rounded-2xl border border-white/30 bg-white/10 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    <img
                        src={img}
                        alt="product"
                        className="w-full rounded-2xl hover:scale-105 transition-transform duration-500"
                    />
                </div>
                <div className="w-[25%] rounded-2xl border border-white/30 bg-white/10 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    <img
                        src={img}
                        alt="product"
                        className="w-full rounded-2xl hover:scale-105 transition-transform duration-500"
                    />
                </div>
                <div className="w-[25%] rounded-2xl border border-white/30 bg-white/10 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    <img
                        src={img}
                        alt="product"
                        className="w-full rounded-2xl hover:scale-105 transition-transform duration-500"
                    />
                </div>

            </div>
        </div>
    )
}
