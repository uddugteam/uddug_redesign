import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

// noinspection JSUnusedGlobalSymbols
export default function Document() {
  return (
    <Html lang='en'>
      <Head>
          {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
          <title>Blockchain, IT, Web3 Development Company | Blockchain Software Developers| Udduq team</title>
          <meta name='theme-color' content='white' />
          <link rel='icon' href='./team/favicon.png' type='image/png' />
          <link rel='icon' href='/team/favicon.png' type='image/png' />
          <meta property="og:title" content="Blockchain, IT, Web3 Development Company | Blockchain Software Developers| Udduq team"/>
          <meta property="og:description" content="Production-focused development: blockchain projects, NFT projects, smart contracts, blockchain ecosystem apps, cryptocurrency wallets, and decentralized apps."/>
          <meta property="og:type" content="website"/>
          <meta property="og:site_name" content="Uddùg"/>
          <meta property="og:url" content="https://uddug.com"/>
          <meta property="og:image" content="./team/cover.jpg"/>
          <meta name="twitter:title" content="Blockchain, IT, Web3 Development Company | Blockchain Software Developers| Udduq team"/>
          <meta name="twitter:description" content="Production-focused development: blockchain projects, NFT projects, smart contracts, blockchain ecosystem apps, cryptocurrency wallets, and decentralized apps."/>
          <meta name="twitter:image" content="./team/cover.jpg"/>
          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:site" content="@uddug"/>
          <meta name="twitter:image:alt" content="Uddùg team - we are devoted to creating help humanity get to the future faster"/>
          <meta name="description" content="Production-focused development: blockchain projects, NFT projects, smart contracts, blockchain ecosystem apps, cryptocurrency wallets, and decentralized apps."/>
          <meta name="keywords" content="It development team, Nft development team, Blockchain development team, Web3 development team "/>
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
        <Main />
        <NextScript />
        <script
          defer={true}
          type='text/javascript'
          src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'
        ></script>
        <script type='text/javascript'>
          {`(function($) {window.fnames = new Array();window.ftypes = new Array();fnames[0] = 'EMAIL';ftypes[0] = 'email';fnames[1] = 'FNAME';ftypes[1] = 'text';fnames[2] = 'LNAME';ftypes[2] = 'text';fnames[3] = 'ADDRESS';ftypes[3] = 'address';fnames[4] = 'PHONE';ftypes[4] = 'phone';fnames[5] = 'BIRTHDAY';ftypes[5] = 'birthday';}(jQuery));var $mcj = jQuery.noConflict(true);`}
        </script>
      </body>
    </Html>
  );
}
