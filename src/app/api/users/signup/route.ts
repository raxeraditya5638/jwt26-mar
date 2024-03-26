import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import ConnectDB from "@/lib/ConnectDB";
import User from "@/models/User";

export async function POST(req: NextRequest) {
  try {
    const { username, email, password, Confirmpassword } = await req.json();
    await ConnectDB();
    console.log(username, email, Confirmpassword);
    const usernameData = await User.findOne({ username });
    if (usernameData) {
      return NextResponse.json(
        { message: "username Allready exists" },
        { status: 400 }
      );
    }

    const emailData = await User.findOne({ email });
    if (emailData) {
      return NextResponse.json(
        { message: "email Allready exists" },
        { status: 400 }
      );
    }

    if (!username || !email) {
      return NextResponse.json(
        { message: "Please enter your username or email" },
        { status: 400 }
      );
    }
    if (!password) {
      return NextResponse.json(
        { message: "Please enter your Password" },
        { status: 400 }
      );
    }
    if (password !== Confirmpassword) {
      return NextResponse.json(
        { message: "your Password Does not match" },
        { status: 400 }
      );
    }

    const hashedpassword = await bcrypt.hash(password, 10);

    let userdata = await User.create({
      username,
      email,
      password: hashedpassword,
    });
    console.log(userdata);
    const tokendata = {
      id: userdata._id,
      username: userdata.username,
      email: userdata.email,
    };
    const token = jwt.sign(tokendata, process.env.JWT_SECRET as string, {
      expiresIn: "5d",
    });
    console.log(token);

    // cookieStore.set("jwt", token, {
    //   httpOnly: true,
    //   maxAge: 5 * 24 * 60 * 60 * 1000,
    //   secure: true,
    //   sameSite: "strict",
    // });

    const response = NextResponse.json(
      { message: "successfully to create user" },
      { status: 200 }
    );

    response.cookies.set("jwt", token, {
      httpOnly: true,
      // maxAge: 5 * 24 * 60 * 60 * 1000,
      // secure: true,
      // sameSite: "strict",
    });

    return response;
  } catch (error: any) {
    console.log("found an error", error.message);
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
}
