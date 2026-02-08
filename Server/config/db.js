import mongoose  from "mongoose";

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Db is connected successfully")
    }catch(err){
        console.log("db connection failed", err)
    }
}

export default connectDB