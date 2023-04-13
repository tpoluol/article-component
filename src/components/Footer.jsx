import img2 from '/avatar-michelle.jpg';
import img3 from '/icon-share.svg';

export default function Footer({ setTemp }) {
  return (
    <footer className="flex justify-between items-center  p-4">
      <div className="flex gap-4">
        <img src={img2} alt="" className="rounded-full max-w-[40px]" />
        <div className="text-xs">
          <p className="">Michelle Appleton</p>
          <p className="text-GrayishBlue">28 Jun 2020</p>
        </div>
      </div>
      <div
        onClick={() => {
          setTemp(true);
        }}
        className="bg-LightGrayishBlue rounded-full w-[25px] h-[25px] flex justify-center items-center hover:cursor-pointer"
      >
        <img src={img3} alt="" className="" />
      </div>
    </footer>
  );
}
