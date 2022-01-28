import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials";
import axios from 'axios'


const providers = [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET_ID,
        authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code'
    }),
    Credentials({
        name: 'Credentials',
        authorize: async (credentials) => {
            try {

                const user = await axios.post('http//localhost:3000/register',
                    {
                    user: {
                        email: credentials.email,
                        firstname: credentials.firstname,
                        lastname: credentials.lastname,
                        password: credentials.password,
                    }
                    },
                    {
                    headers: {
                        accept: '*/*',
                        'Content-Type': 'application/json'
                    }
                    })

                if (user) {
                    return user
                } else {
                    return null
                }

            } catch (e) {
                const errorMessage = e.response.data.message
                // Redirecting to the login page with error message          in the URL
                throw new Error(errorMessage + '&email=' + credentials.email)
            }
        },
        debug: process.env.NODE_ENV === 'development',
        secret: process.env.AUTH_SECRET,
        jwt: {
            secret: process.env.JWT_SECRET,
        },
    })
]

const callbacks = {
  // Getting the JWT token from API response
  async jwt(token, user) {
    if (user) {
        token.accesToken = user.data.token
    }
    return token
  },

  async session(session, token) {
    session.accessToken = token.accessToken
    return session
  }
}

const options = {
  providers,
  callbacks,
  pages: {
    error: '/'
  }
}

export default (req, res) => NextAuth(req, res, options)