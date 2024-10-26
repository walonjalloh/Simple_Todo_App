import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import CreateTodo from "./components/CreateTodo";
import ViewTodo from "./components/ViewTodo";
import UserProfile from "./components/UserProfile";
import AuthLayout from "./components/AuthLayout";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route element={<Layout />}>

          {/* Non protected routed */}
          <Route path='/' element={<Hero/>}/>
          <Route path='/login' element={<SignIn/>}/>
          <Route path="/register" element={<SignUp/>}/>


          {/* Protected Route  */}
          <Route element={<AuthLayout/>}>
            <Route path='/user_profile' element={<UserProfile/>}/>
            <Route path='/view_todo' element={<ViewTodo/>}/>
            <Route path='/create_todo' element={<CreateTodo/>}/>
          </Route>


        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
