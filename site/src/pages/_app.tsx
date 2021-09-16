import 'tailwindcss/tailwind.css';
import { GlobalStyle } from '@/styles/global';
import type { AppProps } from 'next/app';

import { Provider } from 'next-auth/client';

import { Header } from '@/common/Header';
import { Footer } from '@/common/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <GlobalStyle />
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </Provider>
  );
}
export default MyApp;
