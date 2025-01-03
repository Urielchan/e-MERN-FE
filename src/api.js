import axios from "axios";

const customAPI = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'https://e-mern-be.vercel.app/api/v1',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

// Add interceptor to handle CORS preflight
customAPI.interceptors.request.use((config) => {
    config.headers['Access-Control-Allow-Origin'] = 'https://e-commerce-self-seven.vercel.app/';
    return config;
});

// Optional: Add response interceptor to log errors
customAPI.interceptors.response.use(
    response => response,
    error => {
        console.error('API Error:', error.response?.status, error.response?.data);
        return Promise.reject(error);
    }
);

export default customAPI;
