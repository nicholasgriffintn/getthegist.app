import Head from 'next/head';

import { Hero } from '@/common/Hero';

export const Home = () => {
  return (
    <>
      <Head>
        <title>Nicholas Griffin - App Homepage</title>
      </Head>
      <Hero
        title="Welcome to my new app!"
        description="This is about all there is here for now, but I'm sure more content will be coming soon!"
        link={{
          href: 'https://nicholasgriffin.dev',
          text: 'Find out more about me',
          external: true
        }}
      />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <p className="font-semibold lg:w-2/3 mx-auto leading-relaxed title-font text-lg">
              This is where I might place some content at some point...
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
