import { useState } from "react";
import { MdShoppingCart, MdFavorite } from "react-icons/md";
import { LuScale } from "react-icons/lu";
import { IoInformationCircleOutline } from "react-icons/io5";
import { HiOutlineTruck, HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { FiRefreshCw } from "react-icons/fi";
import { products } from "../../Data/Product.js";
import { useParams } from "react-router-dom";
import InstallmentModal from "../../Componets/InstallmentModal/InstallmentModal";

const specs = [
  { label: "Название", value: "MacBook Pro 13 MXK32ZP/A Space Gray" },
  { label: "Состояние", value: "Новый" },
  {
    label: "Технические параметры",
    value: "MacBook Pro 13 MXK32ZP/A Space Gray",
  },
];

const modelInfo = [
  { label: "Парт Номер", value: "NX.A5UAA.006." },
  { label: "Линейка", value: "Swift" },
];

function ProductDteil() {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const product = products.find((p) => p.id === Number(id));
  if (!product) {
    return <div className="container_1200">maxsulot topilmadi </div>;
  }
  return (
    <div className="container_1200 py-6">
      <div className="text-sm text-gray-400">
        Главная <span className="mx-1">›</span> Ноутбуки{" "}
        <span className="mx-1">›</span> Apple
      </div>

      <div className="flex gap-8 mt-6 items-start">
        <div className="w-[300px] shrink-0">
          <div className="w-full border border-gray-200 rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt=""
              className="w-full aspect-square object-contain"
            />
          </div>
        </div>

        <div className="flex-1">
          <h1 className="text-2xl font-semibold">
            {product.line1}-{product.line2}
          </h1>

          <div className="flex items-center gap-3 mt-4">
            <span className="text-2xl font-bold text-[#ed3a2d]">
              {product.price}сум
            </span>
            <IoInformationCircleOutline size={20} className="text-gray-400" />
            <div className="flex items-center gap-4 ml-4 text-gray-400">
              <MdShoppingCart
                size={20}
                className="cursor-pointer hover:text-[#ed3a2d]"
              />
              <MdFavorite
                size={20}
                className="cursor-pointer hover:text-[#ed3a2d]"
              />
              <LuScale
                size={20}
                className="cursor-pointer hover:text-[#ed3a2d]"
              />
            </div>
          </div>

          <p className="text-sm text-gray-400 mt-2">
            VIP скидки для VIP клиентов
          </p>

          <div className="flex items-center gap-4 mt-5">
            <button className="h-11 px-8 bg-[#ed3a2d] text-white text-sm font-medium rounded-md cursor-pointer hover:opacity-90 transition-opacity">
              Купить сейчас
            </button>
            <button onClick={()=>{
              return setIsModalOpen(true)
            }} className="h-11 px-8 bg-black text-white text-sm font-medium rounded-md cursor-pointer hover:opacity-90 transition-opacity">
              Купить в рассрочку сейчас
            </button>
          </div>

          <div className="bg-gray-50 rounded-md px-4 py-3 mt-6">
            <p className="text-xs text-gray-400 mb-1">Название для договора</p>
            <p className="text-sm">
              MacBook Pro 13 MXK32ZP/A Space Gray Full HD 1920x1080 IPS / Core™
              i7-1165G7 / 8GB RAM / 256GB SSD
            </p>
          </div>

          <h2 className="text-lg font-medium mt-8 mb-3">
            Технические параметры
          </h2>
          <div className="border border-gray-100 rounded-md overflow-hidden">
            {specs.map((spec, index) => (
              <div
                key={index}
                className="grid grid-cols-2 px-4 py-3 text-sm hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
              >
                <span className="text-gray-400">{spec.label}</span>
                <span>{spec.value}</span>
              </div>
            ))}
          </div>

          <h2 className="text-lg font-medium mt-8 mb-3">Информация о модели</h2>
          <div className="border border-gray-100 rounded-md overflow-hidden">
            {modelInfo.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-2 px-4 py-3 text-sm hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
              >
                <span className="text-gray-400">{item.label}</span>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[280px] shrink-0 flex flex-col gap-4">
          <div className="border border-gray-100 rounded-md p-4">
            <div className="flex items-start gap-3">
              <FiRefreshCw size={20} className="text-gray-400 mt-0.5" />
              <div>
                <h3 className="text-sm font-medium">
                  30 дней на обмен и возврат
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  Если купите товар сегодня, до 06 мая можете вернуть или
                  обменять.
                </p>
                <a href="#" className="text-xs text-[#ed3a2d] hover:underline">
                  Подробнее о программе.
                </a>
              </div>
            </div>
          </div>

          <div className="border border-gray-100 rounded-md p-4">
            <div className="flex items-start gap-3">
              <HiOutlineChatBubbleLeftRight
                size={20}
                className="text-gray-400 mt-0.5"
              />
              <div>
                <h3 className="text-sm font-medium mb-2">Есть вопросы?</h3>
                <p className="text-xs text-gray-500">
                  Телефон:{" "}
                  <a href="tel:+998999904527" className="text-[#ed3a2d]">
                    +998 99 990 45 27
                  </a>
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Телеграм:{" "}
                  <a href="#" className="text-[#ed3a2d]">
                    @mixel.uz
                  </a>
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Эл. почта:{" "}
                  <a href="#" className="text-[#ed3a2d]">
                    mixel@emali.uz
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-100 rounded-md p-4">
            <div className="flex items-start gap-3 mb-3">
              <HiOutlineTruck size={20} className="text-gray-400 mt-0.5" />
              <p className="text-sm">
                <span className="font-medium">Доставка: </span>
                <span className="text-gray-500">Бесплатно</span>
              </p>
            </div>
            <p className="text-sm font-medium mb-1">Способ оплаты:</p>
            <ul className="text-xs text-gray-500 flex flex-col gap-1 pl-4 list-disc">
              <li>Наличными (При Доставке)</li>
              <li>Payme / Click</li>
              <li>Перечислением с НДС</li>
            </ul>
          </div>
        </div>
      </div>
      
    {
      isModalOpen &&(
        <InstallmentModal onClose={()=>setIsModalOpen(false)}/>
      )
    }
    </div>
  );
}

export default ProductDteil;
