import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { GoChevronUp, GoChevronRight } from "react-icons/go";
import { LuScale } from "react-icons/lu";
import { MdChevronLeft, MdFilterList, MdGridView, MdViewList } from "react-icons/md";
import { MdShoppingCart, MdFavorite } from "react-icons/md";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { GrMoney } from "react-icons/gr";
import { FiTrendingUp } from "react-icons/fi";

const productss = [
  {
    image: "/imgs/Card9.png",
    line1: "Умные часы Haylou",
    line2: "RT-LS05S",
    price: "458 000",
    oldPrice: "529 000",
  },
  {
    image: "/imgs/Card8.png",
    line1: "Наушники Panasonic",
    line2: "RP-HJE125E-R",
    price: "18 000",
    oldPrice: "99 000",
  },
  {
    image: "/imgs/Card7.png",
    line1: "Iphone 13 pro 256 Gb",
    line2: "",
    price: "9 525 000",
    oldPrice: "10 520 000",
  },
  {
    image: "/imgs/Card6.png",
    line1: "Источник бесперебойного",
    line2: "питания AVT 600 AVR (EA260)",
    price: "600 000",
    oldPrice: "909 000",
  },
  {
    image: "/imgs/Card1.png",
    line1: "Беспроводная мышь",
    line2: "Logitech M220 SILENT",
    price: "130 000",
    oldPrice: "200 000",
  },
  {
    image: "/imgs/Card5.png",
    line1: "Кард-ридер Earldom OT27",
    line2: "",
    price: "18 000",
    oldPrice: "253 000",
  },
  {
    image: "/imgs/Card4.png",
    line1: "Умные часы Haylou",
    line2: "RT-LS05S",
    price: "7 250 000",
    oldPrice: "9 500 000",
  },
  {
    image: "/imgs/Card3.png",
    line1: "Умные часы Haylou",
    line2: "RT-LS05S",
    price: "165 000",
    oldPrice: "256 000",
  },
  {
    image: "/imgs/Card2.png",
    line1: "Умные часы Haylou",
    line2: "RT-LS05S",
    price: "18 000",
    oldPrice: "30 000",
  },
  {
    image: "/imgs/Card1.png",
    line1: "Геймпад Logitech F710",
    line2: "",
    price: "365 000",
    oldPrice: "458 000",
  },
];

const brands = [
  { name: "LG", count: 30 },
  { name: "Samsung", count: 30 },
  { name: "Artel", count: 7 },
  { name: "Huawei", count: 30 },
];

const batteryOptions = ["1821 мА·ч", "3000 мА·ч", "4500 мА·ч", "5000 мА·ч"];

const countries = ["Вьетнам", "Китай", "Artel", "Huawei"];

