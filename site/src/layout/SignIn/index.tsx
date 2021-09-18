import Head from 'next/head';
import Login from '@/common/Auth/Login';
import Logo from '@/common/Logo';

export const SignIn = () => {
  return (
    <>
      <Head>
        <title>Get the Gist</title>
        <meta
          name="description"
          content="A note taking app that uses GitHub Gists"
        ></meta>
      </Head>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <div className="page-logo">
              <Logo theme="light" />
            </div>
            <div className="prose w-full m-auto note-prose">
              <h1>Welcome to Get the Gist!</h1>
              <p className="font-semibold mx-auto leading-relaxed title-font text-lg">
                Get the Gist is a note-taking app that I built mostly for my
                personal use, but also for a bit of fun. The aim of this app is
                to make a PWA that can be used across all of my devices and take
                advantage of the GitHub Gists service.
              </p>
              <p>
                I am also hoping enhance the Gists service with my own
                functionality and a better viewer for things like code snippets.
              </p>
              <p>
                You can get started by clicking the Sign In button below, which
                will send you over to GitHub for authentication, I only request
                that you provide read access to your email and both read and
                write access to your Gists, for obvious reasons :)
              </p>
              <p className="font-semibold lg:w-2/3 mx-auto leading-relaxed title-font text-lg">
                <Login />
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
