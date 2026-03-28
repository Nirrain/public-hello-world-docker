import axios from 'axios'

const API_URL = import.meta.env.DEV
    ? (import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1')
    : '/api/v1'

const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

export const fetchHello = async () => {
    const response = await apiClient.get('/hello')
    return response.data
}

export const fetchStatus = async () => {
    const response = await axios.get('http://localhost:8000/')
    return response.data
}

export default apiClient
