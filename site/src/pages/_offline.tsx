import Head from 'next/head';

import { Hero } from '@/common/Hero';
import { Layout } from '@/common/Layout';

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Offline - Get the Gist</title>
      </Head>
      <Layout>
        <Hero
          title="Sorry, this page isn't available offline"
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
