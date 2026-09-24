import { MdShoppingCart, MdFavorite } from "react-icons/md";
import { LuScale } from "react-icons/lu";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import {products}   from "../../../../Data/Product.js"


const card =
  "group relative flex flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white text-center transition-all duration-300 before:absolute before:inset-x-0 before:top-0 before:z-10 before:h-[3px] before:origin-left before:scale-x-0 before:bg-gradient-to-r before:from-[#E8382D] before:to-orange-400 before:transition-transform before:duration-500 hover:border-[#E8382D]/40 hover:shadow-[0_22px_44px_-14px_rgba(232,56,45,0.45)] hover:before:scale-x-100 motion-safe:hover:-translate-y-1.5";
const hotDeals = products.slice(0,9)
export default function Gaget() {
  return (
    <section className="bg-white font-[Montserrat,sans-serif] mt-20">
      <div className="mx-auto max-w-[1200px] px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-[20px] font-semibold text-neutral-900">
            Горящие предложения
          </h2>
          <a
            href="#"
            className="group flex items-center gap-2 text-[13px] font-light text-neutral-400 transition-colors hover:text-[#E8382D]"
          >
            Посмотреть все
            <HiOutlineArrowLongRight className="h-7 w-7 transition-transform group-hover:translate-x-1.5" />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {hotDeals.map((p) => (
            <article  key={p.id} className={card}>
      <Link to={`/deteil/${p.id}`} className="contents">
        <span className="absolute right-3 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-red-500 to-red-600 text-[13px] font-semibold text-white shadow-lg shadow-red-500/30 transition-transform duration-300 group-hover:scale-110">
                -{p.discount}%
              </span>

              <div className="mx-3 mt-3 flex h-[124px] items-center justify-center rounded-lg transition-colors duration-300 group-hover:bg-red-50">
                <img
                  src={p.image}
                  alt={p.line1}
                  loading="lazy"
                  className="h-[100px] w-full object-contain mix-blend-multiply transition-transform duration-500 motion-safe:group-hover:scale-110"
                />
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 whitespace-nowrap px-2">
                <span className="text-[11px] text-neutral-400 line-through">
                  {p.oldPrice} сум
                </span>
                <span className="h-4 w-px bg-neutral-300" />
                <span className="text-[15px] font-bold text-[#E8382D]">
                  {p.price} сум
                </span>
              </div>

              <h3 className="mt-4 min-h-[44px] px-2 text-[13px] font-bold leading-[22px] text-black">
                {p.line1}
                <br />
                {p.line2}
              </h3>

              <p className="mt-4 text-[12px] font-light text-neutral-400">
                Предложение заканчивается через:
              </p>

              <div className="mx-4 mb-5 mt-3 grid grid-cols-4">
                <div className="flex flex-col items-center">
                  <span className="text-[18px] font-light tabular-nums text-neutral-700 transition-colors duration-300 group-hover:text-[#E8382D]">
                    {p.time[0]}
                  </span>
                  <span className="text-[9px] font-light text-neutral-400">
                    дней
                  </span>
                </div>
                <div className="flex flex-col items-center border-l border-neutral-200">
                  <span className="text-[18px] font-light tabular-nums text-neutral-700 transition-colors duration-300 group-hover:text-[#E8382D]">
                    {p.time[1]}
                  </span>
                  <span className="text-[9px] font-light text-neutral-400">
                    часов
                  </span>
                </div>
                <div className="flex flex-col items-center border-l border-neutral-200">
                  <span className="text-[18px] font-light tabular-nums text-neutral-700 transition-colors duration-300 group-hover:text-[#E8382D]">
                    {p.time[2]}
                  </span>
                  <span className="text-[9px] font-light text-neutral-400">
                    минут
                  </span>
                </div>
                <div className="flex flex-col items-center border-l border-neutral-200">
                  <span className="text-[18px] font-light tabular-nums text-neutral-700 transition-colors duration-300 group-hover:text-[#E8382D]">
                    {p.time[3]}
                  </span>
                  <span className="text-[9px] font-light text-neutral-400">
                    секунд
                  </span>
                </div>
              </div>
      </Link>

              <div className="mt-auto flex border-t border-neutral-200">
                <button
                  type="button"
                  aria-label="В корзину"
                  className="flex flex-1 justify-center py-4 text-[#E8382D] transition-colors duration-300 group-hover:bg-[#E8382D] group-hover:text-white active:scale-95"
                >
                  <MdShoppingCart className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  aria-label="В избранное"
                  className="flex flex-1 justify-center border-x border-neutral-200 py-4 text-neutral-400 transition hover:bg-red-50 hover:text-[#E8382D] active:scale-95"
                >
                  <MdFavorite className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  aria-label="Сравнить"
                  className="flex flex-1 justify-center py-4 text-neutral-400 transition hover:bg-neutral-100 hover:text-neutral-900 active:scale-95"
                >
                  <LuScale className="h-6 w-6" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
