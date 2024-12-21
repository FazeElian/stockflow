import { Navigate } from "react-router-dom";
import { isAuthenticated } from "./api/users";

const PrivateRoute = () => {
    if (isAuthenticated()) {
        return ( 
            <Navigate to="/admin/home/" />
        )
    } else {
        return <Navigate to="/auth/login" />
    }
}

export { PrivateRoute };