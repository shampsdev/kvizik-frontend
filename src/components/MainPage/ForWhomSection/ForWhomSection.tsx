import forWhoImage from "@/assets/forWgoImage.png";
import forWhoImage2 from "@/assets/ForWhoImage2.png";
import forWhoImage3 from "@/assets/ForWhoImage3.png";
const ForWhomSection = () => {
  return (
      <div className="bg-[#1E1E1E] h-full rounded-[18px] p-4 flex flex-col items-center justify-center w-[100%]">
          <div className={"flex-row"}>
              <button className="mb-3 border border-[#3B3B3B] rounded-full px-4 py-1 text-white ">
                  Для кого
              </button>
              <button className={"text-white border border-[#3B3B3B] rounded-[36px] w-[29px] ml-[5px]"}>
                  ->
              </button>

          </div>


          <div className={"flex flex-row "}>
              <img src={forWhoImage} alt="who" className="w-[74px] h-[74px] ml-[10px]"/>
          <img src={forWhoImage2} alt="who" className="w-[74px] h-[74px] ml-[10px]"/>
          <img src={forWhoImage3} alt="who" className="w-[74px] h-[74px] ml-[10px]"/>
          </div>
      </div>
  );
};

export default ForWhomSection;
