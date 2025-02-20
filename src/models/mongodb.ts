import mongoose from "mongoose";
const MONGODB_URI=process.env.MONGODB_URI;

if(!MONGODB_URI){
    throw new Error('Please define mongodb environment variable')
}

export async function connectDB(dbName:string){
    try{
        await mongoose.connect(MONGODB_URI as string,{
            dbName:dbName,
        })
        return mongoose.connection;
    }catch(error){
        console.log('MongoDB connection error')
        throw Error;
    }
}