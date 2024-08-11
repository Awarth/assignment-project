import { ArrowDown } from "@phosphor-icons/react";
import myImg from '../assets/images/file.webp';

function Home() {
  return (
    <section
      id="home"
      className="max-w-[1300px] w-full flex max-[800px]:flex-col-reverse py-12"
    >
      <div className="left h-full w-[55%] max-[800px]:w-full  py-16 max-[800px]:py-4">
        <p className="py-2 px-3 bg-[#F5F3F0] rounded-lg text-[#4D4D4D] mb-4 w-fit">
          Hello There 🤗
        </p>
        <h2 className="text-6xl max-[800px]:text-4xl font-bold mb-2 text-[#1A1A1A]">
          Adarsh Tiwari
        </h2>
        <h2 className="text-6xl max-[800px]:text-5xl font-bold mb-6 max-[800px]:mb-4 text-[#1A1A1A]">Welcomes You</h2>
        <p className="text-xl text-[#4D4D4D] mb-16 w-[85%] max-[800px]:mb-6 max-[800px]:w-full">
          I am a passionate and experienced web designer, dedicated to creating
          visually stunning and highly functional websites. Explore my portfolio
          to see the power of effective design in action
        </p>
        <button className="flex justify-center items-center py-3 px-4 bg-[#5700FF] rounded-lg gap-2 text-xl text-white hover:scale-105 transition-all duration-300 ease-in">
          Resume <ArrowDown/>
        </button>
      </div>
      <div className="heroImg w-[45%] max-[800px]:w-full flex justify-center items-center">
        <img src={myImg} alt="myImg" className="myImg w-[100%] max-[800px]:w-[45%] aspect-square max-[500px]:w-[65%] grayscale"/>
      </div>
    </section>
  );
}

export default Home;
