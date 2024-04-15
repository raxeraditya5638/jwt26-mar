"use client";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const [data, setData] = useState("nothing");
  const [logout, setlogout] = useState("nothing");
  const router = useRouter();
  const userdetails = async () => {
    try {
      const res = await axios.post("/api/v1/profile");
      console.log("res", res);
      console.log("res. : :", res);
      // res.id = whole id to send first object
      // if you find user = res.id.id.user
      const Id = res.data.id;
      console.log("id is id: :", Id);
      setData(res.data.id);
      router.push(`/profile/${Id}`);
    } catch (error: any) {
      console.log("some error", error);
    }
  };
  const handlelogout = async () => {
    try {
      const res = await axios.delete("/api/users/logout");
      setlogout(res.data.message);
      console.log("retrun data :");
      console.log("hey data", res.data.message);
      router.push("/users/login");
    } catch (error: any) {
      console.log("some error", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1>profile</h1>
      {data === "nothing" ? "" : "hety"}
      <button onClick={userdetails} className="bg-green-500 px-5 py-2 ">
        get data
      </button>
      <h1>{data}</h1>
      <button className="bg-green-500 px-5 py-2 " onClick={handlelogout}>
        click
      </button>
      <h1>{logout}</h1>
    </div>
  );
};

export default page;
