import axios from "axios"
import { IUser } from "../Interface/user"
import axiosInstance from "./base.services"

export const getUsers = async () => {
    return (await axiosInstance.get<IUser[]>('/users')).data
}

export const registerUser = async (user: IUser) => {
    return (await axios.post<IUser>('http://127.0.0.1:8000/users/', user)).data
}