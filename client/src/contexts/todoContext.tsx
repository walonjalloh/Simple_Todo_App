import { createContext } from "react";
import { axiosInstanceTodo } from "@/api/axiosInstance";

const TodoContext = createContext({})


export const TodoProvider = ({children}:{children:React.ReactNode}) => {
   
    return(
        <TodoContext.Provider value={{

        }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext