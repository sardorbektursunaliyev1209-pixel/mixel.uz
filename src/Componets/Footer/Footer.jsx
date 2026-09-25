import {
  FaTelegramPlane,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";
import Logo from "../Logo/Logo";
export function Footer() {
  return (
    <>
      <div className="Footer bg-[#222222] text-white py-10">
        <div className="container_1200 flex justify-between items-start">
          <div className="w-[377px] flex flex-col">
            <div className="flex items-center">
              <Logo  />
            </div>
            <p className="text-xs mt-6">График работы колл-центра</p>
            <p className="text-xs mt-1">Понедельник - Суббота: 9:00–18:00</p>
            <p className="text-xs mt-8">Колл-центр:</p>
            <h3 className="text-xs mt-1 font-normal">+ 998 (71) 205-93-93 </h3>

            <div className="flex items-center gap-2 mt-8">
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#ed3a2d] text-white cursor-pointer">
                <FaTelegramPlane size={12} />
              </div>
              <div className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-500 text-gray-300 cursor-pointer hover:text-white hover:border-white transition-colors">
                <FaInstagram size={12} />
              </div>
              <div className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-500 text-gray-300 cursor-pointer hover:text-white hover:border-white transition-colors">
                <FaFacebookF size={11} />
              </div>
              <div className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-500 text-gray-300 cursor-pointer hover:text-white hover:border-white transition-colors">
                <FaYoutube size={12} />
              </div>
            </div>
          </div>
          <div className="flex gap-20">
            <div className="w-[190px] flex flex-col gap-3">
              <h3 className="text-base font-medium text-white mb-2">
                Категории
              </h3>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Ноутбуки
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Игровые кресла
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Телефоны
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Моноблоки
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Модули памяти
              </a>
            </div>

            <div className="w-[190px] flex flex-col gap-3">
              <h3 className="text-base font-medium text-white mb-2">Общее</h3>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Новости
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                О нас
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Наши магазины
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Политика конфиденциальности
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Правила программы лояльности
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Контакты
              </a>
            </div>

            <div className="w-[190px] flex flex-col gap-3">
              <h3 className="text-base font-medium text-white mb-2">
                Покупателям
              </h3>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Покупка в рассрочку
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Доставка и оплата
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Правила покупок с cashback
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Возврат / Обмен
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Правила пользования купонами
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
