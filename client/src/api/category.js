import axios from 'axios';

const API_URL = "http://localhost:5000/api/admin/categories";

// Function to get all categories
export const GetAll = async () => {
    try {
        const response = await axios.get(`${API_URL}/`);
        return response.data.categories;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}

// Function to create new category
export const New = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/new`, data);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};
