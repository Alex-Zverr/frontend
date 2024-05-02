import { ILogin, IToken } from "../Interface/auth"
import { IUser, IUserBase } from "../Interface/user"
import axiosInstance from "./base.services"

export const getUsers = async () => {
    return (await axiosInstance.get<IUser[]>('/users', { headers: { Authorization:localStorage.getItem('SavedToken') }})).data
}
export const getCurrentUser = async () => {
    return (await axiosInstance.get<IUser>('/auth/admin', { headers: { Authorization:localStorage.getItem('AccessToken') }})).data
}

export const registerUser = async (user: IUserBase) => {
    return (await axiosInstance.post<IUser>('/users', user)).data
}

export const loginUser = async (user: ILogin) => {
    return (await axiosInstance.post<IToken>('/auth/token', user)).data
}