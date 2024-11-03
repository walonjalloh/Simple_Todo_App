import { useState } from "react"
import { Menu } from 'lucide-react'
import { Link } from "react-router-dom"

const Navbar = () => {
    const [isOpened, setIsOpened] = useState<boolean>(false)
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

    const handleMobileMenu = () => {
        setIsOpened(!isOpened)
    }
    
   
  return (
    <header className="mx-4 sticky top-0 z-50">
        <nav>
            <div className="flex flex-row justify-between items-center">
                <div>
                    <Link to='/'>
                        <p>Logo</p>
                    </Link>
                </div>
                {!isAuthenticated &&  (
                      <div className="hidden md:flex">
                      <Link to='/login'><p>sign in</p></Link>
                      <Link to='/register'><p>sign up</p></Link>
                  </div>
                )}
                {isAuthenticated && (
                    <div className="hidden md:flex gap-2 items-center">
                        <Link to='/create_todo'><p>create todo</p></Link>
                        <Link to='/view_todo'><p>veiw todo</p></Link>
                        <Link to='/user_profile'><p>profile</p></Link>
                    </div>
                )}
                <div className="md:hidden">
                    <Menu onClick={handleMobileMenu}/>
                </div>
            </div>
        </nav>
        {isOpened && (
            <div>
                 {!isAuthenticated &&  (
                      <div className="flex flex-col items-center">
                      <Link to='/login'><p>sign in</p></Link>
                      <Link to='/register'><p>sign up</p></Link>
                  </div>
                )}
                {isAuthenticated && (
                    <div className="flex flex-col items-center gap-2">
                        <Link to='/create_todo'><p>create todo</p></Link>
                        <Link to='/view_todo'><p>veiw todo</p></Link>
                        <Link to='/user_profile'><p>profile</p></Link>
                    </div>
                )}
            </div>
        )}
    </header>
  )
}

export default Navbar