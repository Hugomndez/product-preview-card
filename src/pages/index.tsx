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
        Preview Gabrielle Essence Eau De Parfum A floral, solar and voluptuous
        interpretation composed by Olivier Polge, Perfumer-Creator for the House
        of CHANEL. $149.99 $169.99 Add to Cart
        <div className='attribution'>
          Challenge by{' '}
          <a
            href='https://www.frontendmentor.io?ref=challenge'
            target='_blank'
            rel='noreferrer'
          >
            Frontend Mentor
          </a>
          . Coded by <a href='#'>Your Name Here</a>.
        </div>
      </main>
    </>
  );
};

export default Home;
