import { IUser, IUserBase } from "../Interface/user"
import axiosInstance from "./base.services"

export const getUsers = async () => {
    return (await axiosInstance.get<IUser[]>('/users')).data
}

export const registerUser = async (user: IUserBase) => {
    return (await axiosInstance.post<IUser>('/users', user)).data
}