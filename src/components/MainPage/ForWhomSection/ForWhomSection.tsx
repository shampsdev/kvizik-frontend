import forWhoImage from "@/assets/ForWhoImage.png";

const ForWhomSection = () => {
    return (
        <div className={"order-3 col-start-2 col-end-3 row-start-2 row-end-3 grid grid-rows-[50%_50%] justify-center items-center rounded-[18px] bg-[#1E1E1E]" }>
            <div className={"w-[119px] h-[29px] gap-[5px] order-0 row-span-1 text-white bg-[#1E1E1E] border border-[#3B3B3B] rounded-[36px] flex justify-center"}>
                <button>For who?</button>
            </div>
            <div className={"w-[242px] h-[74px] gap-[10px] order-1 row-start-2 row-end-3"}>
                <img src={forWhoImage} alt={"sorry,image was lost"}/>
            </div>
        </div>
    );
};

export default ForWhomSection;