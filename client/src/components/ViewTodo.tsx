import { useContext } from "react";
import TodoContext from "@/contexts/todoContext";
import { Checkbox } from "./ui/checkbox";
import { useState } from "react";
import { Trash2 } from 'lucide-react';
// Testing
// import { fakeTodos } from "@/lib/test";

function ViewTodo() {
  const [strike, setStrike] = useState<boolean>(false)
  const { todo: todos } = useContext(TodoContext) || {};

  if (!Array.isArray(todos)) {
    return <p className="text-gray-500 text-center">No todos available.</p>;
  }

  const handlestrike = ():void => {
    setStrike(!strike)
  }

  // const todosfake = fakeTodos;

  return (
    <section className="bg-white shadow-lg rounded-lg p-6 max-w-md min-h-screen mt-10 mb-5 mx-auto">
      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-sky-100 to-sky-400 bg-clip-text text-transparent mb-4">Todo List</h2>
      <div className="space-y-4">
        {todos.map(todo => (
          <div key={todo.userId} className="flex flex-row justify-between items-center p-3 border-b border-gray-200">
            <p className={`text-black text-lg flex-1  ${strike? 'line-through': ''}`}>{todo.description}</p>
            <div className="flex items-center space-x-2">
              <Checkbox  onClick={handlestrike}/>
              <button className="text-red-500 hover:text-red-700 transition duration-200" onClick={() => {/* Add delete function here */}}>
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
