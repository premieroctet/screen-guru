import type { AppProps } from 'next/app';
import { init } from '@rematch/core';
import { Provider } from 'react-redux';
import { Analytics } from '@vercel/analytics/react';

import models from '../models';
import 'react-github-corners/dist/GithubCorner.css';
import '../styles/globals.css';

const store = init({
  models,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <Analytics />
    </>
  );
}
