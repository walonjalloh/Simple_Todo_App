import { createContext, useState, useContext, useEffect } from "react";
import { axiosInstanceTodo } from "@/api/axiosInstance";
import AuthContext from "./authContext";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";

type TodoType = { 
    createTodo: (description: string) => Promise<void>;
    todo: Todo[];
    updateTodo: (id: string) => Promise<void> | undefined;
    deleteTodo: (id: string) => Promise<void> | undefined;
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
    const navigate = useNavigate();
    const location = useLocation();

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
            navigate('/view_todo', { state: { refresh: true } });
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
            setTodos(response.data);  // Update todos in state
        } catch (error) {
            console.error(`Error occurred: ${error}`);
        }
    };

    useEffect(() => {
        getTodos();
    }, [userId]);

    useEffect(() => {
        if (location.state?.refresh) {
            getTodos();  // Refresh todos when navigation triggers refresh
        }
    }, [location.state]);

    const updateTodo = async (id: string): Promise<void> => {
        try {
            const response = await axiosInstanceTodo.patch(`/${id}`, {}, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            setTodos(prevTodos =>
                prevTodos.map(todo =>
                    todo._id === id ? { ...todo, completed: response.data.completed } : todo
                )
            );  // Update the todo status in the UI
        } catch (error) {
            console.error(error);
            toast('Error updating todo');
        }
    };

    const deleteTodo = async (id: string): Promise<void> => {
        try {
            await axiosInstanceTodo.delete(`/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            setTodos(prevTodos => prevTodos.filter(todo => todo._id !== id));  // Remove the deleted todo from state
            toast('Todo deleted successfully');
        } catch (error) {
            console.error(error);
            toast('Error deleting todo');
        }
    };

    return (
        <TodoContext.Provider value={{ 
            createTodo, 
            todo: todos,
            updateTodo,
            deleteTodo,
        }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoContext;
