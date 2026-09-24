import {
  FiShoppingCart,
  FiHeart,
  FiBarChart2,
  FiArrowRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { products } from "../../../../Data/Product";

export default function Recomend() {
  const recomend = products.slice(19, 27);

  return (
    <div className="max-w-[1280px] mx-auto p-6 font-['Inter',sans-serif] antialiased">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Рекомендуем
        </h2>
        <a
          href="#"
          className="group flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-red-500 transition-colors duration-200"
        >
          Посмотреть все
          <FiArrowRight className="text-base group-hover:translate-x-1 transition-transform duration-200" />
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
        <div className="lg:col-span-1 bg-white border border-slate-200/80 rounded-2xl overflow-hidden flex flex-col justify-between text-center shadow-sm hover:shadow-xl transition-all duration-300 min-h-[580px] group">
          <div className="bg-gradient-to-b from-[#e52e30] to-[#d9383a] text-white p-7 font-bold tracking-widest uppercase">
            <span className="inline-block w-8 h-1 bg-white/40 rounded-full"></span>
          </div>

          <div className="p-6 flex flex-col items-center justify-center my-auto transform group-hover:scale-105 transition-transform duration-300">
            <span className="text-7xl font-black text-[#d9383a] leading-none mb-2 drop-shadow-sm">
              %
            </span>
            <span className="text-2xl font-black text-[#d9383a] tracking-wider uppercase">
              ЛИКВИДАЦИЯ
            </span>
          </div>

          <div className="bg-gradient-to-t from-[#e52e30] to-[#d9383a] text-white p-6 flex items-center justify-center gap-1 font-black text-2xl">
            <span className="text-base font-medium opacity-90">до</span>
            <span className="text-4xl leading-none">45%</span>
          </div>
        </div>

        <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {recomend.map((product) => (
            <Link
              key={product.id}
              to={`/deteil/${product.id}`}
              className="contents"
            >
              <div className="group bg-white border border-slate-200/70 rounded-2xl p-4 flex flex-col justify-between hover:shadow-xl hover:border-red-100 hover:-translate-y-1 transition-all duration-300">
                <div className="w-full h-40 flex items-center justify-center mb-4 overflow-hidden rounded-xl bg-slate-50/50 p-2">
                  <img
                    src={product.image}
                    alt={product.line1}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-center flex-1 flex flex-col justify-end">
                  <p className="text-sm font-bold text-[#d9383a] mb-0.5 tracking-tight">
                    {product.price} сум/мес
                  </p>
                  <p className="text-xs text-slate-400 line-through mb-2 font-medium">
                    {product.oldPrice} сум
                  </p>
                  <h3 className="text-xs font-semibold text-slate-700 line-clamp-2 leading-relaxed mb-4 min-h-[36px] group-hover:text-slate-900 transition-colors">
                    {product.line1}
                    {product.line2 && <> {product.line2}</>}
                  </h3>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex justify-between items-center text-slate-400">
                <button className="p-2 hover:bg-red-50 hover:text-red-500 rounded-xl transition-all active:scale-95">
                  <FiShoppingCart className="text-lg" />
                </button>
                <button className="p-2 hover:bg-red-50 hover:text-red-500 rounded-xl transition-all active:scale-95">
                  <FiHeart className="text-lg" />
                </button>
                <button className="p-2 hover:bg-slate-100 hover:text-slate-700 rounded-xl transition-all active:scale-95">
                  <FiBarChart2 className="text-lg" />
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}