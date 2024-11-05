import axios from "axios";

export const apiClient = axios.create ({
    method: "GET",
    baseURL: 'https://dummyjson.com/',
    headers: {
        'Content-Type':'application/json'
    },
})