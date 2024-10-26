import { Link } from "react-router-dom"

function Hero() {
  return (
    <section className="min-h-screen">
        <main className="flex flex-col gap-2 items-center justify-center">
            <h1>Welcome to Todo App</h1>
            <p>Create and personalize your own todo</p>
            <div>
                <Link to='/view_todo'><button>view todo</button></Link>
                <Link to='/create_todo'><button>Create todo</button></Link>
            </div>
        </main>
    </section>
  )
}

export default Hero