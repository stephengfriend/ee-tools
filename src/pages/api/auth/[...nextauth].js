import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import Adapter from '@next-auth/faunadb-adapter'
import faunadb from 'faunadb'

const faunaClient = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET_KEY,
})

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/configuration/providers
  providers: [
    Providers.Discord({
      clientId: process.env.NEXTAUTH_DISCORD_ID,
      clientSecret: process.env.NEXTAUTH_DISCORD_SECRET,
    }),
  ],
  adapter: Adapter({ faunaClient }),
})
