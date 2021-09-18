import Head from 'next/head';

import { Hero } from '@/common/Hero';

export const Home = () => {
  return (
    <>
      <Head>
        <title>Get the Gist</title>
        <meta
          name="description"
          content="A note taking app that uses GitHub Gists"
        ></meta>
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
            <div className="prose w-full m-auto">
              <h1>Awaiting content...</h1>
              <p>I&apos;m sure something will be here soon :)</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
