import { BackgroundBoxesDemo } from "@/components/Comp/Background";
import { ThreeDCardDemo } from "@/components/Comp/card";

export default function Home() {
  return (
    <>
      <div className="back mt-[80px]">
        <BackgroundBoxesDemo />
      </div>
      <ThreeDCardDemo />
    </>
  );
}
