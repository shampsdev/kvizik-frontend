import styles from './MainPage.module.css';
import phoneImage from "../../assets/Phone.png"
import forWhoImage from "../../assets/ForWhoImage.png"
import MacScreen from "../../assets/MacScreen.png"
import TgSection from "@/components/MainPage/TgSection/TgSection.tsx";

const MainPage = () => {
    return (
        <div>
            <div className={styles.mainDiv}>
                <div className={`${styles.infoSection}`}></div>
                <div className={`${styles.secondary}`}>
                    <div className={`${styles.tgSection} ${styles.section}`}>
                        <TgSection/>
                    </div>
                    <div className={`${styles.screenshotSection} ${styles.section}`}>
                        <img src={phoneImage}/>
                    </div>
                    <div className={`${styles.forWhomSection} ${styles.section}`}>
                        <div className={styles.forWhoButton}>
                            <button>For who?</button>
                        </div>
                        <div className={styles.forWhoImage}>
                            <img src={forWhoImage}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.review}>
                <div className={styles.reviewButton}>
                    <button>обзор</button>
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
                <img src={MacScreen} alt={"sorry"}/>
            </div>
        </div>
    );
};

export default MainPage;