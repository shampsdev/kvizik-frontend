import styles from "@/components/MainPage/MainPage.module.css";
import imgAi from "@/assets/imgAi.png";

const InfoSection = () => {
    return (
        <div className={`${styles.infoSection}`}>
            <div  className={"w-[327px] h-[29px] gap-[9px]"}>
                <button className={"bg-white text-black w-[109px] h-[29px] gap-[9px] rounded-[36px] border border-black pt-[6px] pr-[13px] pb-[6px] pl-[13px] font-medium text-[14px] leading-[121%] tracking-[-0.03em]"}>PDF-format</button>
                <button className={"bg-white text-black w-[109px] h-[29px] gap-[9px] rounded-[36px] border border-black pt-[6px] pr-[13px] pb-[6px] pl-[13px] font-medium text-[14px] leading-[121%] tracking-[-0.03em]"}>Web-site</button>
                <button className={"bg-white text-black w-[109px] h-[29px] gap-[9px] rounded-[36px] border border-black pt-[6px] pr-[13px] pb-[6px] pl-[13px] font-medium text-[14px] leading-[121%] tracking-[-0.03em]"}>smtng</button>
            </div>
            <div className={" w-[513px] h-[183px] gap-[10px]"}>{/*maybe should use flex*/}
                <div className={"w-[513px] h-[54px] pt-[18px] text-[45px] leading-[121%] tracking-[-3%] font-medium"}>
                    Учитесь быстрее
                </div>
                <div className={"w-[513] h-[54] gap-[23]"}>
                    <div className={"w-[111] h-[53] gap-[5]"}>
                        <img src={imgAi} alt={"sorry,image was lost"}/>
                        <div className={"w-[371px] h-[54px] font-medium text-[45px] leading-[121%] tracking-[-3%] text-center pt-[11px]"}>
                            ИИ-инструменты
                        </div>
                    </div>

                </div>
                <div className={"w-[513px] h-[54px] font-medium text-[45px] leading-[121%] tracking-[-3%] pt-[11px]"}>
                    для освоения тем
                </div>
            </div>
            <div className={"w-[513px] h-[60px] font-inter font-normal text-[20px] leading-[150%] tracking-[-2%] pt-[18px]"}>
                Тесты по текстам, заметки по темам для подготовки к экзаменам! Оставьте заявку на ранний
                доступ
            </div>
            <div className={"pt-[41px] flex justify-center"} >
                <button>Попробовать</button>
            </div>
        </div>
    );
};

export default InfoSection;