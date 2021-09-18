import Head from 'next/head';

export const Loading = () => {
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
            <p className="font-semibold lg:w-2/3 mx-auto leading-relaxed title-font text-lg">
              Loading...
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
