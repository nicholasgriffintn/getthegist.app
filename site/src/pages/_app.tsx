import 'tailwindcss/tailwind.css';
import { GlobalStyle } from '@/styles/global';
import type { AppProps } from 'next/app';

import { Provider } from 'next-auth/client';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <GlobalStyle />
      <div className="RootWrap">
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}
export default MyApp;
