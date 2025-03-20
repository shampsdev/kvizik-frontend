import styles from './MainPage.module.css';
import phoneImage from "../../assets/Phone.png"
import forWhoImage from "../../assets/ForWhoImage.png"
import MacScreen from "../../assets/MacScreen.png"
import Developer from "../../assets/Developer.png"
import Teacher from "../../assets/Teacher.png"
import Student from "../../assets/Student.png"
import forTeacher from "../../assets/for-teacher.png"
import forStudents from "../../assets/for-students.png"
import forDevelopers from "../../assets/for-developers.png"
import imgAi from "../../assets/imgAi.png"
import TgSection from "@/components/MainPage/TgSection/TgSection.tsx";

const MainPage = () => {
    return (
        <div style={{
            width: "1440px"
        }}>
            <div className={styles.mainDiv}>
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
                <div className={`${styles.secondary}`}>
                    <div className={`${styles.tgSection} ${styles.section}`}>
                        <TgSection/>
                    </div>
                    <div className={`${styles.screenshotSection} ${styles.section}`}>
                        <img src={phoneImage} alt={"sorry,image was lost"}/>
                    </div>
                    <div className={`${styles.forWhomSection} ${styles.section}`}>
                        <div className={styles.forWhoButton}>
                            <button>For who?</button>
                        </div>
                        <div className={styles.forWhoImage}>
                            <img src={forWhoImage} alt={"sorry,image was lost"}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.review}>
                <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                    <div className={styles.reviewButton}>
                        <button>Обзор</button>
                    </div>
                </div>

                <div className={styles.reviewH1}>
                    <h1>Как работает</h1>
                </div>
                <div className={styles.reviewH3}>
                    <h3>Тесты по текстам, заметки по темам для подготовки к экзаменам! Оставьте заявку на ранний
                        доступ</h3>
                </div>
            </div>
            <div className={styles.MacScreen}>
                <img src={MacScreen} alt={"sorry,image was lost"}/>
            </div>
            <div className={styles.reviewForWho}>
                <div className={styles.forWho}>
                    <div>
                        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                            <div className={styles.reviewButton}>
                                <button>Обзор</button>
                            </div>
                        </div>

                        <div>
                            <h1>Для кого</h1>
                        </div>
                    </div>
                    <div>
                        <h3>Предназначено для различных категорий пользователей, помогая им экономить время и повышать
                            эффективность </h3>
                    </div>
                </div>
                <div className={styles.forWhoUse}>
                    <div style={{
                        width: "352px"
                    }}>
                        <div style={{
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <img src={Teacher} alt={"sorry,image was lost"}/>
                        </div>

                        <div style={{
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <img src={forTeacher} alt={"sorry,image was lost"}/>
                        </div>
                        <h3 style={{color: "white", justifyContent: "center"}}>Быстрая генерация тестов по тексту с
                            возможностью разослать ученикам тест</h3>
                    </div>
                    <div style={{
                        width: "352px"
                    }}>
                        <div style={{
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <img src={Student} alt={"sorry,image was lost"}/>
                        </div>

                        <div style={{
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <img src={forStudents} alt={"sorry,image was lost"}/>
                        </div>


                        <h3 style={{color: "white", justifyContent: "center"}}>Самоподготовка по любым материалам
                            быстрее, используя ИИ-инструменты</h3>
                    </div>
                    <div style={{
                        width: "283px",
                    }}>
                        <div style={{
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <img src={Developer} alt={"sorry,image was lost"}/>
                        </div>
                        <div style={{
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <img src={forDevelopers} alt={"sorry,image was lost"}/>
                        </div>


                        <h3 style={{color: "white", justifyContent: "center"}}>Интеграция генератора тестов в их сервисы
                            с помощью API
                        </h3>
                    </div>
                </div>
                <hr style={{width: "100%", color: "white", height: "5px"}}/>
            </div>
            <div className={styles.footer}>

                <div style={{
                    width: "344px",
                    height: "86px",
                    top: "143px",
                    left: "548px",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",

                }}>
                    <div style={{
                        width: "344px",
                        height: "38px",
                        top: "57px",
                        left: "548px",


                    }}>
                        <h3 style={{
                            fontFamily: "Inter",
                            fontWeight: "600",
                            fontSize: "16px",
                            lineHeight: "121%",
                            letterSpacing: "0%",
                            textAlign: "center",
                            color: "#FFFFFF",


                        }}>Подпишитесь на наш Telegram-канал, чтобы следить за новостями разработки</h3>
                    </div>
                    <div style={{
                        paddingTop: "17px",
                        display: "flex",
                        justifyContent: "center"
                    }}>
                        <button style={{
                            width: "126px",
                            height: "31px",
                            borderRadius: "36px",
                            borderWidth: "1px",
                            top: "112px",
                            left: "657px",
                            backgroundColor: "white",
                        }}>Подписаться
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MainPage;