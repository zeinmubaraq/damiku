import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className="w-screenpx-10 h-screen pt-48 lg:px-20">
      <Head>
        <title>Damiku</title>
        <meta name="description" content="Dummy API gratis untuk testing dan prototyping" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1 className="text-6xl font-bold lg:text-8xl">Damiku</h1>
        <p className="text-2xl font-semibold lg:text-3xl">
          Dummy API gratis untuk testing dan prototyping.
        </p>
      </div>
    </div>
  );
};

export default Home;
