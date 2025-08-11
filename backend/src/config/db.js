import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        await mongoose.connect(process.env.mongoDB)
    }catch(error){
        console.error("Error connect to DB", error)
        process.exit(1)
    }
 }