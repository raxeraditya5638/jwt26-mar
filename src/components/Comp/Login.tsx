"use client";
import React, { useState } from "react";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function LoginFormDemo() {
  // State variables to store input data
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");
  console.log(username, email, password);

  const router = useRouter();

  // Handler for input change

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await axios
      .post("/api/users/login", {
        username,
        email,
        password,
      })
      .then((response) => {
        // Handle success
        setusername("");
        setEmail("");
        setpassword("");
        console.log("Message sent successfully");
        router.replace("/profile");
      })
      .catch((error) => {
        // Handle error
        setError(error.response.data.message);
        console.log("error my", error.response);
        console.error("Error sending message:", error.response.data);
      });
  };
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 shadow-input bg-white dark:bg-black capitalize text-center">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to Community
      </h2>

      <form className="my-4 text-start" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <div className="flex flex-col w-full">
            <label htmlFor="firstname" className="pb-4 w-full">
              User Name
            </label>
            <input
              id="firstname"
              placeholder="raxer"
              type="text"
              name="first name"
              className="w-full px-7 py-2 rounded-lg"
              value={username}
              onChange={(e) => {
                setusername(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="mb-4 flex flex-col w-full">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            value={email}
            className="w-full px-7 py-2 rounded-lg"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="password">password</label>
          <input
            id="password"
            placeholder="••••••••"
            type="password"
            className="w-full px-7 py-2 rounded-lg"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </div>

        {error === "" ? (
          <h1 className="hidden"></h1>
        ) : (
          <h1 className=" text-red-600 border-red-800">{error}</h1>
        )}

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          LogIn &rarr;
        </button>
      </form>
      <Link
        href={"/users/signup"}
        className="text-white font-bold text-[1rem] text-center w-full bg-zinc-700 rounded-lg py-2 px-5 hover:bg-zinc-800 active:bg-zinc-600 border-zinc-700"
      >
        Signup
      </Link>
    </div>
  );
}
