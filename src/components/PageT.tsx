"use client";
import React, { use } from "react";
import Image from "next/image";
import { CardHoverEffectDemo } from "@/components/CardHoverEffectDemo";

import { motion, useScroll } from "framer-motion";
import { HeroHighlightDemo } from "./HeroHighlightDemo";
import { HeroParallaxDemo } from "./HeroParallaxDemo";
const PageT = () => {
  const items = ["ehy", "ehy", 6, 52, 52];
  const Scroll = useScroll();
  return (
    <div>
      <div className="main">
        <div className="ima">
          <CardHoverEffectDemo />
        </div>
        <div className="">
          <HeroHighlightDemo />
        </div>
        <div className="move">
          <HeroParallaxDemo />
        </div>
      </div>
    </div>
  );
};

export default PageT;
