export type User = {
    userName: string,
    email: string,
    name: string,
    lastName: string,
    profilePhoto: string,
    createdAt: Date,
    _id: string
}

export type RegisterForm = Pick<User, "userName" | "email"> & {
    password: string,
}

export type LoginForm = Pick<User, "email"> & {
    password: string,
}