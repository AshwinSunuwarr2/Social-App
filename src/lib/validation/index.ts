import * as z from "zod"

export const SignupValidation = z.object({
    name: z.string().min(2, {message: "Name should be atleast 2 characters"}),
    username: z.string().min(2, {message: "Username should be atleast 2 characters"}),
    email: z.string().email({message: "Email should be valid"}),
    password: z.string().min(6, {message: "Password should be atleast 6 characters"}),
})

export const SigninValidation = z.object({
    email: z.string().email({message: "Email should be valid"}),
    password: z.string().min(6, {message: "Password should be atleast 6 characters"}),
})