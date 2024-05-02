export interface ILogin {
    username: string,
    password: string 
}

export interface IToken extends ILogin {
    access_token: string,
    token_type: string
}