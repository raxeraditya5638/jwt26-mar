import mongoose from "mongoose";
import { NextResponse } from "next/server";

const ConnectDB = async () => {
  try {
    const { connection } = await mongoose.connect(
      process.env.MONGODB_URI as string,
      { dbName: "Auth" }
    );
    connection.on("connection", (connect: any) => {
      console.log("semoone connect database", connect);
    });
    if (connection) {
      return NextResponse.json({ message: "success" }, { status: 200 });
    }
    if (!connection) {
      return NextResponse.json(
        { message: "something went wrong" },
        { status: 500 }
      );
    }
    console.log("connect to database");
  } catch (error: any) {
    console.log("some connection error", error);
  }
};

export default ConnectDB;
