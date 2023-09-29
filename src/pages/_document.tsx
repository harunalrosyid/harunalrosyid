import {
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Jeevva</title>
      </Head>
      <body className='bg-gray-800'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
