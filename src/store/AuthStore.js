import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";

export const useAuthStore = defineStore("auth", () => {

    const access_Token = ref(localStorage.getItem('accessToken'));
    const refresh_Token = ref(localStorage.getItem('refreshToken'));
    const user = ref(JSON.parse(localStorage.getItem('user') || '{}'));


    //Login
    const loginUser = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:8081/login', { email, password })
            //res.data is the token
            const bool = true;
            console.log(response.data)
            const { accessToken, refreshToken } = response.data;
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            access_Token.value=accessToken;
            refresh_Token.value=refreshToken;
            console.log("User logged In");
            user.value = {
                email: email,
            }
            localStorage.setItem('user', JSON.stringify(user.value))
            return bool;
        }
        catch {
            (err => console.log("error", err));
        }
    }


    //LogOut
    const logout = async () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('user');
        access_Token.value=undefined;
        refresh_Token.value=undefined;
        console.log(" User logged Out");
        user.value = {};
    }

    //refreshToken Generation
     const GenerateNewAccessToken = async () => {
        const refreshToken = localStorage.getItem('refreshToken');
        console.log("from refreshToken function", refreshToken);
        if (!refreshToken) return Promise.reject('No refresh token available');
        return await axios.post("http://localhost:8081/token", { refreshToken })
            .then(res => {
                console.log("hello", res.data);
                const { accessToken } = res.data;
                localStorage.setItem('accessToken', accessToken);
                access_Token.value=accessToken;
                return accessToken;
            })
            .catch((err) => {
                console.error("failed to refresh token", err);
                return Promise.reject(err); // Ensure promise chain is not broken
            })
    };
    return {
        access_Token,
        refresh_Token,
        user,
        loginUser,
        logout,
        GenerateNewAccessToken
    }
});