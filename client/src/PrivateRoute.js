import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "./api/auth";

const PrivateRoute = ({ children }) => {
    if (isAuthenticated()) {
        return children;
    } else {
        return <Navigate to="/login" />;
    }
}

export { PrivateRoute };