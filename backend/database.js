import mongoose from "mongoose";

export const connectDB = async()=>{
    try{
        const response = await mongoose.connect(process.env.MONGO_URL );
    if(!response){
        return null;
    }
    return response;

    }catch(err){
        console.log("db connection failed");

    }
}