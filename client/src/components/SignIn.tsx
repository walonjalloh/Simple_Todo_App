import { useState } from "react";
import { Link } from "react-router-dom";

function SignIn() {
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

  return (
    <section className="min-h-screen">
        <div className="flex items-center justify-center">
            <p>Sign in to view or create todo</p>
        </div>
        <form className="flex flex-col ">
            <label htmlFor="username">Username</label>
            <input type="text" id='username' value={username} onChange={(e)=>setUsername(e.target.value)} required  />
            <label htmlFor="password">password</label>
            <input type="password" required id='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button>Login </button>
        </form>
        <div className="flex items-center justify-center">
            <Link to='/register'><p>or create an account </p></Link>
        </div>
    </section>
  )
}

export default SignIn