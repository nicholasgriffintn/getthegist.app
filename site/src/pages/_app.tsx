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
      <div className={`AppWrap Session_${!!pageProps.session}`}>
        <div className="AppWrap_Side">
          <Header />
        </div>
        <div className="AppWrap_Main">
          <main className="AppWrap_Main_Content">
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </div>
    </Provider>
  );
}
export default MyApp;
