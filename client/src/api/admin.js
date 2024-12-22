import axios from "axios";

const API_URL = "http://localhost:5000/api/admin";

export const getLoggedInUser = async (token) => {
    try {
        const response = await axios.get(`${API_URL}/admin/home`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        // User data
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
}