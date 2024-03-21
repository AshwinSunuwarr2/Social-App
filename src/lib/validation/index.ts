import * as z from "zod"

export const SignupValidation = z.object({
    name: z.string().min(2, {message: "Name should be atleast 2 characters"}).max(50, {message: "Name should be less than 50 characters"}),
    username: z.string().min(2, {message: "Username should be atleast 2 characters"}).max(50, {message: "Username should be less than 50 characters"}),
    email: z.string().email({message: "Email should be valid"}),
    password: z.string().min(8, {message: "Password should be atleast 8 characters"})
  });