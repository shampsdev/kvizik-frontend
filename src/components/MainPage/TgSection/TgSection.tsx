import st from "./TgSection.module.css";
import badge from  "../../../assets/Badge.svg";
import avatarStack from "../../../assets/avatar-stack.png";

const TgSection = () => {
  return (
    <div className="px-[40px] py-[30px] rounded-[18px] bg-[#1E1E1E]">
      <div className="flex justify-around items-center">
        <div
            className={
              "text-[#E1E1E1] w-[50%] font-medium text-[16px] leading-[150%] tracking-[-0.03em] text-center"
            }
        >
          Подпишитесь на наш Telegram-канал, чтобы следить за новостями
          разработки
          <div>
            <button className={st.button + " mt-[10px]"}>
            <a href={"https://t.me/shampsdev"}>Подписаться</a>
            </button>
          </div>
        </div>
        <div className="w-[182px] h-[69px]">
          <img  className={"relative"} src={avatarStack}/>
          <img className={"top-[-80px] left-[150px] relative"} src={badge}/>
        </div>


      </div>
    </div>
  );
};

export default TgSection;
