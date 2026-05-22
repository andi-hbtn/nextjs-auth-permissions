"use server";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import * as Z from "zod";
import { LoginSchema } from "@/ZodSchema/Auth.Schema";
import { UserType } from "@/DataTypes/data.types";
import { createSession } from "@/lib/session";

export async function RegisterAction(prevState: any, formData: FormData) {

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {

    } catch (error) {

    }
}



export async function LoginAction(prevState: any, formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {

        const validateFields = LoginSchema.safeParse({ email, password });
        if (!validateFields.success) {
            return {
                status: false,
                message: Z.prettifyError(validateFields.error)
            }
        }
        const [row] = await db.query<UserType[]>("SELECT * FROM user WHERE email=?", [email]);
        if (row.length === 0) {
            return {
                message: "You are not registered already",
                status: false
            }
        }
        const user = row[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return {
                status: false,
                message: "Invalid credentials"
            };
        }

        await createSession(String(user.id));

        return {
            status: true,
            message: "Login successful"
        };


    } catch (error) {
        return {
            message: error instanceof Error ? error.message : "Unexpected error",
            status: false
        }
    }
}