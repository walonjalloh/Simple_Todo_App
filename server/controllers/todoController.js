import Todo from '../models/todoSchema.js'
import User from '../models/userSchema.js'

const createTodo = async(req,res) => {
    try {
        const { description,userId } = req.body
        if(!description || !userId){
            return res.status(400).json({message:'All fields are required'})
        }
        const user = await User.findById( userId )
        if(!user){
            return res.status(400).json({message:'Invalid User'})
        }
        const newTodo = new Todo({
            description,
            userId
        })

        await newTodo.save()

        user.todos.push(newTodo._id)
        await user.save()

        res.status(201).json({message:"Todo created successfully"})
    }catch(error){
        res.status(400).json({error})
    }
}

const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "Invalid id number" });
        }
        
        const todo = await Todo.findById(id);
        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });
        }

        todo.completed = !todo.completed;

        await todo.save();
        
        res.status(200).json(todo);  
    } catch (error) {
        res.status(400).json({ error });
    }
};

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "Invalid todo id" });
        }
        
        const deleteTodo = await Todo.findByIdAndDelete(id);
        if (!deleteTodo) {
            return res.status(400).json({ message: "Invalid todo" });
        }

        const user = await User.findById(deleteTodo.userId);
        if (user) {
            user.todos = user.todos.filter(todoId => todoId.toString() !== id);
            await user.save();
        }

        res.status(203).json({ message: "Todo deleted successfully" });
    } catch (error) {
        res.status(400).json({ error });
    }
};

const getTodo = async(req,res) => {
    try{
        const { userId } = req.params
        const todo = await Todo.find({userId})
    if(!todo){
        return res.status(400).json({message:'No todos found'})
    }
    res.status(200).json(todo)
    }catch(error){
        res.status(400).json({error})
    }
}

export {
    getTodo,
    updateTodo,
    deleteTodo,
    createTodo
}