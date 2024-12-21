import axios from 'axios';

// Function to register new user
export const Register = async (data) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/auth/register`, data);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};