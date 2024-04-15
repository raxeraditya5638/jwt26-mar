import ConnectDB from "@/lib/ConnectDB";
import tokendata from "@/lib/getTokenData";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST() {
  try {
    await ConnectDB();
    const userId = await tokendata();
    const user = await User.findOne({ _id: userId }).select("-password");
    // console.log("user data", user);
    console.log("user id:id:", userId);

    return NextResponse.json(
      { message: "succest to get user id", id: userId },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: "some error to take id from token" },
      { status: 500 }
    );
  }
}
