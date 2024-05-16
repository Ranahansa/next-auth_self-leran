import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const options = {
    providers: [
        GithubProvider({
            profile(profile) {
                console.log("Profile Github :", profile);

                let userRole = "Github User";
                if (profile?.email == "jG5vO@example.com") {
                    userRole = "Admin";
                }
                return {
                    ...profile,
                    role: userRole
                }
            },
            clientId : process.env.GITHUB_ID,
            clientSecret : process.env.GITHUB_SECRET,
        }),

        // GoogleProvider({
        //     profile(profile) {
        //         console.log("Profile Google :", profile);

        //         return {
        //             ...profile,
        //             id: profile.sub,
        //             role: userRole,
        //         }
        //     },
        // })
    ],
    callbacks : {
        async jwt({ token, user }) {
            if (user) token.role = user.role
            return token
        }
    }
}