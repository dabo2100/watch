import { activeCard, domain } from '../../store';

export default function SmCard({ imgs }) {
  const { setActiveUrl } = activeCard();
  return (
    <div>
      <div className=" w-full flex gap-3 rounded-2xl border border-white/30 bg-white/10 backdrop-blur-md shadow-lg ">
        {imgs?.map((el, index) => (
          <div onClick={() => setActiveUrl(domain + el.url)} key={index} className="w-[25%] rounded-2xl border border-white/30 bg-white/10 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
            <img src={domain + el.url} alt="product" className="w-full rounded-2xl hover:scale-105 transition-transform duration-500" />
          </div>
        ))}
      </div>
    </div>
  );
}
