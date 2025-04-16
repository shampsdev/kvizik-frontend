import phoneImage from "@/assets/Phone.png";

const ScreenshotSection = () => {
  return (
    <div className="rounded-[18px] bg-[#1E1E1E] h-full">
      <img
        src={phoneImage}
        alt={"sorry,image was lost"}
        className="block mx-auto"
      />
    </div>
  );
};

export default ScreenshotSection;
