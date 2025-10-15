import { SlArrowRight } from 'react-icons/sl';
import { Link, useParams } from 'react-router-dom';
import CardDetails from '../../components/Detailswatch/CardDetails';
import { useEffect, useState } from 'react';
import { getWatchDetails } from '../../data/api/GetWatchDetails';

export default function DiamondWatches() {
  const parms = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getWatchDetails(parms.watch_id).then((res)=>{
        console.log(res);
        setProduct(res);
    });
  }, []);
  return (
    <section className=" w-full flex flex-col items-center justify-center py-10 gap-10">
      <div className="  bg-white p-6 gap-6 container">
        <div className=" w-full flex  items-center gap-3 py-5 bg-[#fafafa] rounded-2xl px-6 border border-gray-200">
          {/* زر الرجوع للرئيسية */}
          <Link to="/" className=" flex items-center gap-3 text-gray-800">
            Home <SlArrowRight />
          </Link>

          {/* العنوان */}
          <h2 className=" text-black ">Details Watch</h2>
        </div>
        <CardDetails product={product} />
      </div>
    </section>
  );
}
