import NextAuth, { CredentialsSignin } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import Github from "next-auth/providers/github"
import connectDB from "./lib/db"
import { User } from "./models/User"
import { compare } from "bcryptjs"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [

        Github({

            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),

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
                    throw new CredentialsSignin("Please provide an email and password")
                }

                await connectDB()

                const user = await User.findOne({ email }).select("+password +role")

                if (!user) {
                    throw new Error("Invalid email or password")
                }

                if (!user.password) {
                    throw new Error("Invalid email or password")
                }

                const isMatch = await compare(password, user.password)

                if (!isMatch) {
                    throw new Error("Invalid email or password")
                }

                const userData = {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    role: user.role,
                    id: user._id
                }

                return userData;
            }
        })
    ],

    pages: {
        signIn: "/login",
    }

    callbacks: {
        async session({ session, token }) {
            if (token?.sub && token?.role) {
                session.user.id = token.sub
                session.user.role = token.role
            }

            return session;
        }

        async jwt({ token, user }) {
            if (user) {
                token.role = user.role
            }
            return token
        },
        signIn: async ({ user, account }) => {
            if (account?.provider === "github") {

                try {
                    const { email, name, image, id } = user;
                    await connectDB()
                    const alreadyUser = await User.findOne({ email })

                    if (!alreadyUser) {
                        await User.create({ email, name, image, authProviderId: id })
                    } else {
                        return true;
                    }

                } catch (error) {
                    throw new Error("Invalid email or password")
                }
            }
            if (account?.provider === "credentials") {

                return true;
            }else {
                return false;
            }
        }
    }
})