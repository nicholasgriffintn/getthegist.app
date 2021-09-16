import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      scope: 'read:user',
    }),
  ],

  secret: process.env.NEXT_AUTH_SECRET,

  session: { jwt: true, maxAge: 30 * 24 * 60 * 60 },

  jwt: {
    secret: process.env.NEXT_JWT_AUTH_SECRET,
    encryption: true,
  },

  theme: 'auto',

  debug: false,
});
