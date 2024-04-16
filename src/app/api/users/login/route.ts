import ConnectDB from "@/lib/ConnectDB";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const cookieStore = cookies();
    const { username, email, password } = await req.json();

    const DB = await ConnectDB();
    console.log("db", DB);

    if (!username) {
      return NextResponse.json(
        { message: "Please enter your username" },
        { status: 400 }
      );
    }
    if (!email) {
      return NextResponse.json(
        { message: "Please enter your email" },
        { status: 400 }
      );
    }
    if (!password) {
      return NextResponse.json(
        { message: "Please enter your password" },
        { status: 400 }
      );
    }
    console.log(username, email, password);
    const userdata = await User.findOne({ username });
    if (!userdata) {
      return NextResponse.json({ message: "user not found" }, { status: 400 });
    }
    const matchpassword = await bcrypt.compare(password, userdata.password);
    console.log(matchpassword);
    if (!matchpassword) {
      return NextResponse.json(
        { message: "Your password is wrong" },
        { status: 400 }
      );
    }

    // const tokendata = {
    //   id:userdata._id,
    //   username:userdata.username,
    //   email:userdata.email,
    // }

    const token = jwt.sign({ userdata }, process.env.JWT_SECRET as string, {
      expiresIn: "5d",
    });
    cookieStore.set("jwt", token, {
      httpOnly: true,
      maxAge: 5 * 24 * 60 * 60 * 1000,
      secure: true,
      sameSite: "strict",
    });
    console.log(token);
    return NextResponse.json({ message: "succesfully login" }, { status: 200 });
  } catch (error: any) {
    console.log("found an error", error.message);
    return NextResponse.json(
      { message: "error something went wrong" },
      { status: 500 }
    );
  }
}
