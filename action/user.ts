"use server";

import connectDB from "@/lib/db";
import { User } from "@/models/User";
import { redirect } from "next/navigation";
import { hash } from "bcryptjs";

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

export { register };
