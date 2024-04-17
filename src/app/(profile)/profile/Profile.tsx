"use client";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Profile = () => {
  const [data, setData] = useState("nothing");
  const [logout, setlogout] = useState("nothing");
  const router = useRouter();
  const userdetails = async () => {
    try {
      const res = await axios.post("/api/v1/profile");

      const Id = res.data.id;
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
    <div className="flex flex-col justify-center items-center">
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
      <div className="h">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quis
        maxime quaerat, non ullam illo placeat adipisci rem, officia mollitia
        velit nemo similique. Quod totam aspernatur temporibus? Pariatur, nobis
        veritatis.
        <h1>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, omnis
          numquam! Expedita ad iusto in dolorum distinctio, nam ratione optio
          dolor laborum molestias quis. Ea obcaecati optio fugiat quis cumque.
        </h1>
      </div>
    </div>
  );
};

export default Profile;
