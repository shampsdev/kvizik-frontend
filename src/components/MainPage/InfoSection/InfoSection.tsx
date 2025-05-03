import imgAi from "@/assets/imgAi.png";
import imgAi2 from "@/assets/imgAi2.png";
import {Link} from "react-router-dom";

const InfoSection = () => {
  return (
    <div className="flex-[2] flex flex-col justify-between">
      <div className="flex flex-grow flex-col gap-[18px]">
        <div className="gap-[9px] flex">
          <button className="bg-black text-white  rounded-[36px] border border-[#E1E1E1] px-[13px] py-[6px]  font-medium text-[14px] leading-[121%] tracking-[-0.03em]">
            PDF-format
          </button>
          <button className="bg-black text-white   rounded-[36px] border border-[#E1E1E1] px-[13px] py-[6px] font-medium text-[14px] leading-[121%] tracking-[-0.03em]">
            Web-site
          </button>
          <button className="bg-black text-white   rounded-[36px] border border-[#E1E1E1] px-[13px] py-[6px] font-medium text-[14px] leading-[121%] tracking-[-0.03em]">
            Ввести текст
          </button>
        </div>

        <div>
          <div className="text-[28px] leading-[121%] tracking-[-3%] font-medium text-white">
            Учитесь быстрее
          </div>
          <div>
            <div className="flex flex-row items-center gap-[23px]">
              <img src={imgAi} alt={"sorry,image was lost"}/>
              <img src={imgAi2} alt={"sorry,image was lost"}/>
              <div className="text-white font-medium text-[28px] leading-[121%] tracking-[-3%] text-center">
                ИИ-инструменты
              </div>
            </div>
          </div>
          <div className="text-white font-medium text-[28px] leading-[121%] tracking-[-3%] pt-[10px]">
            для освоения тем
          </div>
        </div>

        <div className="text-white  font-inter font-normal text-[20px] leading-[150%] tracking-[-2%] ">
          Тесты по текстам, заметки по темам для подготовки к экзаменам!
          Оставьте заявку на ранний доступ
        </div>
      </div>
      <Link to={"/upload"}>
        <button className="font-medium text-black py-[6px] px-[13px] w-full bg-white rounded-[18px]">
          Попробовать
        </button>
      </Link>

    </div>
  );
};

export default InfoSection;
