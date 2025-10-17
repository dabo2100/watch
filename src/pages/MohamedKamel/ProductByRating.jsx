export default function ProductByRating() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="font-semibold text-lg mb-4 border-l-4 border-slate-900 pl-3">
        Products By Rating
      </h3>

      <div className="space-y-4">
        <div className="flex items-start gap-3 pb-4 border-b border-gray-100">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop"
            alt="Classic Steel Watch"
            className="w-14 h-14 object-cover rounded"
          />
          <div className="flex-1">
            <h4 className="text-sm font-medium text-gray-700 mb-1">
              Classic Steel Watch
            </h4>
            <div className="flex items-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xs">
                  ★
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400 line-through">
                $670.00
              </span>
              <span className="text-sm font-bold text-slate-900">$569.00</span>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3 pb-4 border-b border-gray-100">
          <img
            src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop"
            alt="Smart Watch Pro"
            className="w-14 h-14 object-cover rounded"
          />
          <div className="flex-1">
            <h4 className="text-sm font-medium text-gray-700 mb-1">
              Smart Watch Pro
            </h4>
            <div className="flex items-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xs">
                  ★
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-slate-900">$70.00</span>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <img
            src="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=400&h=400&fit=crop"
            alt="Sport Chronograph"
            className="w-14 h-14 object-cover rounded"
          />
          <div className="flex-1">
            <h4 className="text-sm font-medium text-gray-700 mb-1">
              Sport Chronograph
            </h4>
            <div className="flex items-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xs">
                  ★
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400 line-through">
                $600.00
              </span>
              <span className="text-sm font-bold text-slate-900">$560.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
