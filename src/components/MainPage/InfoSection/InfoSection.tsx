import styles from "@/components/MainPage/MainPage.module.css";
import imgAi from "@/assets/imgAi.png";

const InfoSection = () => {
    return (
        <div className={`${styles.infoSection}`}>
            <div  className={"InfoButtons"}>
                <button className={styles.infoSectionButton}>PDF-format</button>
                <button className={styles.infoSectionButton}>Web-site</button>
                <button className={styles.infoSectionButton}>smtng</button>
            </div>
            <div className={"BoldText"}>
                <div className={"BoldH1"}>
                    Учитесь быстрее
                </div>
                <div className={"SmallText"}>
                    <div className={"SmallTextWithImg"}>
                        <img src={imgAi} alt={"sorry,image was lost"}/>
                        <div className={"SmallTextAi"}>
                            ИИ-инструменты
                        </div>
                    </div>

                </div>
                <div className={"SmallTextTopics"}>
                    для освоения тем
                </div>
            </div>
            <div className={"SmallTextPar"}>
                Тесты по текстам, заметки по темам для подготовки к экзаменам! Оставьте заявку на ранний
                доступ
            </div>
            <div className={"TryButton"} style={{
            }}>
                <button>Попробовать</button>
            </div>
        </div>
    );
};

export default InfoSection;