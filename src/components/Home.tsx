import style from "@/styles/Home.module.css";
import Image from "next/image";

const Home = () => {
  return (
    <div className="h-[80vh]" id={style.main}>
      <div className="center flex items-center flex-col justify-center h-full font-extrabold">
        <div className="main" id={style.mainc}>
          <h1 className="sm:text-6xl text-4xl text-center tracking-wide font-sans text-white">
            Learn Something New
          </h1>
          <h4 className="sm:text-3xl text-2xl font-mono tracking-tighter text-center py-5 text-white">
            Learn About Ai Ml
          </h4>
        </div>
      </div>
      <div className="border" id={style.border}></div>
    </div>
  );
};

export default Home;
