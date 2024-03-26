import { NextRequest, NextResponse } from "next/server";
import {cookies} from "next/headers"


export async function DELETE(req:NextRequest) {
  try {
    console.log(req.cookies.get("jwt"));
    const cookieStore = cookies()
    const data = cookieStore.get("jwt");
    console.log(data)
    cookieStore.set("jwt","",{maxAge:0})
    const clearcookie = cookieStore.delete("jwt");
    console.log(clearcookie)

    return NextResponse.json(
      { message: "hey logout" },
      { status: 200 }
    );
    // response.cookies.set("jwt","",{maxAge:0,expires: new Date(0)})
    // return response;
  } catch (error) {
    console.log("error my Hnadled error", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 499 }
    );
  }
}