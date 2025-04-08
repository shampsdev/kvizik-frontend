
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
            <div className={"flex flex-col items-center text-white pb-24"}>
                <div>
                    <div  className={"w-full flex justify-center"} >
                        <div className={"flex justify-center w-[68px] h-[29px] gap-[9px] rounded-[36px] border border-solid border-current pt-[6px] pr-[13px] pb-[6px] pl-[13px] text-white"}>
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
            <div className={"flex justify-around pb-[136px]"}>
                <div  className={styles.divForUse}>
                    <div className={"flex justify-center"} >
                        <img src={Teacher} alt={"sorry,image was lost"}/>
                    </div>

                    <div className={"flex justify-center"}>
                        <img src={forTeacher} alt={"sorry,image was lost"}/>
                    </div>
                    <h3 className={"text-white flex justify-center"}>Быстрая генерация тестов по тексту с
                        возможностью разослать ученикам тест</h3>
                </div>
                <div  className={styles.divForUse}>
                    <div className={"flex justify-center"}>
                        <img src={Student} alt={"sorry,image was lost"}/>
                    </div>

                    <div className={"flex justify-center"}>
                        <img src={forStudents} alt={"sorry,image was lost"}/>
                    </div>


                    <h3 className={"text-white flex justify-center"}>Самоподготовка по любым материалам
                        быстрее, используя ИИ-инструменты</h3>
                </div>
                <div className={styles.divForUse}>
                    <div className={"flex justify-center"}>
                        <img src={Developer} alt={"sorry,image was lost"}/>
                    </div>
                    <div className={"flex justify-center"}>
                        <img src={forDevelopers} alt={"sorry,image was lost"}/>
                    </div>


                    <h3 className={"text-white flex justify-center"}>Интеграция генератора тестов в их
                        сервисы
                        с помощью API
                    </h3>
                </div>
            </div>
            <hr className={"w-full text-white h-[5px]"}/>
        </div>
    );
};

export default ForWhoSection;