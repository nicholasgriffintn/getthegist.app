import Head from 'next/head';

import { Hero } from '@/common/Hero';

export const Home = () => {
  return (
    <>
      <Head>
        <title>Nicholas Griffin - App Homepage</title>
      </Head>
      <Hero
        title="Get the Gist?"
        description="Welcome to my new app for taking and managing notes through the GitHub Gists service."
        link={{
          href: 'https://nicholasgriffin.dev',
          text: 'Find out more about me',
          external: true,
        }}
      />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <p className="font-semibold lg:w-2/3 mx-auto leading-relaxed title-font text-lg">
              This is just a side project from myself at the moment, it's really
              just a starter at this point, I'll be updating this soon :).
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
