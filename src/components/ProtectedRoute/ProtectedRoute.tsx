import { Navigate } from "react-router-dom";
import { FC } from "react";

interface IProps {
  element: FC
}

function ProtectedRoute ({ element: Component, ...props }: IProps) {
  const user = {
    isAuthorized: true,
  }
  return (
    user.isAuthorized ? <Component {...props} /> : <Navigate to="/auth" replace/>
  )
};

export default ProtectedRoute;