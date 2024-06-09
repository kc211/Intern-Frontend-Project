import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";

export const useAuthStore = defineStore("auth", () => {

    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    const user = ref({});

    const loginUser = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:8081/login', { email, password })
            //res.data is the token
            const bool = true;
            console.log(response.data)
            const { accessToken, refreshToken } = response.data;
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            console.log("User logged In");
            user.value = {
                e: email,
            }
            return bool;
        }
        catch {
            (err => console.log("error", err));
        }
    }

        const logout = async () => {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            console.log(" User logged Out");
            user.value = {};
        }
        return {
            loginUser,
            logout,
            user
        }
    });