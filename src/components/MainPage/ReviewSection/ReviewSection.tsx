import MacScreen from "@/assets/MacScreen.png";

const ReviewSection = () => {
    return (
        <div>
            <div className={"w-full flex justify-center"}>
                <div
                    className={"flex justify-center w-[68px] h-[29px] gap-[9px] rounded-[36px] border border-solid border-current pt-[6px] pr-[13px] pb-[6px] pl-[13px] text-white"}>
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

            <div className={"flex justify-center text-center pb-[136px]"}>
                <img src={MacScreen} alt={"sorry,image was lost"}/>
            </div>
        </div>


    );
};

export default ReviewSection;