import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/layout';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>hello-next-js</title>
        <meta name="description" content="Practice basic usage of Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout></Layout>
    </>
  );
};

export default Home;
