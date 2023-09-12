import type { FC } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { MainLayout } from '@/components/layouts/MainLayout';
import '@/styles/globals.css';
import '@/styles/swiper-restyle.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Hydra</title>
      </Head>
      <MainLayout>
        <Component {...pageProps} />
        <ToastContainer position="bottom-left" autoClose={2000} />
      </MainLayout>
    </>
  );
};

export default App;
