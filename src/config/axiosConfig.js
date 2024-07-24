import axios from 'axios';
import { useAuthStore } from '@/store/AuthStore';


const api = axios.create({
    baseURL:"http://localhost:8081",//base url
})

axios.interceptors.request.use(config => {
    const token = localStorage.getItem('accessToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

axios.interceptors.response.use(
    response => {
        return response
    },
    async error => {
        const authStore = useAuthStore();
        const originalRequest = error.config;
        if (error.response && error.response.status === 401 && error.response.data.error.code === 401.01 && !originalRequest.timeout) {
            try {
                const newAccessToken = await authStore.GenerateNewAccessToken();
                if (newAccessToken) {
                    // Update headers with new access token
                    originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                    // Retry the original request
                    return api(originalRequest);

                }
            } catch (refreshError) {
                authStore.logout();
                return Promise.reject("refresherror: ", refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default axios;
