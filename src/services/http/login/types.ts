import { HttpStatusCode } from "axios"

export interface ILoginProps{
    login: string
    password: string
}

export interface ILoginResultProps {
    status: HttpStatusCode
    message: string
}