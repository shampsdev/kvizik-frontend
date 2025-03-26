import styles from "@/components/MainPage/MainPage.module.css";
import phoneImage from "@/assets/Phone.png";

const ScreenshotSection = () => {
    return (
            <div className={`${styles.screenshotSection} ${styles.section}`}>
                <img src={phoneImage} alt={"sorry,image was lost"}/>
            </div>
    );
};

export default ScreenshotSection;