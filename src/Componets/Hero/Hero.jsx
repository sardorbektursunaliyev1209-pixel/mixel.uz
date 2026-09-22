import { IoWallet } from "react-icons/io5";
import HeroImg from "../../../public/Hero-Img/HeroImg.png";
export function Hero() {
  return (
    <>
      <div className="Her">
        <div className="container_1200 flex items-center justify-between py-19">
          <div className="Left w-[550px]">
            <img src={HeroImg} alt="" />
          </div>
          <div className="Right w-[550px]">
            <div>
              <h1 className="text-4xl font-bold text-red-500 tracking-tight">
                CASHBACK
              </h1>
              <h2 className="text-3xl font-light text-black tracking-wide">
                ОТ КАЖДОЙ ПОКУПКИ
              </h2>
            </div>
            <div className="flex items-center gap-10">
              <div>
                <p className="mt-15 text-3xl font-normal leading-tight text-black">
                  Теперь покупки стали <br />
                  ещё более <strong className="font-bold">выгодными</strong>
                </p>
              </div>
              <div className="flex items-center gap-3 mt-15">
                <IoWallet color="red" size={55} className="" />
                <h1 className="text-2xl text-red-600">
                  Cash <br /> Back
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
