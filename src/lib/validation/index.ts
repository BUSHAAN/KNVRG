import * as z from "zod";

export const SignupValidationSchema = z.object({
    name:z.string().min(4,{message: "Name must be at least 4 characters!!" }),
    username: z
      .string()
      .min(4, { message: "Username must be at least 4 characters!!" }),
    email: z.string().email(),
    password: z.string().min(8,{message: "Password must be at least 8 characters!!"}),
  });

  export const SigninValidationSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8,{message: "Password must be at least 8 characters!!"}),
  });