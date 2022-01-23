import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"

export default (req, res) => 
    NextAuth(req, res, {
        providers: [
            GoogleProvider({
                clientId: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_SECRET_ID,
                authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code'
            }),
        ],
        debug: process.env.NODE_ENV === 'development',
        secret: process.env.AUTH_SECRET,
        jwt: {
            secret: process.env.JWT_SECRET,
        },
        callbacks: {
            async signIn({ account, profile }) {
                if(account.provider === "google") {
                    return profile.email_verified && profile.email.endsWith("@normandiewebschool.fr")
                }
                return console.log('account not verified')
            },
        }
});