import Head from 'next/head';

import { Hero } from '@/common/Hero';
import { Layout } from '@/common/Layout';

const NotFound = () => {
  return (
    <>
      <Head>
        <title>500 - Internal Server Error - Get the Gist</title>
      </Head>
      <Layout>
        <Hero
          title="500 - Internal Server Error"
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
