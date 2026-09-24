import { useState } from "react";
import { IoMdPhonePortrait, IoMdPrint, IoMdVideocam } from "react-icons/io";
import {
  MdChevronRight,
  MdComputer,
  MdDevices,
  MdHeadphones,
  MdHome,
  MdLaptopChromebook,
  MdPhoneIphone,
  MdRouter,
} from "react-icons/md";
import { Link } from "react-router-dom";
const categories = [
  { id: "phones", title: "Телефоны", icon: MdPhoneIphone, banner:  "/CategoriesMenu-img/phone.jpg" },
  { id: "laptops", title: "Ноутбуки", icon: MdLaptopChromebook , banner : "/CategoriesMenu-img/laptops.jpg"  },
  { id: "network", title: "Сетевое оборудование", icon: MdRouter,banner : "/CategoriesMenu-img/wifirouter.webp"  },
  { id: "cctv", title: "Видеонаблюдение", icon: IoMdVideocam,banner : "/CategoriesMenu-img/cctv.jpg" },
  { id: "computers", title: "Компьютеры", icon: MdComputer,banner : "/CategoriesMenu-img/computers.avif" },
  { id: "office", title: "Техника для офиса", icon: IoMdPrint,banner : "/CategoriesMenu-img/officePrinter.webp" },
  { id: "accessories", title: "Аксессуары", icon: MdHeadphones,banner : "/CategoriesMenu-img/headphones.jpg" },
  { id: "home", title: "Товары для дома", icon: MdHome,banner : "/CategoriesMenu-img/home appliances.jpg" },
  { id: "peripherals", title: "Периферийные устройства", icon: MdDevices,banner : "/CategoriesMenu-img/keyboard mouse.jpg" },
  { id: "ip-phones", title: "IP Телефония", icon: IoMdPhonePortrait,banner : "/CategoriesMenu-img/ip phone office.jpeg" },
];
const  subcategoriesMap = {
  phones: ["Смартфоны", "Планшеты", "Аксессуары для телефонов"],
  laptops: ["Игровые ноутбуки", "Ультрабуки", "Хромбуки"],
  network: [
    "Коммутаторы",
    "Точки доступа Wi-Fi",
    "Медиаконверторы",
    "ADSL роутеры",
  ],
  cctv: ["IP камеры", "Видеорегистраторы"],
  computers: ["Моноблоки", "Системные блоки"],
  office: ["Принтеры", "Сканеры"],
  accessories: ["Наушники", "Чехлы"],
  home: ["Бытовая техника"],
  peripherals: ["Клавиатуры", "Мышки"],
  "ip-phones": ["IP телефоны", "Шлюзы"],
};

export function CategoriesMenu({onLinkClick}) {
  const [activeId, setActiveId] = useState("phones");
  const activeCategory = categories.find((item) => item.id === activeId);
  return (
    <div className="absolute left-0 right-0 top-full bg-white z-50 border-t border-gray-200 shadow-md">
      <div className="relative container_1200 py-6 flex">
        <div className="w-[240px]">
          {categories.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveId(item.id)}
                className={`grid grid-cols-[26px_1fr_25px] items-center gap-3 ${
                  activeId === item.id ? "bg-gray-100" : ""
                }`}
              >
                <Icon color="gray" size={26} />
                <h3 className="text-[16px]">{item.title}</h3>
                <MdChevronRight size={25} />
              </div>
            );
          })}
        </div>
        <div className="px-6 w-[280px] border-l border-gray-100">
          <h3 className="text-xl font-medium mb-4">{activeCategory.title}</h3>
          {subcategoriesMap[activeId].map((sub) => (
            <Link to={`/category/${sub}`}
              key={sub}
              className="block py-2 text-sm hover:bg-gray-100 rounded cursor-pointer"
           onClick={onLinkClick}
           >
              {sub}
            </Link>
          ))}
        </div>
        <div className="flex-1   ">
            <img src={activeCategory.banner} alt="" className="w-full h-[320px] rounded-lg ml-12" />
        </div>
      </div>
    </div>
  );
}
