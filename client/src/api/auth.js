import axios from "axios";

const API_URL = "http://localhost:5000/api";

// Function to register new user
export const Register = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/register`, data);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};