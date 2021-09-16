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

  /* callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log(token);
      console.log(user);
      console.log(account);
      console.log(profile);
      console.log(isNewUser);

      const newToken = token;

      if (account && account.access_token) {
        newToken.accessToken = account.access_token;
      }
      return newToken;
    },
    async session({ session, token, user }) {
      console.log(session);
      console.log(token);
      console.log(user);

      const newSession = session;

      if (token && token.accessToken) {
        newSession.accessToken = token.accessToken;
      }

      return newSession;
    },
  }, */
});
