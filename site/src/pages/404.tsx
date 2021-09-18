import Head from 'next/head';

import { Hero } from '@/common/Hero';
import { Layout } from '@/common/Layout';

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404 - Not Found - Nicholas Griffin</title>
      </Head>
      <Layout>
        <Hero
          title="404 - Page Not Found"
          link={{
            href: '/',
            text: 'Back to the Homepage',
          }}
        />
      </Layout>
    </>
  );
};

export default NotFound;
