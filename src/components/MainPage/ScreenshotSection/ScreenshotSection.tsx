import phoneImage from "@/assets/Phone.png";

const ScreenshotSection = () => {
    return (
            <div className={"order-2 col-start-1 col-end-2 row-start-2 row-end-3 rounded-[18px] bg-[#1E1E1E]"}>
                <img src={phoneImage} alt={"sorry,image was lost"}/>
            </div>
    );
};

export default ScreenshotSection;