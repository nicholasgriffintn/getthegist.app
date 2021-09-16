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
  },

  theme: 'auto',

  debug: false,

  callbacks: {
    async jwt(token, _, account) {
      if (account) {
        token.provider = account.provider;
        token.type = account.type;
        token.id = account.id;
        token.accessToken = account.accessToken;
        token.access_token = account.access_token;
        token.refreshToken = account.refreshToken;
        token.refresh_token = account.refresh_token;
        token.refresh_token_expires_in = account.refresh_token_expires_in;
        token.scope = account.scope;
        token.token_type = account.token_type;
        token.expires_in = account.expires_in;
      }
      return token;
    },
    async session(session, user) {
      session.user = user;
      return session;
    },
  },
});
