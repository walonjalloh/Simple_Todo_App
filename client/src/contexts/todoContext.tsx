import { createContext, useState, useContext, useEffect } from "react";
import { axiosInstanceTodo } from "@/api/axiosInstance";
import AuthContext from "./authContext";
import { toast } from "react-toastify";
import { useNavigate,useLocation } from "react-router-dom";

type TodoType = { 
    createTodo: (description: string) => Promise<void>;
    todo: Todo[];
};

type Todo = {
    description: string;
    completed: boolean;
    _id: string;
    userId: string;
};

const TodoContext = createContext<TodoType | undefined>(undefined);

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const auth = useContext(AuthContext);
    const userId = auth?.userId;
    const token = auth?.token;
    const navigate = useNavigate()
    const location = useLocation()

    const createTodo = async (description: string): Promise<void> => {
        try {
            const newTodo = {
                userId,
                description,
            };
            const response = await axiosInstanceTodo.post('/', newTodo, {
                headers: {
                    'Authorization': `Bearer ${token}`, 
                },
            });
            setTodos(prevTodos => [...prevTodos, response.data]);
            toast('Todo created successfully');
            navigate('/view_todo', {state:{refresh:true}})
            
        } catch (error) {
            console.error(error);
            toast('Todo creation failed');
        }
    };

    const getTodos = async (): Promise<void> => {
        if (!userId || !token) return; 
        try {
            const response = await axiosInstanceTodo.get(`/${userId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            setTodos(response.data); 
        } catch (error) {
            console.error(`Error occurred: ${error}`);
        }
    };

    useEffect(() => {
        getTodos(); 
    }, [userId])

    useEffect(() => {
        if (location.state?.shouldRefetch) {
            getTodos();
        }
    }, [location.state]);


    return (
        <TodoContext.Provider value={{ 
            createTodo, 
            todo: todos 
        }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoContext;
