import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import connectDB from "./lib/db"
import { User } from "./models/User"
import { compare } from "bcryptjs"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            name: "Credentials",

            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },

            authorize: async (credentials) => {

                const email = credentials?.email as string | undefined
                const password = credentials?.password as string | undefined

                if (!email || !password) {
                    throw new Error("Please provide an email and password")
                }

                await connectDB()

                const user = await User.findOne({ email }).select("+password +role")

                if (!user) {
                    throw new Error("Invalid email or password")
                }

                if(!user.password){
                    throw new Error("Invalid email or password")
                }

                const isMatch = await compare(password, user.password)

                if (!isMatch) {
                    throw new Error("Invalid email or password")
            }

                const userData = {
                    firstName : user.firstName,
                    lastName : user.lastName,
                    email : user.email,
                    role : user.role,
                    id: user._id
                }

                return userData;
            }
        })
    ],

    pages: {
        signIn: "/login",
    }
})