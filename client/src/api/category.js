import axios from 'axios';

const API_URL = "http://localhost:5000/api/admin/categories";

// Function to create new category
export const New = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/new`, data);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};
