import { activeCard, domain } from '../../store';
import SmCard from './SmCard';
import Tfasel from './Tfasel';

export default function CardDetails({ product }) {
  const { activeUrl } = activeCard();

  return (
    <div className=" mt-5 grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="w-[90%]">
        <div className="w-full rounded-2xl border border-white/30 bg-white/10 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <img src={activeUrl || domain + product.img?.url} alt="product" className="w-full rounded-2xl hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="w-full flex mt-3">
          <SmCard imgs={product.productImgs} />
        </div>
      </div>
      <Tfasel product={product} />
    </div>
  );
}
