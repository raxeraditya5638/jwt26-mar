import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const tokendata = () => {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("jwt")?.value || "";
    console.log(token);
    const decotedData: any = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    );
    const Id = decotedData.userdata._id;
    console.log("data deocded :id:", Id);
    return Id;
  } catch (error: any) {
    return NextResponse.json({ message: "hey error " }, { status: 500 });
  }
};

export default tokendata;
