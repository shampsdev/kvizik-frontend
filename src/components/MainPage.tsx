import React from 'react';
import styles from './MainPage.module.css';

const MainPage = () => {
    return (
        <div>
            <div className={styles.mainDiv}>
                <div className={`${styles.infoSection}`}></div>
                <div className={`${styles.secondary}`}>
                    <div className={`${styles.tgSection} ${styles.section}`}></div>
                    <div className={`${styles.screenshotSection} ${styles.section}`}></div>
                    <div className={`${styles.forWhomSection} ${styles.section}`}></div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;