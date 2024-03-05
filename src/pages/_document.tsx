import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

// noinspection JSUnusedGlobalSymbols
export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
        <title>
          Blockchain, IT, Web3 Development Company | Blockchain Software
          Developers| Udduq team
        </title>
        <meta name='theme-color' content='white' />
        <link rel='icon' href='./team/favicon.png' type='image/png' />
        <link rel='icon' href='/team/favicon.png' type='image/png' />
        <meta
          property='og:title'
          content='Blockchain, IT, Web3 Development Company | Blockchain Software Developers| Udduq team'
        />
        <meta
          property='og:description'
          content='Production-focused development: blockchain projects, NFT projects, smart contracts, blockchain ecosystem apps, cryptocurrency wallets, and decentralized apps.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='Uddùg' />
        <meta property='og:url' content='https://uddug.com' />
        <meta property='og:image' content='./team/cover.jpg' />
        <meta
          name='twitter:title'
          content='Blockchain, IT, Web3 Development Company | Blockchain Software Developers| Udduq team'
        />
        <meta
          name='twitter:description'
          content='Production-focused development: blockchain projects, NFT projects, smart contracts, blockchain ecosystem apps, cryptocurrency wallets, and decentralized apps.'
        />
        <meta name='twitter:image' content='./team/cover.jpg' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@uddug' />
        <meta
          name='twitter:image:alt'
          content='Uddùg team - we are devoted to creating help humanity get to the future faster'
        />
        <meta
          name='description'
          content='Production-focused development: blockchain projects, NFT projects, smart contracts, blockchain ecosystem apps, cryptocurrency wallets, and decentralized apps.'
        />
        <meta
          name='keywords'
          content='It development team, Nft development team, Blockchain development team, Web3 development team '
        />
      </Head>
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link
        rel='preconnect'
        href='https://fonts.gstatic.com'
        crossOrigin='true'
      />
      <link
        href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap'
        rel='stylesheet'
      />
      <body>
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-59SZ89GV'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
