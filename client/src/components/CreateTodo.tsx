import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useState, useContext } from "react";
import TodoContext from "@/contexts/todoContext";
import { ToastContainer } from "react-toastify";
import { Plus } from 'lucide-react'; // Importing an icon

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
    <section className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-sky-500 mb-6">Create Your Todo</h1>
        <form onSubmit={handleTodo} className="flex flex-col space-y-4">
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
            <Plus className="h-5 w-5 text-gray-400 ml-2" />
            <Label htmlFor="description" className="sr-only">Description</Label>
            <Input
              id="description"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="flex-1 border-none focus:ring-0"
              placeholder="Enter todo description"
            />
          </div>
          <Button type="submit" className="bg-sky-500 text-white hover:bg-sky-600 transition duration-200">Add Todo</Button>
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
