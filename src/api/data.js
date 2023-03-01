import { delUserData, setUserData } from "../utils.js";
import { getRequest, postRequest, putRequest, delRequest } from "./api.js";

const endpoint = {
    "login": "/users/login",
    "register": "/users/register",
    "logout": "/users/logout",
}

export async function login(email, password) {
    const data = await postRequest(endpoint.login, { email, password });
    setUserData({
        _id:data._id,
        email:data.email,
        accessToken:data.accessToken
    });
}

export async function register(email, password) {
    const data  = await postRequest(endpoint.register, { email, password });
    setUserData({
        _id:data._id,
        email:data.email,
        accessToken:data.accessToken
    });
}

export function logout() {
    getRequest(endpoint.logout);
    delUserData();
}

