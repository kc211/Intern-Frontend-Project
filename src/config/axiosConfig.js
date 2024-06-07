
import axios from 'axios';
import { refreshToken } from '@/auth';

axios.interceptors.request.use(config => {
    const token = localStorage.getItem('accessToken');
    console.log("axios Token")
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    // console.log("config " + config.headers)
    return config;
}, error => {
    return Promise.reject(error);
});

axios.interceptors.response.use(
    response => {
        console.log(response)
        return response
    },
    async error => {
        const originalRequest = error.config;
        console.log("An error occured") 
        console.log(error.response)
        if (error.response && error.response.status === 401 && error.response.data.error.code===401.01 && !originalRequest.timeout)  {
            console.log("in the error");
            
            try {
                const newAccessToken = await refreshToken();
                if (newAccessToken) {

                    originalRequest._retry = true; // Set retry flag to true
                    // Update headers with new access token
                    originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                    // Retry the original request
                    console.log("hello error removed");
                    // return axios(originalRequest);
                    
                }
            } catch (refreshError) {
                return Promise.reject("refresherror: ",refreshError);
            }
        }
     
            return Promise.reject(error);
        }
);

export default axios;
