import { useState } from "react";
import { Menu } from 'lucide-react';
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Navbar = () => {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);

    const handleMobileMenu = () => {
        setIsOpened(!isOpened);
    };

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <nav className="max-w-7xl mx-auto px-4">
                <div className="flex flex-row justify-between items-center py-2">
                    <div>
                        <Link to="/">
                            <p className="text-2xl font-bold text-sky-500">Logo</p>
                        </Link>
                    </div>
                    <div className="hidden md:flex space-x-6">
                        {!isAuthenticated ? (
                            <div className="flex gap-4 items-center">
                                <Link to="/login" className=" hover:text-sky-500 transition duration-200"><Button className="border-sky-300 bg-sky-300 font-bold px-4 ">sign in</Button></Link>
                                <Link to="/register" className="text-black hover:text-sky-500 transition duration-200 font-bold "><Button>sign up</Button></Link>
                            </div>
                        ) : (
                            <div className="flex gap-2">
                                <Link to="/create_todo" className="text-black hover:text-sky-500 transition duration-200 border-2 border-black/50 py-1 px-3 rounded-md font-bold">Create Todo</Link>
                                <Link to="/view_todo" className="text-white hover:text-sky-500 transition duration-200 border-2 border-black/50 py-1 px-3 rounded-md border-sky-300 bg-sky-300 font-bold ">View Todo</Link>
                                <Link to="/user_profile" className="text-white font-bold hover:text-sky-500 transition duration-200 border-2 border-black bg-black py-1 px-3 rounded-md">Profile</Link>
                            </div>
                        )}
                    </div>
                    <div className="md:hidden">
                        <Menu onClick={handleMobileMenu} className="text-black hover:text-sky-500 transition duration-200 cursor-pointer" />
                    </div>
                </div>
            </nav>
            {isOpened && (
                <div className="md:hidden bg-white shadow-md">
                    <div className="flex flex-col items-center py-4 space-y-2">
                        {!isAuthenticated ? (
                            <div className="flex flex-col items-center gap-2 w-full">
                                <Link to="/login"><Button className="border  border-sky-300 bg-sky-300 text-white px-10 py-1 hover:text-sky-700 font-bold">sign in</Button></Link>
                                <Link to="/register" ><Button className="px-10 py-1 hover:text-sky-700 font-bold">sign up</Button></Link>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center gap-2">
                               <div className="flex gap-4 ">
                               <Link to="/create_todo" className="text-white border-2 border-black bg-black py-1 px-6 rounded-md hover:text-sky-500 transition duration-200 font-bold">Create Todo</Link>
                               <Link to="/view_todo" className="text-black hover:text-sky-500 transition duration-200 border-2 border-black/50 py-1 px-6 rounded-md font-bold">View Todo</Link>
                               </div>
                                <Link to="/user_profile" className=" hover:text-sky-700 transition duration-200 border-2 border-black/50 py-1 px-6 rounded-md border-sky-300 bg-sky-300 text-white font-bold">Profile</Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
