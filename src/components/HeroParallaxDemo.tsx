"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "/Img/img.jpg",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: "/Img/img1.jpg",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "/Img/img2.jpg",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "/Img/img3.jpg",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: "/Img/img4.jpg",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/Img/imgc.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: "/Img/imgc2.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: "/Img/populate.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail: "/Img/sara.jpg",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail: "/Img/Fores.jpg",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail: "/Img/fores1.jpg",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail: "/Img/img5.jpg",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail: "/Img/img8.jpg",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail: "/Img/img6.jpg",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail: "/Img/img7.jpg",
  },
];
