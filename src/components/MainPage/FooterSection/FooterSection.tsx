import styles from "@/components/MainPage/MainPage.module.css";

const FooterSection = () => {
    return (
        <div className={styles.footer}>

            <div className={"w-full flex flex-col justify-center top-143 left-548 "}>
                <div className={"top-57px,left-548px"}>
                    <h3 className={"font-inter font-semibold text-[16px] leading-[121%] tracking-normal text-center text-white"}>
                        Подпишитесь на наш Telegram-канал, чтобы следить за новостями разработки
                    </h3>
                </div>
                <div className={"pt-[17px] flex justify-center"}>
                    <button className={"w-[126px] h-[31px] rounded-[36px] border border-[1px] top-[112px] left-[657px] bg-white "}>Подписаться
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FooterSection;