import styles from "@/components/MainPage/MainPage.module.css";
import forWhoImage from "@/assets/ForWhoImage.png";

const ForWhomSection = () => {
    return (
        <div className={`${styles.forWhomSection} ${styles.section}`}>
            <div className={styles.forWhoButton}>
                <button>For who?</button>
            </div>
            <div className={styles.forWhoImage}>
                <img src={forWhoImage} alt={"sorry,image was lost"}/>
            </div>
        </div>
    );
};

export default ForWhomSection;