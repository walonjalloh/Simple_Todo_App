import jwt, { decode }  from "jsonwebtoken";
import User from "../models/userSchema.js";

const auth = async(req,res,next) => {
    try{
        const authHeader = req.header('Authorization')
    if(!authHeader){
        return res.status(400).json({message:"Unauthorized"})
    }
    const token = authHeader.replace('Bearer', '').trim()
    if(!token){
        return res.status(400).json({message:"Authorization token not found"})
    }
    const decoded = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,)
    if(!decoded){
        return res.status(400).json({message:"This token is wrong"})
    }
    const user = await User.findOne({ _id: decoded._id })

    if(!user){
        return res.status(400).json({message:'User not found'})
    }
    
    req.token = token
    req.user = user

    console.log('User authenticated')
    next()
    }catch(error){
        res.status(400).json({message:"User authentication failed"})
    }
}

export default auth