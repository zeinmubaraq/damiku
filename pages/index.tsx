import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen px-10 pt-48 lg:px-20">
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
        <div className="flex space-x-3 text-xl">
          <Link href="/api/post">
            <a className="text-blue-700 hover:underline hover:underline-offset-4">Post</a>
          </Link>
          <Link href="/api/user">
            <a className="text-blue-700 hover:underline hover:underline-offset-4">User</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
