import styles from "@/components/MainPage/MainPage.module.css";
import imgAi from "@/assets/imgAi.png";

const InfoSection = () => {
    return (
        <div className={`${styles.infoSection}`}>
            <div style={{
                width: "327px",
                height: "29px",
                gap: "9px"
            }}>
                <button className={styles.infoSectionButton}>PDF-format</button>
                <button className={styles.infoSectionButton}>Web-site</button>
                <button className={styles.infoSectionButton}>smtng</button>
            </div>
            <div style={{
                width: "513px",
                height: "183.60000610351562px",
                gap: "10.8px",
            }}>
                <div style={{
                    fontSize: "45px",
                    lineHeight: "121%",
                    letterSpacing: "-3%",
                    fontWeight: "500",
                    width: "513px",
                    height: "54px",
                    paddingTop: "18px"
                }}>Учитесь быстрее
                </div>
                <div style={{
                    width: "513px",
                    height: "54px",
                    gap: "23.76px",

                }}>
                    <div style={{
                        width: "111px",
                        height: "53px",
                        gap: "5px",

                    }}>
                        <img src={imgAi} alt={"sorry,image was lost"}/>
                        <div style={{
                            width: "371px",
                            height: "54px",
                            fontWeight: "500",
                            fontSize: "45px",
                            lineHeight: "121%",
                            letterSpacing: "-3%",
                            textAlign: "center",
                            paddingTop: "11px"
                        }}>
                            ИИ-инструменты
                        </div>
                    </div>

                </div>
                <div style={{
                    width: "513px",
                    height: "54px",
                    fontWeight: "500",
                    fontSize: "45px",
                    lineHeight: "121%",
                    letterSpacing: "-3%",
                    paddingTop: "11px"


                }}> для освоения тем
                </div>
            </div>
            <div style={{
                width: "513px",
                height: "60px",
                fontFamily: "Inter",
                fontWeight: "400px",
                fontSize: "20px",
                lineHeight: "150%",
                letterSpacing: "-2%",
                paddingTop: "18px"
            }}>
                Тесты по текстам, заметки по темам для подготовки к экзаменам! Оставьте заявку на ранний
                доступ
            </div>
            <div style={{
                paddingTop: "41px",
                display: "flex",
                justifyContent: "center",
            }}>
                <button>Попробовать</button>
            </div>
        </div>
    );
};

export default InfoSection;