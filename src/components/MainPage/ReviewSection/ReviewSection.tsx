
import styles from "@/components/MainPage/MainPage.module.css";
import MacScreen from "@/assets/MacScreen.png";

const ReviewSection = () => {
    return (
        <div>
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

            <div className={styles.MacScreen}>
                <img src={MacScreen} alt={"sorry,image was lost"}/>
            </div>
        </div>


    );
};

export default ReviewSection;