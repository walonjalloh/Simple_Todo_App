import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "@/contexts/authContext";
import { ToastContainer } from "react-toastify";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-label";
import { User, Lock } from 'lucide-react'; // Importing icons

function SignIn() {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const auth = useContext(AuthContext);

    const login = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        try {
            await auth?.handleLogin(username, password);
            setUsername('');
            setPassword('');
        } catch (error) {
            console.log(`Login failed: ${error}`);
            setUsername('');
            setPassword('');
        }
    };

    return (
        <section className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold text-center text-sky-500 mb-6">Sign In</h2>
                <p className="text-center mb-4">Sign in to view or create todo</p>
                <form className="flex flex-col space-y-4" onSubmit={login}>
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                        <User className="h-5 w-5 text-gray-400 ml-2" />
                        <Label htmlFor="username" className="sr-only">Username</Label>
                        <Input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="flex-1 border-none focus:ring-0"
                        />
                    </div>
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                        <Lock className="h-5 w-5 text-gray-400 ml-2" />
                        <Label htmlFor="password" className="sr-only">Password</Label>
                        <Input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="flex-1 border-none focus:ring-0"
                        />
                    </div>
                    <Button type="submit" className="bg-sky-500 text-white hover:bg-sky-600 transition duration-200">Login</Button>
                </form>
                <div className="flex items-center justify-center mt-4">
                    <Link to="/register" className="text-sky-500 hover:underline">or create an account</Link>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
            />
        </section>
    );
}

export default SignIn;
