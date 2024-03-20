import { makeAutoObservable } from "mobx"

type User = {
    userId: string
    avatar: string
    email: string
    name: string
    surname: string
    patronymic: string
    role: 'user' | 'admin'

}

class UserSlice {
    user?: User 

    constructor() {
        makeAutoObservable(this)
    }
}

const userSlice = new UserSlice();

export {
    userSlice
}

export type {
    User
}