import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
    },
});

export const getItems = async () => api.get('http://localhost:5000/api/items')
