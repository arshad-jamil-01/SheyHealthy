import express from "express";
const router = express.Router(); 
import userModel from "../Models/userModel.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import isLoggedIn from "../middleware/authMiddleware.js";


//registration api
router.post("/register", async(req, res)=>{
    try{
        const {name, email, password} = req.body;

        //Check user already exists
    const existUser = await userModel.findOne({email});
    if (existUser) {
      return res.status(400).send({message:"User already exists", success:false});
    };

    //hashed password
        const salt = await bcrypt.genSalt(10); 
        const hash = await bcrypt.hash(password, salt);

        //create user
        const user = new userModel({
            name,
            email,
            password:hash
        });

        //save user 
        await user.save();
        res.status(201).send({
            message:"user create succefully",
            success:true
        });


    }catch(error){
        res.status(500).send({
            message:"error user not created",
            success:false,
            error: error.message 
        })
    }
});



//login api
router.post("/login", async(req, res)=>{
    try{
      const {email, password} = req.body;
      const user = await userModel.findOne({email});
      if(!user){
        return res.status(400).send({message:"user not found", success:false});
      }

      const isValidPassword = await bcrypt.compare(password, user.password);
      if(isValidPassword){
        const token = jwt.sign({
        userId: user._id, 
        email: user.email
        },process.env.JWT_SECRET,{expiresIn:"1d"});
        res.cookie("token", token); 
        res.status(200).send({message:"Logged In Successfully", success:true})
      }else{
        res.status(400).send({message:"Invalid Password", success:false})
      }
      
    }catch(error){
        console.log(error)
        res.status(500).send({message:"Error In Logged In", success:false})
    }
});


//protect
router.get("/protected", isLoggedIn, async (req, res) => {
  try {
    const user = await userModel.findOne({ _id: req.userId });

    if (!user) {
      return res.status(400).send({ message: "User does not exist", success: false });
    }

    res.status(200).send({
      success: true,
      data: {
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    res.status(500).send({ message: "User not found", success: false });
  }
});




export default router;