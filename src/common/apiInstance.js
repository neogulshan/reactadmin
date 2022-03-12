import axios from 'axios';
const apiInstance = axios.create()

apiInstance.interceptors.request.use(
    async (config) => {
        config.baseURL = 'https://beta.careerdec.in/api';
        return config;
    },
    async (error) => {
        return Promise.reject(error);
    }
);

export default apiInstance