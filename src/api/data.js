import { delUserData, setUserData } from "../utils";
import * as api from "./api";

const endpoint = {
    "login": "/users/login",
    "register": "/users/register",
    "logout": "/users/logout",
}

export async function login(email, password){
    const {_id, userEmail, accessToken} = await api.postRequest(endpoint.login, { email, password });
    setUserData({
        _id, 
        email: userEmail, 
        accessToken
    });
}

export async function register(email, password){
    const {_id, userEmail, accessToken} = await api.postRequest(endpoint.register, { email, password });
    setUserData({
        _id, 
        email: userEmail, 
        accessToken
    });
}

export function logout(){
    api.getRequest(endpoint.logout);
    delUserData();
    
}

