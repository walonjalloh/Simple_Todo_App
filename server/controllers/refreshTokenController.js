import User from '../models/userSchema.js'
import jwt from 'jsonwebtoken'

const refreshToken = async (req, res) => {
    try {
        const { user: refreshToken } = req.cookies
        if (!refreshToken) {
            return res.status(401).json({ message: 'No cookie was recieved' })
        }
        const user = await User.findOne({ refreshToken })
        if (!user) {
            return res.status(404).json({ message: 'Invalid user refresh token' })
        }

        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET,
            async (err, decoded) => {
                if (err) {
                    console.error('Jwt error', err)
                    return res.status(403).json({ message: 'Invalid jwt' })
                }


                if (user._id.toString() !== decoded._id) {
                    return res.status(401).json({ message: "malformed jwt" })
                }

                const accessToken = jwt.sign({ _id:decoded._id }, process.env.ACCESS_TOKEN_SECRET, {
                    expiresIn:"15m"
                })
                res.status(200).json({ accessToken })
            })

        
    } catch (error) {
        console.error('user refresh error', error)
        res.status(500).json({ message: 'internal server error' })
    }
}

export {
    refreshToken
}