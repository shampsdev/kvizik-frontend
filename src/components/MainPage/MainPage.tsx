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
import TgSection from "@/components/MainPage/TgSection/TgSection.tsx";

const MainPage = () => {
    return (
        <div>
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
                    <div></div>
                    <div></div>
                    <div>
                        <button>Попробовать</button>
                    </div>
                </div>
                <div className={`${styles.secondary}`}>
                    <div className={`${styles.tgSection} ${styles.section}`}>
                        <TgSection/>
                    </div>
                    <div className={`${styles.screenshotSection} ${styles.section}`}>
                        <img src={phoneImage}  alt={"sorry,image was lost"}/>
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
                <div className={styles.reviewButton}>
                    <button>Обзор</button>
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
                        <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
                            <div className={styles.reviewButton}>
                                <button>Обзор</button>
                            </div>
                        </div>

                        <div>
                            <h1>Для кого</h1>
                        </div>
                    </div>
                    <div>
                        <h3>Предназначено для различных категорий пользователей, помогая им экономить время и повышать эффективность </h3>
                    </div>
                </div>
                <div className={styles.forWhoUse}>
                    <div>
                        <img src={Teacher}/>
                        <img src={forTeacher}/>
                        <h3></h3>
                    </div>
                    <div>
                        <img src={Student}/>
                        <img src={forStudents}/>
                        <h3></h3>
                    </div>
                    <div>
                        <img src={Developer}/>
                        <img src={forDevelopers}/>
                        <h3></h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;