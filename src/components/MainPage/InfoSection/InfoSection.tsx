import styles from "@/components/MainPage/MainPage.module.css";
import imgAi from "@/assets/imgAi.png";

const InfoSection = () => {
    return (
        <div className={`${styles.infoSection}`}>
            <div  className={"w-[327px] h-[29px] gap-[9px] flex"}>
                <button className={"bg-black text-white w-[109px] h-[29px]  rounded-[36px] border border-[#E1E1E1] pt-[6px] pr-[13px] pb-[6px] pl-[13px] font-medium text-[14px] leading-[121%] tracking-[-0.03em]"}>PDF-format</button>
                <button className={"bg-black text-white w-[109px] h-[29px]  rounded-[36px] border border-[#E1E1E1] pt-[6px] pr-[13px] pb-[6px] pl-[13px] font-medium text-[14px] leading-[121%] tracking-[-0.03em]"}>Web-site</button>
                <button className={"bg-black text-white w-[109px] h-[29px]  rounded-[36px] border border-[#E1E1E1] pt-[6px] pr-[13px] pb-[6px] pl-[13px] font-medium text-[14px] leading-[121%] tracking-[-0.03em]"}>smtng</button>
            </div>
            <div className={" w-[513px] h-[180px] gap-[10px]"}>{/*maybe should use flex*/}
                <div className={"w-[513px] h-[54px] pt-[18px] text-[28px] leading-[121%] tracking-[-3%] font-medium text-white"}>
                    Учитесь быстрее
                </div>
                <div className={"w-[513] h-[160] gap-[23]"}>
                    <div className={"w-[111] h-[53] gap-[5] flex"}>
                        <img src={imgAi} alt={"sorry,image was lost"}/>
                        <div className={"w-[250px] h-[54px]  text-white font-medium text-[28px] leading-[121%] tracking-[-3%] text-center pt-[11px]"}>
                            ИИ-инструменты
                        </div>
                    </div>

                </div>
                <div className={"w-[513px] text-white h-[54px] font-medium text-[28px] leading-[121%] tracking-[-3%] pt-[10px]"}>
                    для освоения тем
                </div>
            </div>
            <div className={"w-[513px] text-white h-[100px] font-inter font-normal text-[20px] leading-[150%] tracking-[-2%] pt-[10px]"}>
                Тесты по текстам, заметки по темам для подготовки к экзаменам! Оставьте заявку на ранний
                доступ
            </div>
            <div className={"pt-[41px] flex justify-center "} >
                <button className="text-black bg-white rounded-[18px] w-[495px] h-[45px]">Попробовать</button>
            </div>
        </div>
    );
};

export default InfoSection;