import { useRoute, useRouter } from "vue-router";
import axios from "axios";


const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
 };

 
 export const handleLogout = () => {
    const router = useRouter();
    logout();
    router.push("/login");
  };

export const refreshToken=async()=>{
    const token = localStorage.getItem('refreshToken');
    if(!token) return Promise.reject('No refresh token available');
   return await axios.post("http://localhost:8081/token",{token})
   .then(res=>{
    const {accessToken}= res.data;
    localStorage.setItem('accessToken',accessToken);
    return accessToken;
   })
   .catch((err)=>
   {
    console.error("failed to refresh token",err);
    return Promise.reject(err); // Ensure promise chain is not broken
   })
}