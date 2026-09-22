import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { VscChevronDownCompact } from "react-icons/vsc";

export function Topbar() {
  return (
    <>
      <div className="Topbar bg-[#ed3a2d] text-white h-[42px] pt-2">
        <div className="container_1200 flex items-center  justify-between">
          <div className="flex items-center gap-1.5">
            <CiLocationOn size={22} />
            <h3 className="text-[14px]">Ташкент</h3>
          </div>
          <nav className="flex items-center gap-7">
            <a className="cursor-pointer transition-opacity hover:opacity-80"> Наши магазины </a>
            <a className="cursor-pointer transition-opacity hover:opacity-80"> B2B продажи </a>
            <a className="cursor-pointer transition-opacity hover:opacity-80"> Покупка в рассрочку </a>
            <a className="cursor-pointer transition-opacity hover:opacity-80"> Способы оплаты </a>
            <a className="cursor-pointer transition-opacity hover:opacity-80"> Гарантия на товары </a>
          </nav>
          <div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <IoCallOutline />
                <h1>+998 95 123 55 88</h1>
              </div>
              <div className="flex items-center gap-2">
                <h3>Rus</h3>
                <h3>
                  <VscChevronDownCompact />
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
