import mongoose from "mongoose";

const Schema = mongoose.Schema

const todoSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})

const Todo = mongoose.model('Todo', todoSchema)

export default Todo