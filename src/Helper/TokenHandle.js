// import { jwtDecode } from "jwt-decode";

// export const CheckExp = () => {
//     const tokenvalue = localStorage.getItem('token');
//     const decodedToken = jwtDecode(tokenvalue);
//     console.log("decodedd", decodedToken);
//     const { exp } = decodedToken;

//     const currentTime = Math.floor(Date.now() / 1000);

//     if (exp < currentTime) {
//         console.log("Token has expired");
//         return true;
//     } else {
//         console.log("Token is still valid");
//         return false;
//     }
// }

import { jwtDecode } from "jwt-decode";

export const CheckExp = async () => {
    const token = localStorage.getItem('token');
    const refToken = localStorage.getItem('refToken')

    if (!token) {
        // Token is not present
        console.log("Token is not present");
        return false;
    }

    const decodedToken = jwtDecode(token);
    const { exp } = decodedToken;
    const date = new Date(exp * 1000);
    // Format the date as a string
    const tokenExpiry = date.toLocaleString();
    console.log("expiry", tokenExpiry);

    const time = Math.floor(Date.now() / 1000);
    const now = new Date(time * 1000);
    const currentTime = now.toLocaleString();
    console.log("hello current time is:", currentTime);


   

    // Check if the token has expired
    if (tokenExpiry < currentTime) {
        console.log("Token has expired");

        // Token has expired, fetch API
        try {
            const response = await fetch(`https://creddemoapi.azurewebsites.net/api/User/GenerateRefreshToken/${token}/${refToken}`);
            const data = await response.json();
            console.log("generate newtoken success", data);
            const { tokenvalue, refreshtoken } = data;
            localStorage.setItem("token", tokenvalue);
            localStorage.setItem("refToken", refreshtoken);
            return localStorage.getItem("token");
            
        } catch (error) {
            console.error('Error fetching API:', error);
        }
    } else {
        // Token is still valid
        console.log("Token is still valid. No need to fetch the API.");
        return localStorage.getItem("token");
    }
}

