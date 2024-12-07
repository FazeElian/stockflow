import axios from "axios";

const API_URL = process.env.API_URL;

// Function to check if the user is authenticated
export const isAuthenticated = () => {
    const token = localStorage.getItem("authToken");
    if (!token) return false;
  
    try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        return payload.exp > Date.now() / 1000; // Check if the token is not expired
    } catch (error) {
        return false;
    }
};
  
// Function to register new user
export const Register = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/register`, data);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

// Function for login
export const Login = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/login`, data);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};