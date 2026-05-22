import * as Z from "zod";

export const LoginSchema = Z.object({
    email: Z.email()
        .nonempty("email should not be empty"),
    password: Z.string()
        .nonempty({ error: "Password should not be empty" })
        .min(5, { error: "Password is to short" })
        .max(10, { error: "Password is to long" })
});