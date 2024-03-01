import {MongoDBAdapter} from '@auth/mongodb-adapter'
import clientPromise from '@/server/lib/mongodb'
import DiscordProvider from 'next-auth/providers/discord'
import NextAuth from 'next-auth'

const authOptions = {
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID ?? '',
            clientSecret: process.env.DISCORD_CLIENT_SECRET ?? '',
        })
    ],
}
export const { handlers: { GET, POST }, auth } = NextAuth(authOptions)