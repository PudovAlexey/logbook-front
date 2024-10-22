type SubmitChangePasswordParams = {
    email: string;
   body: {
    secretCode: string;
    password: string;
    confirmPassword: string
   }
};

type LoginParams = {
    body: {
        email: string,
        password: string
    }
}

type RefreshTokensParams = {
    refreshToken: string,
    uuid: string
}

type RequestVerificationCodeParams = {
    email: string
}

type RemoveUserParams = {
    id: string
}

type RegisterUserParams = {
    body: {
        dateOfBirth: string
        email: string
        name: string
        password: string
        confirmPassword: string
        patronymic?: string
        surname?: string
    }
}

type RegisterVerifyParams = {
    id: string,
    body: {
        verifyCode: number
    }
}

type UserResponseSchema = {
    avatar_id: number,
    created_at: string,
    date_of_birth: string,
    email: string,
    id: string,
    is_verified: boolean,
    name: string,
    password: string,
    patronymic: string,
    role: string,
    surname: string,
    updated_at: string
}

export type {
    SubmitChangePasswordParams,
    RefreshTokensParams,
    RequestVerificationCodeParams,
    RemoveUserParams,
    LoginParams,
    RegisterUserParams,
    RegisterVerifyParams,
    UserResponseSchema,
};
