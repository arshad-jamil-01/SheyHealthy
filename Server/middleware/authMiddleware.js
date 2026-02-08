import jwt from "jsonwebtoken";


const isLoggedIn = (req, res, next)=>{

    try{
        const token = req.cookies.token
    if(!token){
        return res.status(401).send({message:"Not Authorize", success:false})
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if(!decoded){
        res.status(401).send({message:"Not Authorize", success:false})
    }
   req.userId = decoded.userId;
    return next();
    }catch(error){
        res.status(401).send({message:"Not Authorize", success:false})
    }
    
}

export default isLoggedIn