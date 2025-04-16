import forWhoImage from "@/assets/ForWhoImage.png";
const ForWhomSection = () => {
  return (
    <div className="bg-[#1E1E1E] h-full rounded-[18px] p-4 flex flex-col items-center justify-center">
      <button className="mb-3 border border-[#3B3B3B] rounded-full px-4 py-1 text-white">
        Для кого
      </button>
      <img src={forWhoImage} alt="who" className="w-[242px] h-[74px]" />
    </div>
  );
};

export default ForWhomSection;
