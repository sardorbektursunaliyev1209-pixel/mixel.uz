import rasm1 from "../../../public/PopularCategories/rasm1.png";
import rasm2 from "../../../public/PopularCategories/rasm2.png";
import rasm3 from "../../../public/PopularCategories/rasm3.png";
import rasm4 from "../../../public/PopularCategories/rasm4.png";
import left from "../../../public/PopularCategories/left.png";
import right from "../../../public/PopularCategories/right.png";

function PopularCategories() {
  return (
    <>
      <div className="PopularCategories">
        <div className="container_1200">
          <div>
            <h1 className="text-[20px]">Популярные категории</h1>
          </div>
          <div className="relative  mt-[28px] flex items-center justify-center gap-4">
            <div className="flex gap-5">
              <h1 className="text-[20px]">Компьютеры </h1>
              <img src={rasm1} alt="" className="w-35 h-35" />
            </div>
            <div className="flex gap-5">
              <h1 className="text-[20px]">
                Телефоны,
                <br />
                планшеты{" "}
              </h1>
              <img src={rasm2} alt="" className="w-35 h-35" />
            </div>
            <div className="flex gap-5">
              <h1 className="text-[20px]">Ноутбуки </h1>
              <img src={rasm3} alt="" className="w-35 h-35" />
            </div>
            <div className="flex gap-5">
              <h1 className="text-[20px]">Товары для офиса </h1>
              <img src={rasm4} alt="" className="w-35 h-35" />
            </div>
            <img
              src={left}
              alt=""
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 cursor-pointer"
            />
            <img
              src={right}
              alt=""
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PopularCategories;
