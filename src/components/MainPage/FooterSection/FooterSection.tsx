import styles from "@/components/MainPage/MainPage.module.css";

const FooterSection = () => {
    return (
        <div className={styles.footer}>

            <div style={{
                width: "344px",
                height: "86px",
                top: "143px",
                left: "548px",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",

            }}>
                <div style={{
                    width: "344px",
                    height: "38px",
                    top: "57px",
                    left: "548px",


                }}>
                    <h3 style={{
                        fontFamily: "Inter",
                        fontWeight: "600",
                        fontSize: "16px",
                        lineHeight: "121%",
                        letterSpacing: "0%",
                        textAlign: "center",
                        color: "#FFFFFF",


                    }}>Подпишитесь на наш Telegram-канал, чтобы следить за новостями разработки</h3>
                </div>
                <div style={{
                    paddingTop: "17px",
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <button style={{
                        width: "126px",
                        height: "31px",
                        borderRadius: "36px",
                        borderWidth: "1px",
                        top: "112px",
                        left: "657px",
                        backgroundColor: "white",
                    }}>Подписаться
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FooterSection;