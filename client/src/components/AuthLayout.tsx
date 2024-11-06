import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "@/contexts/authContext";

function AuthLayout() {
    
  const { isAuthenticated } = useContext(AuthContext) || {};
  const location = useLocation();


  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
export default AuthLayout;
