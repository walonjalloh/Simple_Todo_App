import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "@/contexts/authContext";
import { ToastContainer } from "react-toastify";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-label";

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
        <section className="min-h-screen">
            <div className="flex items-center justify-center">
                <p>Sign in to view or create todo</p>
            </div>
            <form className="flex flex-col" onSubmit={login}>
                <Label htmlFor="username">Username</Label>
                <Input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <Label htmlFor="password">Password</Label>
                <Input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <Button type="submit">Login</Button>
            </form>
            <div className="flex items-center justify-center">
                <Link to="/register">
                    <p>or create an account</p>
                </Link>
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
