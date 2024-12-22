import { Navigate } from "react-router-dom";
import { isAuthenticated } from "./api/users";

const PrivateRoute = ({ children }) => {
    if (isAuthenticated()) {
        return children;
    } else {
        return <Navigate to="/auth/login" />
    }
}

export { PrivateRoute };