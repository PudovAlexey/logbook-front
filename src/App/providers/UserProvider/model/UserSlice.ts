import { makeAutoObservable } from "mobx"

type User = {
    id: string
    email: string
    name: string
    surname: string
    patronymic: string
    role: string
    created_at: string
    updated_at: string
    date_of_birth: string
    access_token: string
}

class UserSlice {
    user?: User 

    constructor() {
        makeAutoObservable(this)
    }

    setUser(user: User) {
        this.user = user
    }
}

const userSlice = new UserSlice();

export {
    userSlice
}

export type {
    User
}