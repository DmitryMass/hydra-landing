import type { FC } from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

const Document: FC = () => {
  return (
    <Html lang="en">
      <Head />
      <body className="dark-theme">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