const collapsedFilters = [
  "Количество ядер",
  "Фронтальная камера",
  "Фотокамера",
  "Версия ОС",
  "Разъем для наушников",
  "Разъем для наушников",
];
const products = [
  {
    image: "/imgs/Card1.png",
    line1: "Телефон TECNO Spark 6 Go",
    line2: "KE5j 3/64GB Ice Jadeite",
    oldPrice: "1 373 000",
    price: "1 304 000",
    discount: "3",
    time: ["27", "21", "32", "05"],
  },
  {
    image: "/imgs/Card2.png",
    line1: "Умные часы Haylou",
    line2: "RT-LS05S",
    oldPrice: "1 529 000",
    price: "350 000",
    discount: "3",
    time: ["27", "21", "32", "05"],
  },
  {
    image: "/imgs/Card3.png",
    line1: "TP-LINK TL-WR940N",
    line2: "450M (черный)",
    oldPrice: "1 529 000",
    price: "1 350 000",
    discount: "3",
    time: ["27", "21", "32", "05"],
  },
  {
    image: "/imgs/Card4.png",
    line1: "Умные часы Haylou",
    line2: "RT-LS05S",
    oldPrice: "1 529 000",
    price: "350 000",
    discount: "3",
    time: ["27", "21", "32", "05"],
  },
  {
    image: "/imgs/Card5.png",
    line1: "Клавиатура 2E",
    line2: "Gaming KG330",
    oldPrice: "1 529 000",
    price: "350 000",
    discount: "3",
    time: ["27", "21", "32", "05"],
  },
  {
    image: "/imgs/Card6.png",
    line1: "Наушники Panasonic",
    line2: "RP-HJE125E-R",
    oldPrice: "159 000",
    price: "79 000",
    discount: "3",
    time: ["27", "21", "32", "05"],
  },
  {
    image: "/imgs/Card7.png",
    line1: "Телефон TECNO POP 4 BC2c",
    line2: "2/32GB Ice Lake Green",
    oldPrice: "1 529 000",
    price: "350 000",
    discount: "3",
    time: ["27", "21", "32", "05"],
  },
  {
    image: "/imgs/Card8.png",
    line1: "Motorola",
    line2: "Smartwatch",
    oldPrice: "350 000",
    price: "200 000",
    discount: "6",
    time: ["35", "11", "25", "03"],
  },
  {
    image: "/imgs/Card9.png",
    line1: "PTZ камера Tenveo",
    line2: "TEVO-NV4K Ultra HD",
    oldPrice: "1 529 000",
    price: "350 000",
    discount: "3",
    time: ["27", "21", "32", "05"],
  },
];
const card =
  "group relative w-65 flex flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white text-center transition-all duration-300 before:absolute before:inset-x-0 before:top-0 before:z-10 before:h-[3px] before:origin-left before:scale-x-0 before:bg-gradient-to-r before:from-[#E8382D] before:to-orange-400 before:transition-transform before:duration-500 hover:border-[#E8382D]/40 hover:shadow-[0_22px_44px_-14px_rgba(232,56,45,0.45)] hover:before:scale-x-100 motion-safe:hover:-translate-y-1.5";

