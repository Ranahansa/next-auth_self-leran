import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import {options} from "./options";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        // ...add more providers here
    ],
};

export default NextAuth(authOptions);
