import st from './TgSection.module.css'

import avatarStack from "../../../assets/avatar-stack.png"

const TgSection = () => {
    return (
        <div className={"order-1 col-start-1 col-end-3 row-start-1 row-end-2  rounded-[18px] bg-[#1E1E1E]"}>
            <div className={"p-[30px] px-[69px] py-[30px] pl-[41px] flex justify-around"}>
                <div
                    className={"text-[#E1E1E1] w-[50%] font-medium text-[16px] leading-[150%] tracking-[-0.03em] text-center"}>
                    Подпишитесь на наш Telegram-канал, чтобы следить за новостями разработки
                    <div>
                        <button className={st.button}>Подписаться</button>{/*Here some problems wwith inter.to tailwind!!!*/}
                    </div>
                </div>
                <div className={"w-[182px] h-[69px]"}>
                    <img src={avatarStack}/>
                </div>
            </div>
        </div>
    );
};

export default TgSection;