import 'tailwindcss/tailwind.css';
import { GlobalStyle } from '@/styles/global';
import type { AppProps } from 'next/app';

import { Provider } from 'next-auth/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { UserContextProvider } from '@/context/user';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <Provider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <UserContextProvider>
          <GlobalStyle />
          <div className="RootWrap">
            <Component {...pageProps} />
          </div>
        </UserContextProvider>
      </QueryClientProvider>
    </Provider>
  );
}
export default MyApp;
