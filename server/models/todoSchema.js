import mongoose from "mongoose";

const Schema = mongoose.Schema

const todoSchema = new Schema({
    description:{
        type:String,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    completed:{
        type:Boolean,
        default:false,
        required:true
    }
})

const Todo = mongoose.model('Todo', todoSchema)

export default Todo