import type { FC } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { MainLayout } from '../components/layouts/MainLayout';
import '@/src/styles/globals.css';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Hydra</title>
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
};

export default App;
