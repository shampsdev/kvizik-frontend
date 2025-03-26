
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
                    <h3>Предназначено для различных категорий пользователей, помогая им экономить время и
                        повышать
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


                    <h3 style={{color: "white", justifyContent: "center"}}>Интеграция генератора тестов в их
                        сервисы
                        с помощью API
                    </h3>
                </div>
            </div>
            <hr style={{width: "100%", color: "white", height: "5px"}}/>
        </div>
    );
};

export default ForWhoSection;