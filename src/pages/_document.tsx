import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

// noinspection JSUnusedGlobalSymbols
export default function Document() {
  // noinspection HtmlRequiredTitleElement
  return (
    <Html lang='en'>
      <Head>
        <meta name='theme-color' content='white' />
        <link rel='icon' href='./team/favicon.png' type='image/png' />
        <link rel='icon' href='/team/favicon.png' type='image/png' />
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
