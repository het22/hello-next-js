import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>hello-next-js</title>
        <meta name="description" content="Practice basic usage of Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>header</header>
      <main>main</main>
      <footer>footer</footer>
    </>
  );
};

export default Home;
