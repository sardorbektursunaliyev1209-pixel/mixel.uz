import { CategoriesMenu } from "./CategoriesMenu";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

export function NavMenu() {
  const [isOpen,setIsOpen]=useState(false )
  return (
    <>
      <div className="NavMenu relative">
        <div className="container_1200 flex items-center justify-between gap-5">
          <button onClick={() => setIsOpen(!isOpen)} className="flex items-center rounded-[4px] gap-2 bg-red-500  py-2 px-12">
            <RxHamburgerMenu size={18} />
            <h3>Категории</h3>
          </button>
           <nav className="flex items-center gap-7">
            <a className="cursor-pointer transition-opacity hover:opacity-80"> Наши магазины </a>
            <a className="cursor-pointer transition-opacity hover:opacity-80"> Моноблоки </a>
            <a className="cursor-pointer transition-opacity hover:opacity-80">Телефоны, планшеты </a>
            <a className="cursor-pointer transition-opacity hover:opacity-80"> Ноутбуки </a>
            <a className="cursor-pointer transition-opacity hover:opacity-80">Комплектующие</a>
            <a className="cursor-pointer transition-opacity hover:opacity-80">Сетевое оборудование</a>
            <a className="cursor-pointer transition-opacity hover:opacity-80">Оргтехника</a>
          </nav>
        </div>
        {isOpen && <CategoriesMenu />}
      </div>
    </>
  );
}