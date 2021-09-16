import Head from 'next/head';
import Login from '@/common/Auth/Login';

export const SignIn = () => {
  return (
    <>
      <Head>
        <title>Please Sign In - Get the Gist</title>
      </Head>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <p className="font-semibold lg:w-2/3 mx-auto leading-relaxed title-font text-lg">
              <Login />
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
