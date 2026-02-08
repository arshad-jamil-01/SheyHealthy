import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRouter from "./Routes/userRoute.js"
import cors from "cors"

dotenv.config();
const app = express();
connectDB();

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended:true}))


// routes
 app.use("/api/user", userRouter);

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("server us running on PORT:",port)
})