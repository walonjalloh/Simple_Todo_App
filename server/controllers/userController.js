import User from '../models/userSchema.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const signIn = async(req,res) => {
    try{
        const { username, password } = req.body
        if(!username || !password){
            return res.status(400).json({message:'All fields are required'})
        }
        const user = await User.findOne({ username })
        if(!user){
            return res.status(400).json({message:"invalid user"})
        }
        const passwordMatched = await bcrypt.compare(password,user.password)
        if(!passwordMatched){
            return res.status(401).json({messag:'Invalid password'})
        }
        const accessToken = jwt.sign({_id:user._id},process.env.ACCESS_TOKEN_SECRET,{
            expiresIn:"15m"
        })
        const refreshToken = jwt.sign({_id:user._id},process.env.REFRESH_TOKEN_SECRET,{
            expiresIn:"1d"
        })

        user.refreshToken = refreshToken
        user.save()

        res.cookie('user',accessToken,{
            httpOnly:true,
            secure:true,
            maxAge:24 * 60 * 60 * 1000,
            sameSite:"None"
        })

        const userResponse = user.toObject()
        delete userResponse.password

        res.status(200).json({user:userResponse,accessToken})

    }catch(error){
        res.status(400).json({error})
    }
}

const signUp = async(req,res) => {
    try {
        const { fullname, username, password } = req.body
        if(!fullname || !username || !password){
            return res.status(400).json({message:"All fields are required"})
        }
        const userExist = await User.findOne({ username })
        if(userExist){
            return res.status(400).json({message:"User already exist"})
        }

        const passwordHashed = await bcrypt.hash(password, 10)

        const newUser = new User({
            fullname,
            username,
            password:passwordHashed
        })
        newUser.save()
        res.status(201).json({message:"User created successfully"})
    }catch(error){
        res.status(400).json({error})
    }
}

export {
    signIn,
    signUp
}