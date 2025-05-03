import TgSection from "@/components/MainPage/TgSection/TgSection.tsx";
import ScreenshotSection from "@/components/MainPage/ScreenshotSection/ScreenshotSection.tsx";
import InfoSection from "@/components/MainPage/InfoSection/InfoSection.tsx";
import ForWhomSection from "@/components/MainPage/ForWhomSection/ForWhomSection.tsx";
import ReviewSection from "@/components/MainPage/ReviewSection/ReviewSection.tsx";
import ForWhoSection from "@/components/MainPage/ForWhoSection/ForWhoSection.tsx";
import FooterSection from "@/components/MainPage/FooterSection/FooterSection.tsx";

const MainPage = () => {
    return (
        <div className="max-w-[1440px] mx-auto ">
            <div className="flex flex-row justify-center gap-[59px] items-stretch">
                <InfoSection/>
                <div className="flex-[3] flex flex-col gap-[35px]">
                    <TgSection/>
                    <div className="flex flex-row items-stretch gap-[41px] w-full">
                        <div className="flex-1">
                            <ScreenshotSection/>
                        </div>
                        <div className="flex-1">
                            <ForWhomSection/>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={
                    "flex flex-col justify-center text-white w-full mx-auto pt-[130px] pb-[34px]"
                }
            >
                <ReviewSection/>
            </div>
            <ForWhoSection/>
            <FooterSection/>
        </div>
    );
};

export default MainPage;
