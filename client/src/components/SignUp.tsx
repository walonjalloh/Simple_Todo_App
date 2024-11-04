import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "@/contexts/authContext";
import { ToastContainer } from 'react-toastify';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

function SignUp() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [fullname, setFullname] = useState<string>("");

    const auth = useContext(AuthContext);

    const login = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await auth?.handleRegister(fullname, username, password);
            setFullname('');
            setPassword('');
            setUsername('');
        } catch (error) {
            console.log(`Error occurred: ${error}`);
            setFullname('');
            setPassword('');
            setUsername('');
        }
    };

    return (
        <section className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold text-center text-sky-500 mb-6">Create Your Account</h2>
                <form onSubmit={login} className="flex flex-col space-y-4">
                    <div>
                        <Label htmlFor="fullname">Full Name</Label>
                        <Input 
                            type="text" 
                            value={fullname} 
                            required 
                            onChange={(e) => setFullname(e.target.value)} 
                            id="fullname" 
                            className="border-2 border-gray-300 focus:border-sky-500 transition duration-200"
                        />
                    </div>
                    <div>
                        <Label htmlFor="username">Username</Label>
                        <Input 
                            type="text" 
                            value={username} 
                            required 
                            onChange={(e) => setUsername(e.target.value)} 
                            id="username" 
                            className="border-2 border-gray-300 focus:border-sky-500 transition duration-200"
                        />
                    </div>
                    <div>
                        <Label htmlFor="password">Password</Label>
                        <Input 
                            type="password" 
                            id="password" 
                            required 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            className="border-2 border-gray-300 focus:border-sky-500 transition duration-200"
                        />
                    </div>
                    <Button type="submit" className="bg-sky-500 text-white hover:bg-sky-600 transition duration-200">Sign Up</Button>
                </form>
                <div className="flex items-center justify-center mt-4">
                    <Link to='/login' className="text-sky-500 hover:underline">Or sign in to an existing account</Link>
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

export default SignUp;
