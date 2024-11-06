
import { User, IdCard, CheckSquare } from 'lucide-react'; 
import { Button } from "./ui/button"; 
import { Card } from "./ui/card"; 
import { useContext } from "react";
import AuthContext from "@/contexts/authContext";

function UserProfile() {
  const { user } = useContext(AuthContext) || {}
  if (!Array.isArray(user)) {
    return <p className="text-5xl my-40 text-red-600 text-center">User Authentication needed</p>;
  }

  return (
    <section className="bg-gradient-to from-sky-100 to-sky-200 min-h-screen flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">User Profile</h1>
      <div className="max-w-2xl w-full bg-white bg-opacity-80 backdrop-blur-lg p-8 rounded-lg shadow-xl flex flex-col">
        <main className="space-y-6">
          {user.map(user => (
            <Card key={user._id} className="p-4 flex flex-col text-black border border-gray-200 rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="flex items-center mb-2">
                <User className="h-8 w-8 text-sky-600 mr-2" />
                <h2 className="text-xl font-semibold">Fullname: <span className="font-normal">{user.fullname}</span></h2>
              </div>
              <div className="flex items-center mb-2">
                <IdCard className="h-8 w-8 text-sky-600 mr-2" />
                <p className="text-lg">Username: <span className="font-medium"><b>@</b>{user.username}</span></p>
              </div>
              <div className="flex items-center mb-2">
                <CheckSquare className="h-8 w-8 text-sky-600 mr-2" />
                <div className="text-lg">
                  <p>User ID: <span className="font-bold">{user._id}</span></p>
                  <p>Todos: <span className="font-normal">{user.todos.join(', ')}</span></p>
                </div>
              </div>
              <Button className="mt-4 bg-sky-600 hover:bg-sky-700 text-white">
                Edit Profile
              </Button>
            </Card>
          ))}
        </main>
      </div>
    </section>
  );
}

export default UserProfile;
