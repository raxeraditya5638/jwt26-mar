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
    thumbnail: "/img.avif",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: "/Fores.jpg",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "/sara.jpg",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "/img.avif",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: "/img.avif",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/img.avif",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: "/img.avif",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: "/img.avif",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail: "/img.avif",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail: "/img.avif",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail: "/img.avif",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail: "/img.avif",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail: "/img.avif",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail: "/img.avif",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail: "/img.avif",
  },
];
