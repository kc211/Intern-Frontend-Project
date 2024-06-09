import axios from "axios";

export const refreshToken = async () => {
   const refreshToken = localStorage.getItem('refreshToken');
   console.log("from refreshToken function",refreshToken);
   if (!refreshToken) return Promise.reject('No refresh token available');
   return await axios.post("http://localhost:8081/token",{refreshToken})
      .then(res => {
         console.log("hello",res.data);
         const { accessToken } = res.data;
         localStorage.setItem('accessToken', accessToken);
         return accessToken;
      })
      .catch((err) => {
         console.error("failed to refresh token", err);
         return Promise.reject(err); // Ensure promise chain is not broken
      })
};