import axios from "axios";
import { getSession } from "./Session";
const user =getSession();
const token = user ? user.AccessToken : "";
export const authAxios = axios.create({
    baseURL: 'https://localhost:44398/api/',
    headers: {
        Authorization: `${token}`
    }   //the token is a variable which holds the token
});