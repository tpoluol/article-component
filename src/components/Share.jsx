import face from '/icon-facebook.svg';
import pinterest from '/icon-pinterest.svg';
import twitter from '/icon-twitter.svg';
import share from '/icon-share.svg';
export default function Share({ setTemp }) {
  return (
    <footer className="bg-VeryDarkGrayishBlue flex text-center justify-between p-4">
      <div className="flex gap-5 items-center justify-center">
        <div className="">
          <p className="text-DesaturatedDarkBlue text-xs">S H A R E</p>
        </div>
        <div className="flex gap-3 justify-center items-center">
          <img src={face} alt="" className="w-[17px] h-[17px]" />
          <img src={twitter} alt="" className="w-[17px] h-[17px]" />
          <img src={pinterest} alt="" className="w-[17px] h-[17px]" />
        </div>
      </div>
      <div
        onClick={() => {
          setTemp(false);
        }}
        className="bg-GrayishBlue rounded-full w-[25px] h-[25px] flex justify-center items-center hover:cursor-pointer"
      >
        <img src={share} alt="" className="" />
      </div>
    </footer>
  );
}
