import { IUser } from "../Interface/user"
import axiosInstance from "./base.services"

export const getUsers = async () => {
    return (await axiosInstance.get<IUser[]>('/users')).data
}