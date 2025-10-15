import { useNavigate } from 'react-router-dom';
import { cart, domain } from '../../store';
import StartIcon from './StartIcon';

export default function WatchCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = cart();
  const handleAdd = (event) => {
    event.stopPropagation();
    addToCart(product);
  };
  return (
    <div onClick={() => navigate('/shop/' + product.documentId)} className="bg-white rounded-lg shadow-sm hover:shadow-xl transition duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img src={domain + product.img?.url} alt={product.name} className="w-full h-64 object-cover group-hover:scale-110 transition duration-300" />
        {product.discount && <span className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">-{product.discount}%</span>}
      </div>

      <div className="p-5">
        <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
        <h3 className="font-semibold text-lg mb-2 text-gray-800">{product.name}</h3>

        <div className="flex items-center gap-1 mb-3">
          <div className="text-yellow-400">
            <StartIcon filled={true} />
          </div>
          <span className="text-sm font-medium">{product.rating?.test}</span>
          <span className="text-sm text-gray-500">({product.reviews})</span>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold text-slate-900">${product.price}</span>
          {product.originalPrice && <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>}
        </div>

        <button onClick={handleAdd} className="w-full bg-slate-900 text-white py-3 rounded-lg hover:bg-slate-800 transition font-medium">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
