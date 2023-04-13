import img from '/drawers.jpg';
import Footer from './components/Footer.jsx';
import img2 from '/avatar-michelle.jpg';
import img3 from '/icon-share.svg';
import { useEffect, useState } from 'react';
import Share from './components/Share.jsx';
import face from '/icon-facebook.svg';
import pinterest from '/icon-pinterest.svg';
import twitter from '/icon-twitter.svg';
function App() {
  const [temp, setTemp] = useState(false);
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setSize(window.innerWidth);
    });
  }, [size]);
  console.log(size);
  return (
    <main className="bg-LightGrayishBlue min-h-screen flex justify-center items-center font-Manrope">
      <article className="flex flex-col bg-white overflow-hidden rounded-xl max-w-[280px] md:flex-row md:max-w-[800px]">
        <div>
          <img src={img} alt="" className="max-w-[280px] h-full" />
        </div>
        <div className="md:p-3">
          <div className="flex flex-col m-6 gap-5">
            <p className=" font-bold md:text-2xl">
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </p>
            <p className="text-GrayishBlue text-xs md:text-sm leading-5 ">
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I’ve got some simple tips to
              help you make any room feel complete.
            </p>
          </div>
          {size < 768 ? (
            temp ? (
              <Share setTemp={setTemp} />
            ) : (
              <Footer setTemp={setTemp} />
            )
          ) : (
            <Footer setTemp={setTemp} />
          )}
        </div>
      </article>
    </main>
  );
}

export default App;
