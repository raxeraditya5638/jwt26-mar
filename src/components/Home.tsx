import style from "@/styles/Home.module.css";
import Image from "next/image";

const Home = () => {
  return (
    <div className="h-[80vh]" id={style.main}>
      <div className="center flex items-center flex-col justify-center h-full font-extrabold">
        <div className="main" id={style.mainc}>
          <h1 className="text-6xl tracking-wide font-sans text-white">
            Learn Something New
          </h1>
          <h4 className="text-3xl font-mono tracking-tighter text-center py-5 text-white">
            Learn About Ai Ml
          </h4>
        </div>
      </div>
      <div className="border" id={style.border}></div>
      <div className="herader">
        <section className="text-gray-700 body-font">
          <div className="container mx-auto rounded-lg overflow-hidden flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Before they sold out
                <br className="hidden lg:inline-block" />
                readymade gluten
              </h1>
              <p className="mb-8 leading-relaxed">
                Copper mug try-hard pitchfork pour-over freegan heirloom neutra
                air plant cold-pressed tacos poke beard tote bag. Heirloom echo
                park mlkshk tote bag selvage hot chicken authentic tumeric
                truffaut hexagon try-hard chambray.
              </p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Button
                </button>
                <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
                  Button
                </button>
              </div>
            </div>
            <div className="w-1/2 rounded-lg">
              <Image
                width={700}
                height={600}
                className="object-cover object-center rounded bg-contain"
                alt="hero"
                src="/Fores.jpg"
              />
            </div>
          </div>
        </section>
        <section className="text-gray-700 body-font border-t border-gray-200"></section>
      </div>
    </div>
  );
};

export default Home;
