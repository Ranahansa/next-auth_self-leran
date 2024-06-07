"use server";

import connectDB from "@/lib/db";
import { User } from "@/models/User";
import { redirect } from "next/navigation";
import { hash } from "bcryptjs";
import { signIn } from "@/auth";
import { CredentialsSignin } from "next-auth";


const login = async (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try{
        await signIn("credentials", { 
            redirect: false,
            callbackUrl: "/",
            email, password,
        });

    } catch (error) {
        const someError = error as CredentialsSignin;
    return someError.cause;
    }

    redirect("/");
}

const register = async (formData: FormData) => {
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!firstName || !lastName || !email || !password) {
        throw new Error("Please fill all the fields");
    }

    await connectDB();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error("User already exists");
    }

    const hashedPassword = await hash(password, 10);

    await User.create({ firstName, lastName, email, password: hashedPassword });
    console.log("User registered successfully");
    redirect("/login");
};

export { register, login };
