import mongoose from "mongoose";

const ConnectDB = async ()=>{
    try {
        const {connection} = await mongoose.connect(process.env.MONGODB_URI as string,{dbName:"Auth"})
        connection.on("connection",(connect:any)=>{
            console.log("semoone connect database",connect)
        })
        console.log("connect to database")
    } catch (error:any) {
        console.log("some connection error",error)
    }
}

export default ConnectDB;