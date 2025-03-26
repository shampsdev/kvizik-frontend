import styles from './MainPage.module.css';
import TgSection from "@/components/MainPage/TgSection/TgSection.tsx";
import ScreenshotSection from "@/components/MainPage/ScreenshotSection/ScreenshotSection.tsx";
import InfoSection from "@/components/MainPage/InfoSection/InfoSection.tsx";
import ForWhomSection from "@/components/MainPage/ForWhomSection/ForWhomSection.tsx";
import ReviewSection from "@/components/MainPage/ReviewSection/ReviewSection.tsx";
import ForWhoSection from "@/components/MainPage/ForWhoSection/ForWhoSection.tsx";
import FooterSection from "@/components/MainPage/FooterSection/FooterSection.tsx";

const MainPage = () => {
    return (
        <div style={{
            width: "1440px"
        }}>
            <div className={styles.mainDiv}>
                <InfoSection/>
                <div className={`${styles.secondary}`}>
                    <TgSection/>
                    <ScreenshotSection/>
                    <ForWhomSection/>
                </div>
            </div>
            <div className={styles.review}>
                <ReviewSection/>
            </div>
               <ForWhoSection/>
                <FooterSection/>
            </div>

            );
            };

            export default MainPage;