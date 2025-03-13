import React from 'react';
import styles from './MainPage.module.css';
import phoneImage from "../assets/Phone.png"

const MainPage = () => {
    return (
        <div>
            <div className={styles.mainDiv}>
                <div className={`${styles.infoSection}`}></div>
                <div className={`${styles.secondary}`}>
                    <div className={`${styles.tgSection} ${styles.section}`}></div>
                    <div className={`${styles.screenshotSection} ${styles.section}`}><img src={phoneImage}/></div>
                    <div className={`${styles.forWhomSection} ${styles.section}`}></div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;