import { delUserData, setUserData } from "../utils.js";
import { getRequest, postRequest, putRequest, delRequest } from "./api.js";

const endpoint = {
    "login": "/users/login",
    "register": "/users/register",
    "logout": "/users/logout",
}

export async function login(email, password) {
    const { _id, userEmail, accessToken } = await postRequest(endpoint.login, { email, password });
    setUserData({
        _id,
        email: userEmail,
        accessToken
    });
}

export async function register(email, password) {
    const { _id, userEmail, accessToken } = await postRequest(endpoint.register, { email, password });
    setUserData({
        _id,
        email: userEmail,
        accessToken
    });
}

export function logout() {
    getRequest(endpoint.logout);
    delUserData();
}

