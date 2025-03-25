import styles from './TrySection.module.css';
import phoneImage from "../../assets/Phone.png";
import forWhoImage from "../../assets/ForWhoImage.png";
import imgAi from "../../assets/imgAi.png";

const TrySection = () => {
    return (
        <div className={styles.try_section}>
            <div className={styles.try_container}>
                <div>
                    <div>
                        <span>PDF-формат</span><span>Веб-сайт</span><span>Ввести текст</span>
                    </div>
                    <div>
                        Учитесь быстрее<br/>ИИ-инструменты <br/>для освоения тем
                    </div>
                    <div>
                    Тесты по текстам, заметки по темам для подготовки к экзаменам! Оставьте заявку на ранний доступ
                    </div>
                    <div>
                        <button>Попробовать</button>
                    </div>
                </div>
                <div>
                    <div>
                        1
                    </div>
                    <div className='display: flex'>
                        <div>
                            2
                        </div>
                        <div>
                            3
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrySection;