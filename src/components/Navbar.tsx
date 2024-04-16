"use client";
import Link from "next/link";
import style from "@/styles/Navbar.module.css";
import { useState } from "react";

const Navbar = () => {
  const [active, setAcitve] = useState(false);
  const hame = () => {
    setAcitve(!active);
  };
  return (
    <div className="sticky top-0">
      <div className="main bg-white h-16 px-5 text-black flex items-center justify-between">
        <div className="left">
          <ul>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
          </ul>
        </div>
        <div className="center text-black sm:block hidden" id={style.right}>
          <ul className="flex gap-3 items-center">
            <li>
              <Link href={"/"}>Git Hub</Link>
            </li>
            <li>
              <Link href={"/"}>Linkedin</Link>
            </li>
            <li>
              <Link href={"/"}>Twitter</Link>
            </li>
            <li>
              <Link href={"/"}>Git Lab</Link>
            </li>
          </ul>
        </div>
        <div className="hamburger sm:hidden block">
          <button onClick={hame} className="text-black focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {active ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        {active && (
          <div className="main z-10 absolute top-16 left-0 w-full text-black h-screen">
            <ul className="flex gap-3 flex-col h-[100%] items-center justify-center bg-sky-500">
              {/* photo background */}
              {/* set image */}
              <li>
                <Link href={"/"}>Git Hub</Link>
              </li>
              <li>
                <Link href={"/"}>Linkedin</Link>
              </li>
              <li>
                <Link href={"/"}>Twitter</Link>
              </li>
              <li>
                <Link href={"/"}>Git Lab</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
