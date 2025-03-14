import st from './TgSection.module.css'
// import avatar-stack from "@/assets/avatar-stack.png";
import avatarStack from "../../../assets/avatar-stack.png"
const TgSection = () => {
    return (
        <div className={st.container}>
            <div className={st.textContainer}>
                Подпишитесь на наш Telegram-канал, чтобы следить за новостями разработки
                <div>
                    <button className={st.button}>Подписаться</button>
                </div>
            </div>
            <div className={st.imageContainer}><img src={avatarStack}/></div>
        </div>
    );
};

export default TgSection;