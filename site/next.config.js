module.exports = {
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || 'http://localhost:3000',
  }
  publicExcludes: ['!noprecache/**/*', '!img/**/*'],
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    register: process.env.NODE_ENV === 'production',
    skipWaiting: true,
  },
};
