import { useContext } from "react";
import TodoContext from "@/contexts/todoContext";

function ViewTodo() {
  const { todo: todos } = useContext(TodoContext) || {}; 

  
  if (!Array.isArray(todos)) {
    return <p>No todos available.</p>; 
  }

  return (
    <section>
      <div>
        {todos.map(todo => (
          <div key={todo._id}>
            <p>{todo.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ViewTodo;
