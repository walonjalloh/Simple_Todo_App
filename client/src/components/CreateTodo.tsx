import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useState, useContext } from "react";
import TodoContext from "@/contexts/todoContext";
import { ToastContainer } from "react-toastify";

function CreateTodo() {
  const [description, setDescription] = useState<string>("");
  const todo = useContext(TodoContext);

  const handleTodo = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      await todo?.createTodo(description);
      setDescription("");
    } catch (error) {
      console.log(error);
      setDescription("");
    }
  };

  return (
    <section className="min-h-screen">
      <div>
        <h1>Create your todo</h1>
      </div>
      <div className="">
        <form onSubmit={handleTodo}>
          <Label>Description</Label>
          <Input
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button type="submit">add todo</Button>
        </form>
      </div>
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      />
    </section>
  );
}

export default CreateTodo;
