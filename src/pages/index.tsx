import { Attribution, ProductCard } from 'components';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Product preview card component</title>
        <meta name='description' content='Frontend Mentor Challenge' />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
      </Head>
      <main>
        <ProductCard />
        <Attribution />
      </main>
    </>
  );
};

export default Home;
