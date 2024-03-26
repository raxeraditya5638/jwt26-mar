import { log } from 'console';
import jwt from 'jsonwebtoken'
import {cookies} from "next/headers"
import { NextResponse } from 'next/server';

const tokendata = ()=>{
try {
    const cookieStore = cookies()
    const token = cookieStore.get("jwt")?.value || "";
    console.log(token)
    const decotedData:any = jwt.verify(token,process.env.JWT_SECRET as string)
    log("hety")
    console.log("data deocded" ,decotedData.userdata._id)
   return decotedData.userdata._id;
} catch (error:any) {
    return NextResponse.json({message:"hey error "},{status:500})
}
}

export default tokendata;