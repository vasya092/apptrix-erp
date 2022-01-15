import axios from 'axios'

export const API_URL = 'http://erp.apptrix.ru/api/'

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`
    return config;
})
$api.interceptors.response.use((config) => {
    return config;
},async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true})
            localStorage.setItem('access_token', response.data.accessToken);
            return $api.request(originalRequest);
        } catch (e) {
            localStorage.removeItem('access_token')
            localStorage.removeItem('refresh_token')
        }
    }
    throw error;
})

export default $api;