import { useContext } from "react";
import TodoContext from "@/contexts/todoContext";
import { Checkbox } from "./ui/checkbox";
import { Trash2 } from 'lucide-react';

function ViewTodo() {
  const { todo: todos, deleteTodo, updateTodo } = useContext(TodoContext) || {};

  if (!Array.isArray(todos)) {
    return <p className="text-gray-500 text-center">No todos available.</p>;
  }
  
  if(todos <=  []){
    return <p className="text-center flex flex-col items-center justify-center min-h-screen text-sky-300 text-5xl font-bold">No todos to show</p>
  }

  return (
    <section className="bg-white shadow-lg rounded-lg p-6 max-w-md min-h-screen mt-10 mb-5 mx-auto">
      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-sky-100 to-sky-400 bg-clip-text text-transparent mb-4">
        Todo List
      </h2>
      <div className="space-y-4">
        {todos.map(todo => (
          <div key={todo._id} className="flex flex-row justify-between items-center p-3 border-b border-gray-200">
            <p className={`text-black text-lg flex-1 ${todo.completed ? 'line-through' : ''}`}>
              {todo.description}
            </p>
            <div className="flex items-center space-x-2">
              <Checkbox checked={todo.completed} onClick={() => updateTodo(todo._id)} />
              <button
                className="text-red-500 hover:text-red-700 transition duration-200"
                onClick={() => deleteTodo(todo._id)}
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ViewTodo;
