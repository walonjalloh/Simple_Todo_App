import { createContext,useState,useContext, useEffect } from "react";
import { axiosInstanceTodo } from "@/api/axiosInstance";
import AuthContext from "./authContext";
import { toast } from "react-toastify";

type TodoType = { 
    createTodo:(description:string) => Promise<void>
    todo:Todo[]
}

type Todo = {
    description:string,
    completed:boolean,
    _id:string,
    userId:string
}

const TodoContext = createContext<TodoType | undefined>(undefined)


export const TodoProvider = ({children}:{children:React.ReactNode}) => {
    const [todo, setTodo] = useState<Todo[]>([])

    //to get the user token and userId
    const auth = useContext(AuthContext)
    const userId = auth?.userId
    const token = auth?.token

    const createTodo = async(description:string):Promise<void> => {
        try{
            const newTodo = {
                userId,
                description
            }
            await axiosInstanceTodo.post('/', newTodo ,{
                headers: {
                    'Authorization':`Bearer${token}`
                }
            })
            toast('todo created successfully')
        }catch(error){
            console.log(error)
            toast('todo creation failed')
        }
    }

    useEffect(() => {
        const getTodo = async():Promise<void> => {
            try {
                const response = await axiosInstanceTodo.get(`/${userId}`)
                console.log(response.data)
                setTodo(prevTodo => [...prevTodo, response.data])
            }catch(error){
                console.log(`error occurred ${error}`)
            }
        }
        getTodo()
    },[userId])

    console.log(todo)
   
    return(
        <TodoContext.Provider value={{
            createTodo,
            todo
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext