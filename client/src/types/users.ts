export type User = {
    userName: string,
    email: string,
    name: string,
    lastName: string,
    profilePhoto: string,
    createdAt: Date,
}

export type RegisterForm = Pick<User, "userName" | "email"> & {
    password: string,
}