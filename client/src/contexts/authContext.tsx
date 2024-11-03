import { createContext,useState } from "react";
import { axiosInstanceUser } from "@/api/axiosInstance";
import { toast } from "react-toastify";


type AuthType = {
    handleLogin: (password:string, username:string) => Promise<void>,
    handleRegister: (fullname:string, username:string, password:string) => Promise<void>
    token:string,
    user:User[],
    userId:string
}

type User = {
    fullname:string,
    _id:string,
    username:string
}

const AuthContext = createContext<AuthType | undefined>(undefined)

export const AuthProvider = ({children}:{children:React.ReactNode}) => {
    const [user, setUser] = useState<User[]>([])
    const [userId, SetUserId] = useState<string>('')
    const [token, setToken] = useState<string>('')

    const handleLogin = async(username:string, password:string):Promise<void> => {
       try{
        const newUser = {
            username: username,
            password: password
        }
        const response = await axiosInstanceUser.post('/login', newUser)
        console.log(`successful ${response.data.accessToken}`)
        setUser(user.concat(response.data.user))
        SetUserId(userId.concat(response.data.user._id))
        setToken(token.concat(response.data.accessToken))
        toast('login successful')
       }catch(error){
        console.log(`error occurred in logging ${error}`)
        toast("login failed")
       }
    }

    // console.log(token,user,userId)

    const handleRegister = async(fullname:string, username:string, password:string,):Promise<void> =>{
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
        handleRegister,
        token,
        user,
        userId
    }}>
        {children}
    </AuthContext.Provider>
   ) 
}

export default AuthContext