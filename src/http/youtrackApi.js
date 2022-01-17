import axios from 'axios'

export const API_URL = 'https://demo-apptrix.myjetbrains.com/youtrack/api/'

const $apiYoutrack = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$apiYoutrack.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer perm:cm9vdA==.NDktNQ==.U9qYToWJGGM0yfVz5wjeYYas7FDvGL`
    return config;
})

export default $apiYoutrack