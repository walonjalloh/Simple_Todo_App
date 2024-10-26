import { useState } from "react"
import { Link } from "react-router-dom"

function SignUp() {
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [fullname, setFullname] = useState<string>("")


  return (
    <section className="min-h-screen">
        <div className="flex items-center justify-center">
            <p>create your account</p>
        </div>
        <form className="flex flex-col">
            <label htmlFor="fullname">fullname</label>
            <input type="text" value={fullname} required onChange={(e)=>setFullname(e.target.value)} id="fullname" />
            <label htmlFor="username">username</label>
            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} required id="username" />
            <label htmlFor="password">password</label>
            <input type="password" id='password' required value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button>sign up</button>
        </form>
        <div className="flex items-center justify-center">
            <Link to='/login'><p>or sign in to an existing account</p></Link>
        </div>
    </section>
  )
}

export default SignUp