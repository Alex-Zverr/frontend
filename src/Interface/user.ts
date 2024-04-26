export interface IUserBase {
    username: string
    password: string
    email: string
    active?: boolean
}

export interface IRegisterUser extends IUserBase {
    confirmPassword?: string
}

export interface IUser extends IUserBase {
    id: number
}