import NextAuth from 'next-auth'
import Providers from "next-auth/providers"

export default NextAuth({
    providers: [
      // OAuth authentication providers...
      FacebookProvider({
        clientId: process.env.FACEBOOK_ID,
        clientSecret: process.env.FACEBOOK_SECRET
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET
      }),      
    ]
  })