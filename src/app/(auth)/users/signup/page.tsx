import Image from "next/image";

import React from "react";
import { SignupFormDemo } from "@/components/Comp/Signup";

const page = () => {
  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="first col-span-12 sm:col-span-6 flex items-center justify-center pl-10">
        <Image
          src={"/img.avif"}
          alt="images"
          width={1500}
          height={1500}
          className="object-fill"
        ></Image>
      </div>
      <div className="first col-span-12 sm:col-span-6 sm:h-screen">
        <div className="flex justify-center items-center h-full">
          <SignupFormDemo />
        </div>
      </div>
    </div>
  );
};

export default page;
