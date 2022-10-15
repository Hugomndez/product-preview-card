import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html dir='ltr'>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
