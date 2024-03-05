import { Component } from 'react';
import { NextPage } from 'next';
import Script from 'next/script';

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
  return getLayout(
    <>
      {/* eslint-disable-next-line @next/next/inline-script-id */}
      <Script type='text/javascript' strategy='lazyOnload'>
        {`  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-59SZ89GV');`}
      </Script>
      {/* eslint-disable-next-line @next/next/inline-script-id */}
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=G-1LQ0CQHBYY`}
      />
      {/* eslint-disable-next-line @next/next/inline-script-id */}
      <Script type='text/javascript' strategy='lazyOnload'>
        {`
                 window.dataLayer = window.dataLayer || [];
                 function gtag(){dataLayer.push(arguments);}
                 gtag('js', new Date());
                 
                 gtag('config', 'G-1LQ0CQHBYY');
                 `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

// noinspection JSUnusedGlobalSymbols
// export function reportWebVitals(metric: unknown): void {
//   if (process.env.NODE_ENV === 'production') {
//     console.info(metric);
//   }
// }

// noinspection JSUnusedGlobalSymbols
export default MyApp;
