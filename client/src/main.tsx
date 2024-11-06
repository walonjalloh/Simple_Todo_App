import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext.tsx";
import "react-toastify/dist/ReactToastify.css"
import { TodoProvider } from "./contexts/todoContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <TodoProvider>
          <Routes>
            <Route path='/*' element={<App/>}/>
          </Routes>
        </TodoProvider>
      </AuthProvider>
    </Router>
  </StrictMode>
);
