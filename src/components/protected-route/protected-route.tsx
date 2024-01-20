import { Navigate } from "react-router-dom";
import {FC} from "react";

interface ProtectedRouteProps {
  element: FC
}

function ProtectedRoute ({ element: Component, ...props }: ProtectedRouteProps) {
  const user = {
    isAuthorized: true,
  }
  return (
    user.isAuthorized ? <Component {...props} /> : <Navigate to="/auth" replace/>
  )
};

export default ProtectedRoute;