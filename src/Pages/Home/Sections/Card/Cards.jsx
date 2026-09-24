import { MdShoppingCart, MdFavorite } from "react-icons/md";
import { LuScale } from "react-icons/lu";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

import { products } from "../../../../Data/Product";
import { Link } from "react-router-dom";
const card =
  "group relative flex flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white text-center transition-all duration-300 before:absolute before:inset-x-0 before:top-0 before:z-10 before:h-[3px] before:origin-left before:scale-x-0 before:bg-gradient-to-r before:from-[#E8382D] before:to-orange-400 before:transition-transform before:duration-500 hover:border-[#E8382D]/40 hover:shadow-[0_22px_44px_-14px_rgba(232,56,45,0.45)] hover:before:scale-x-100 motion-safe:hover:-translate-y-1.5";
const cheaperProducts  = products.slice(9)
export default function Cards() {
  return (
    <section className="bg-white font-[Montserrat,sans-serif]">
      <div className="mx-auto max-w-[1200px] px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-[20px] font-semibold text-neutral-900">
            Товары дешевле:
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
          {cheaperProducts.map((p) => (
            <article key={p.image} className={card}>
              <Link to={`/deteil/${p.id}`} className="contents">
                <div className="mx-3 mt-3 flex h-[132px] items-center justify-center rounded-lg transition-colors duration-300 group-hover:bg-red-50">
                  <img
                    src={p.image}
                    alt={p.line1}
                    loading="lazy"
                    className="h-[110px] w-full object-contain mix-blend-multiply transition-transform duration-500 motion-safe:group-hover:scale-110"
                  />
                </div>

                <p className="mt-6 text-[15px] font-semibold text-[#E8382D]">
                  {p.price} сум/мес
                </p>
                <p className="mt-1 text-[12px] text-neutral-400">
                  {p.oldPrice} сум
                </p>

                <h3 className="mt-4 min-h-[44px] px-2 text-[13px] font-bold leading-[22px] text-black">
                  {p.line1}
                  <br />
                  {p.line2}
                </h3>
              </Link>

              <div className="mt-5 flex border-t border-neutral-200">
                <button
                  type="button"
                  aria-label="В корзину"
                  className="flex flex-1 justify-center py-4 text-neutral-400 transition-colors duration-300 group-hover:bg-[#E8382D] group-hover:text-white active:scale-95"
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
