import { VscChevronDownCompact } from "react-icons/vsc";
import {
  IoCartOutline,
  IoHeartOutline,
  IoMicOutline,
  IoPersonOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { LuScale } from "react-icons/lu";
import Logo from "../../Componets/Logo/Logo";
// import LogoRasm from "../../../public/Navbar-img/logoRasm.png"
export function MainHeader() {
  return (
    <>
      <div className="MainHerader py-4">
        <div className="container_1200 flex items-center gap-5 justify-between">
          <div className="flex items-center ">
{/* <img src={LogoRasm} alt="" /> */}
            <Logo  />
          </div>
          <div className="flex items-center w-full max-w-[600px] h-[42px] bg-white border border-[#ed3a2d] rounded-md overflow-hidden">
            <div className="flex items-center gap-1 px-4 h-[24px] border-r border-gray-300 text-sm text-gray-800 whitespace-nowrap cursor-pointer">
              <span>Все категории</span>
              <VscChevronDownCompact className="text-gray-400" />
            </div>

            <input
              type="text"
              placeholder="Телефоны и бытовая"
              className="flex-1 h-full px-4 text-sm text-gray-800 placeholder:text-gray-400 outline-none"
            />

            <IoMicOutline
              size={20}
              className="mr-3 text-gray-400 cursor-pointer"
            />

            <button
              type="button"
              className="flex items-center justify-center gap-2 h-full px-8 bg-[#ed3a2d] text-white text-sm font-medium cursor-pointer transition-opacity hover:opacity-90"
            >
              <IoSearchOutline size={18} />
              <span>Поиск</span>
            </button>
          </div>
          <div className="flex items-center gap-8 text-sm text-gray-900">
            <div className="flex flex-col items-center gap-1 cursor-pointer transition-colors hover:text-[#ed3a2d]">
              <IoPersonOutline size={24} />
              <span>Войти</span>
            </div>
            <div className="flex flex-col items-center gap-1 cursor-pointer transition-colors hover:text-[#ed3a2d]">
              <LuScale size={24} />
              <span>Сравнение</span>
            </div>
            <div className="flex flex-col items-center gap-1 cursor-pointer transition-colors hover:text-[#ed3a2d]">
              <IoHeartOutline size={24} />
              <span>Избранное</span>
            </div>
            <div className="flex flex-col items-center gap-1 cursor-pointer transition-colors hover:text-[#ed3a2d]">
              <IoCartOutline size={24} />
              <span>Корзина</span>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
