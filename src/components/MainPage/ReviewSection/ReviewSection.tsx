import MacScreen from "@/assets/MacScreen.png";

const ReviewSection = () => {
    return (
        <div>
            <div
                className={
                    "flex flex-col justify-center text-white w-[513px] mx-auto pt-[130px] pb-[34px]"
                }
            >
                <div className={"w-full flex justify-center"}>
                    <div
                        className={"flex justify-center w-[15%] h-[15%] gap-[9px] rounded-[36px] border border-solid border-current pt-[6px] pr-[13px] pb-[6px] pl-[13px] text-white"}>
                        <button>Обзор</button>
                    </div>
                </div>

                <div className={"flex justify-center pb-[34px]"}>
                    <h1>Как работает</h1>
                </div>
                <div className={"flex justify-center text-center pb-[34px]"}>
                    <h3>Тесты по текстам, заметки по темам для подготовки к экзаменам! Оставьте заявку на ранний
                        доступ</h3>
                </div>


            </div>
            <div className={"flex justify-center text-center pb-[136px] h-[1/3] "}>
                <img src={MacScreen} alt={"sorry,image was lost"}/>
            </div>
        </div>

    )
        ;
};

export default ReviewSection;