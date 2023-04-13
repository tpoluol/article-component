export default function Modal() {
  return (
    <div className="flex justify-end">
      <div className="absolute">
        <div className="relative after:absolute after: left-[35%] bottom-[120px] rounded-md w-[200px] h-[45px] flex justify-center items-center  gap-3 bg-VeryDarkGrayishBlue text-GrayishBlue">
          <p className="text-xs">S H A R E</p>
          <div className="flex gap-3">
            <img src={face} alt="" />
            <img src={twitter} alt="" />
            <img src={pinterest} alt="" />
          </div>
          <div className="absolute w-[20px] h-[20px] bottom-0 origin-bottom-left rotate-[45deg] bg-VeryDarkGrayishBlue"></div>
        </div>
      </div>
    </div>
  );
}
