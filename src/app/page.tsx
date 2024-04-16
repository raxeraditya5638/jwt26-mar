import { BackgroundBoxesDemo } from "@/components/Comp/Background";
import { ThreeDCardDemo } from "@/components/Comp/card";
import { NavbarDemo } from "@/components/Comp/Navbar";

export default function Home() {
  return (
    <>
      <div className="nav">
        <NavbarDemo />
      </div>
      <div className="back mt-[80px]">
        <BackgroundBoxesDemo />
      </div>
      <ThreeDCardDemo />
    </>
  );
}
