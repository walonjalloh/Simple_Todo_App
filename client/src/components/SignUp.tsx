import { useState } from "react"
import { Link } from "react-router-dom"
import { useContext } from "react"
import AuthContext from "@/contexts/authContext"
import {ToastContainer} from 'react-toastify'
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"


function SignUp() {
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [fullname, setFullname] = useState<string>("")

    const auth = useContext(AuthContext)

    const login = async(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try{
            await auth?.handleRegister(fullname,username,password)
            setFullname('')
            setPassword('')
            setUsername('')
        }catch(error){
            console.log(`error occurred ${error}`)
            setFullname('')
            setPassword('')
            setUsername('')
        }
    }


  return (
    <section className="min-h-screen">
        <div className="flex items-center justify-center">
            <p>create your account</p>
        </div>
        <form onSubmit={login} className="flex flex-col">
            <Label htmlFor="fullname">fullname</Label>
            <Input type="text" value={fullname} required onChange={(e)=>setFullname(e.target.value)} id="fullname" />
            <Label htmlFor="username">username</Label>
            <Input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} required id="username" />
            <Label htmlFor="password">password</Label>
            <Input type="password" id='password' required value={password} onChange={(e)=>setPassword(e.target.value)} />
            <Button type="submit">sign up</Button>
        </form>
        <div className="flex items-center justify-center">
            <Link to='/login'><p>or sign in to an existing account</p></Link>
        </div>
        <ToastContainer 
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        />
    </section>
  )
}

export default SignUp