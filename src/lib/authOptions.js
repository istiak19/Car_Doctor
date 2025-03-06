import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { loginUser } from "@/app/actions/auth/loginUser"
import dbConnect, { collectionNames } from "./dbConnect";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials, req) {
                const user = await loginUser(credentials);
                // console.log(user)

                // If no error and we have user data, return it
                if (user) {
                    return user
                }
                // Return null if user data could not be retrieved
                return null
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],
    pages: {
        signIn: '/login'
    },
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            // console.log('callback--->', { user, account, profile, email, credentials })
            if (account) {
                const { provider, providerAccountId } = account;
                const { email: user_email, name, image } = user;
                const userCollection = dbConnect(collectionNames.test_users);
                const existingUser = await userCollection.findOne({ providerAccountId });
                if (!existingUser) {
                    const payload = { provider, providerAccountId, email: user_email, name, image };
                    await userCollection.insertOne(payload);
                }
            }
            return true
        },
    },
};