function ProductsPage() {
  const [minPrice, setMinPrice] = useState(300000);
  const [maxPrice, setMaxPrice] = useState(103300000);
  const [activeTag, setActiveTag] = useState("Игровые");

  const tags = [
    "Realme",
    "Игровые",
    "Оптимальные",
    "Смартфоны Samsung",
    "Смартфоны Apple",
    "Смартфоны",
    "Смартфоны Samsung",
    "Смартфоны",
    "Игровые",
  ];
  return (
    <div className="ProductsPage">
      <div className="container_1200 py-6">
        <div className="flex justify-between">
          <div className="flex items-center gap-46">
          <h1 className="text-[20px]">Смартфоны в Ташкенте</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-gray-500">
                <GrMoney size={30} color="gray"  />
                <h3>По цене</h3>
              </div>
              <div className="flex items-center gap-2  text-gray-500">
                <MdFilterList size={30} color="gray" />
                <h3>По популярности</h3>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MdGridView size={25} color="red"/>
            <MdViewList size={25} />
          </div>
        </div>

        <br />
        <div className="flex gap-10">
          <div className="left w-[360px] h-[1386px]  border border-gray-200 rounded-lg py-[30px] px-[30px]">
            {/* Цена */}
            <div className="flex items-center justify-between">
              <h1 className="text-[16px]">Цена (cум)</h1>
              <GoChevronUp size={30} />
            </div>

            <div className="flex mt-5">
              <div className="w-[150px] border border-gray-400">
                <h1 className="text-center text-gray-400 py-[13px]">
                  от {minPrice.toLocaleString()}
                </h1>
              </div>
              <div className="w-[150px] border border-gray-400">
                <h1 className="text-center text-gray-400 py-[13px]">
                  до {maxPrice.toLocaleString()}
                </h1>
              </div>
            </div>

            <div className="relative mt-6">
              <input
                type="range"
                min={0}
                max={103300000}
                value={minPrice}
                onChange={(e) =>
                  setMinPrice(Math.min(+e.target.value, maxPrice - 1))
                }
                className="absolute w-full accent-[#ed3a2d]"
              />
              <input
                type="range"
                min={0}
                max={103300000}
                value={maxPrice}
                onChange={(e) =>
                  setMaxPrice(Math.max(+e.target.value, minPrice + 1))
                }
                className="absolute w-full accent-[#ed3a2d]"
              />
            </div>

            {/* Наличие */}
            <div className="py-[30px]">
              <h1 className="text-[16px] mb-3">Наличие</h1>
              <label className="flex items-center gap-3 border border-[#ed3a2d] rounded-md px-4 py-3 cursor-pointer">
                <input type="checkbox" className="peer hidden" defaultChecked />
                <span className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center peer-checked:bg-[#ed3a2d] peer-checked:border-[#ed3a2d] text-white text-xs">
                  ✓
                </span>
                <h3 className="text-[15px]">Забрать сегодня</h3>
              </label>
            </div>

            {/* Бренд */}
            <div className="py-[10px] border-t border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-[16px]">Бренд</h1>
                <GoChevronUp size={30} />
              </div>
              <div className="flex flex-col gap-4">
                {brands.map((brand) => (
                  <label
                    key={brand.name}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input type="checkbox" className="peer hidden" />
                    <span className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center peer-checked:bg-[#ed3a2d] peer-checked:border-[#ed3a2d] text-white text-xs">
                      ✓
                    </span>
                    <h3 className="text-[15px]">
                      {brand.name}{" "}
                      <span className="text-gray-400">({brand.count})</span>
                    </h3>
                  </label>
                ))}
              </div>
            </div>

            {/* Емкость аккумулятора */}
            <div className="py-[30px] border-t border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-[16px]">Емкость аккумулятора</h1>
                <GoChevronUp size={30} />
              </div>
              <div className="flex flex-col gap-4">
                {batteryOptions.map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input type="checkbox" className="peer hidden" />
                    <span className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center peer-checked:bg-[#ed3a2d] peer-checked:border-[#ed3a2d] text-white text-xs">
                      ✓
                    </span>
                    <h3 className="text-[15px] text-gray-500">{option}</h3>
                  </label>
                ))}
              </div>
            </div>

            {/* Страна производитель */}
            <div className="py-[30px] border-t border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-[16px]">Страна производитель</h1>
                <GoChevronUp size={30} />
              </div>
              <div className="flex flex-col gap-4">
                {countries.map((country) => (
                  <label
                    key={country}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input type="checkbox" className="peer hidden" />
                    <span className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center peer-checked:bg-[#ed3a2d] peer-checked:border-[#ed3a2d] text-white text-xs">
                      ✓
                    </span>
                    <h3 className="text-[15px]">{country}</h3>
                  </label>
                ))}
              </div>
            </div>

            {/* Yopiq filtrlar */}
            <div className="flex flex-col gap-6 py-[10px] border-t border-gray-100">
              {collapsedFilters.map((filter, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between cursor-pointer"
                >
                  <h3 className="text-[16px]">{filter}</h3>
                  <GoChevronRight size={22} className="text-gray-400" />
                </div>
              ))}
            </div>

            {/* Показать */}
            <button className="w-full mt-8 h-12 bg-[#ed3a2d] text-white text-[15px] font-medium rounded-md cursor-pointer transition-opacity hover:opacity-90">
              Показать
            </button>
          </div>

          <div className="right">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3">
              {products.map((p) => (
                <article key={p.image} className={card}>
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
            <div className="py-8 m-auto">
              <div className="w-[217px] w-fit px-4 border m-auto border-red-600 rounded-lg">
                <h3 className="py-2">Показать еще</h3>
              </div>
              <div className="m-auto flex justify-center mt-5">
                <div className="flex items-center gap-3 m-auto">
                  <MdChevronLeft size={30} />
                  <div className="flex gap-5">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>...</span>
                    <span>28</span>
                    <span>27</span>
                  </div>

                  <FaAngleRight size={30} />
                </div>
              </div>
              <div className="mt-10">
                <h2 className="text-xl font-medium mb-4">
                  Популярные категории и модели
                </h2>

                <div className="flex flex-wrap gap-3">
                  {tags.map((tag, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTag(tag)}
                      className={`h-9 px-4 rounded-full text-sm border cursor-pointer transition-colors ${
                        activeTag === tag
                          ? "bg-gray-200 border-gray-200 text-black"
                          : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
              {/* ------------------ */}
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

                <div className="grid  grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 ">
                  {productss.slice(0, 5).map((p) => (
                    <article key={p.image} className={card}>
                      <div className="mx-3 mt-3 flex h-[132px]  items-center justify-center rounded-lg transition-colors duration-300 group-hover:bg-red-50">
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
              {/* ------------------------ */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
