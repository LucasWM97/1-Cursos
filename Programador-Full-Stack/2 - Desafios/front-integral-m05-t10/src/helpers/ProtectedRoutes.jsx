import { Navigate, Outlet } from "react-router-dom";
import { getLocalStorageItem } from "./localStorage";

export function ProtectedRoutes({ redirectTo }) {
  const isAuth = getLocalStorageItem("token");

  return isAuth ? <Outlet /> : <Navigate to={redirectTo} />;
}
