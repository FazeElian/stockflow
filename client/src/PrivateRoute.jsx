import { Navigate } from "react-router-dom";
import { isAuthenticated } from "./api/users";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    if (isAuthenticated()) {
        return children;
    } else {
        return <Navigate to="/auth/login" />
    }
}

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export { PrivateRoute };