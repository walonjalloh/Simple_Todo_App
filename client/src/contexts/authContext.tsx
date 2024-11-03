import { createContext,useState } from "react";
import { axiosInstanceUser } from "@/api/axiosInstance";
import { toast } from "react-toastify";


type AuthType = {
    handleLogin: (password:string, username:string) => Promise<void>,
    handleRegister: (fullname:string, username:string, password:string) => Promise<void>
}

const AuthContext = createContext<AuthType | undefined>(undefined)

export const AuthProvider = ({children}:{children:React.ReactNode}) => {
    const [user, setUser] = useState([])
    const [token, setToken] = useState<string>('')

    const handleLogin = async(password:string,username:string):Promise<void> => {
       try{
        const newUser = {
            username,
            password
        }
        const response = await axiosInstanceUser.post('/login', newUser)
        console.log(`successful ${response.data}`)
        setUser(user.concat(response.data.user))
        setToken(token.concat(response.data.accessToken))
        toast('login successful')
       }catch(error){
        console.log(`error occurred in logging ${error}`)
        toast("login failed")
       }
    }

    console.log(token,user)

    const handleRegister = async(username:string, password:string, fullname:string):Promise<void> =>{
        try {
            const newUser = {
                fullname,
                username,
                password
            }
            const response =  await axiosInstanceUser.post('/register', newUser)
            console.log(`successful ${response.data}`)
            toast('register sucessful')
        }catch(error){
            console.log(`error occurred ${error}`)
            toast('resgister failed')
        }
    }



   return(
    <AuthContext.Provider value={{
        handleLogin,
        handleRegister
    }}>
        {children}
    </AuthContext.Provider>
   ) 
}

export default AuthContext