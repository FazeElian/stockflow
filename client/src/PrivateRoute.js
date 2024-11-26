import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "./api/auth";

const PrivateRoute = ({ children }) => {
    if (isAuthenticated()) {
        return <Navigate to="/admin/home/" />;
    } else {
        return <Navigate to="/login" />;
    }
}

export { PrivateRoute };