import { Component } from 'react';
import { NextPage } from 'next';

import type { AppProps } from 'next/app';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout =
    (
      Component as NextPage & {
        getLayout: (page: JSX.Element) => JSX.Element;
      }
    ).getLayout || ((page: JSX.Element) => <>{page}</>);

  // @ts-ignore
  return getLayout(<Component {...pageProps} />);
}

// noinspection JSUnusedGlobalSymbols
export function reportWebVitals(metric: unknown): void {
  if (process.env.NODE_ENV === 'production') {
    console.info(metric);
  }
}

// noinspection JSUnusedGlobalSymbols
export default MyApp;
