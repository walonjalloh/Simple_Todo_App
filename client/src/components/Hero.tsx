import { Link } from "react-router-dom";
import { Button } from "./ui/button"; 
import { ArrowRight } from "lucide-react"; 

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-sky-100 to-sky-300 text-white">
      <main className="text-center p-10">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Welcome to Todo App</h1>
        <p className="text-xl mb-6 drop-shadow-md">Create and personalize your own todo</p>
        <div className="flex justify-center gap-6">
          <Link to='/view_todo'>
            <Button className="bg-white text-sky-600 hover:bg-gray-100 transition duration-200 flex items-center">
              View Todo <ArrowRight className="ml-2" />
            </Button>
          </Link>
          <Link to='/create_todo'>
            <Button className="bg-black text-white hover:bg-gray-800 transition duration-200 flex items-center">
              Create Todo <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </main>
    </section>
  );
}

export default Hero;
