import mongoose from 'mongoose'

const connectDB = () => {
    console.log(`MongoDB connection with retry`)
    try{
        mongoose.connect(process.env.DATABASE_URI, {

        })
        console.log('Connected to MongoDB')
    }catch(error){
        console.error(error)
        setTimeout(() => {
            connectDB()
        },5000)
    }
}

export default connectDB