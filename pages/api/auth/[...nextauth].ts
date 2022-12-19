import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "../../../server/db/client"

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    })
  ],
  pages: {
    newUser: '/new-user'
  },
  // events: {
  //   signIn: ({ user, account, profile, isNewUser }) => {
  //     console.log(`user: ${user}`)
  //     console.log(`account: ${account}`)
  //     console.log(`profile: ${profile}`)
  //   },
  // }
})