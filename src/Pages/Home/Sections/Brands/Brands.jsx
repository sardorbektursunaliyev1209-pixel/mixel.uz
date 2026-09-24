import { LuMoveLeft, LuMoveRight } from "react-icons/lu";
import canon from "../../../../../public/Brands-img/canon.png";
import mi from "../../../../../public/Brands-img/mi.png";
import olg from "../../../../../public/Brands-img/olg.png";
import samsung from "../../../../../public/Brands-img/samsung.png";
import artel from "../../../../../public/Brands-img/artel.png";

export function Brands() {
  return (
    <>
      <div className="Brands py-12">
        <div className="container_1200">
          <div className="flex items-center justify-between">
            <h2 className="text-[24px]">Бренды</h2>
            <div className="flex items-center gap-3 text-[#909090] ">
              <a href="">
                <LuMoveLeft size={30} />
              </a>
              <a href="">
                <LuMoveRight size={30} />
              </a>
            </div>
          </div>
          <div className="flex justify-between items-center py-12">
            <div className="flex items-center justify-center shrink-0 w-[223px] h-[110px] bg-white border border-gray-200 rounded cursor-pointer transition-shadow hover:shadow-md">
              <img src={canon} alt="" className="max-h-[40px] object-contain" />
            </div>
            <div className="flex items-center justify-center shrink-0 w-[223px] h-[110px] bg-white border border-gray-200 rounded cursor-pointer transition-shadow hover:shadow-md">
              <img src={mi} alt="" className="max-h-[40px] object-contain" />
            </div>
            <div className="flex items-center justify-center shrink-0 w-[223px] h-[110px] bg-white border border-gray-200 rounded cursor-pointer transition-shadow hover:shadow-md">
              <img src={olg} alt="" className="max-h-[40px] object-contain" />
            </div>
            <div className="flex items-center justify-center shrink-0 w-[223px] h-[110px] bg-white border border-gray-200 rounded cursor-pointer transition-shadow hover:shadow-md">
              <img
                src={samsung}
                alt=""
                className="max-h-[30px] object-contain"
              />
            </div>
            <div className="flex items-center justify-center shrink-0 w-[223px] h-[110px] bg-white border border-gray-200 rounded cursor-pointer transition-shadow hover:shadow-md">
              <img
                src={artel}
                alt=""
                className="max-h-[100px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

