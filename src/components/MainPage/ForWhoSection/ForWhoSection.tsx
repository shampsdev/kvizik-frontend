
import styles from "@/components/MainPage/MainPage.module.css";
import Teacher from "@/assets/Teacher.png";
import forTeacher from "@/assets/for-teacher.png";
import Student from "@/assets/Student.png";
import forStudents from "@/assets/for-students.png";
import Developer from "@/assets/Developer.png";
import forDevelopers from "@/assets/for-developers.png";

const ForWhoSection = () => {
    return (
        <div className={styles.reviewForWho}>
            <div className={styles.forWho}>
                <div>
                    <div  className={styles.divReviewButton} >
                        <div className={styles.reviewButton}>
                            <button>Обзор</button>
                        </div>
                    </div>

                    <div>
                        <h1>Для кого</h1>
                    </div>
                </div>
                <div>
                    <h3>Предназначено для различных категорий пользователей, помогая им экономить время и
                        повышать
                        эффективность </h3>
                </div>
            </div>
            <div className={styles.forWhoUse}>
                <div  className={styles.divForUse}>
                    <div className={styles.contentToCenter} >
                        <img src={Teacher} alt={"sorry,image was lost"}/>
                    </div>

                    <div className={styles.contentToCenter}>
                        <img src={forTeacher} alt={"sorry,image was lost"}/>
                    </div>
                    <h3 className={styles.h3ForUse}>Быстрая генерация тестов по тексту с
                        возможностью разослать ученикам тест</h3>
                </div>
                <div  className={styles.divForUse}>
                    <div className={styles.contentToCenter}>
                        <img src={Student} alt={"sorry,image was lost"}/>
                    </div>

                    <div className={styles.contentToCenter}>
                        <img src={forStudents} alt={"sorry,image was lost"}/>
                    </div>


                    <h3 className={styles.h3ForUse}>Самоподготовка по любым материалам
                        быстрее, используя ИИ-инструменты</h3>
                </div>
                <div className={styles.divForUse}>
                    <div className={styles.contentToCenter}>
                        <img src={Developer} alt={"sorry,image was lost"}/>
                    </div>
                    <div className={styles.contentToCenter}>
                        <img src={forDevelopers} alt={"sorry,image was lost"}/>
                    </div>


                    <h3 className={styles.h3ForUse}>Интеграция генератора тестов в их
                        сервисы
                        с помощью API
                    </h3>
                </div>
            </div>
            <hr className={styles.whiteLine}/>
        </div>
    );
};

export default ForWhoSection;