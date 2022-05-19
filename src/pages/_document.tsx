import { Html, Head, Main, NextScript } from 'next/document';

// noinspection JSUnusedGlobalSymbols
export default function Document() {
  // noinspection HtmlRequiredTitleElement
  return (
    <Html lang='en'>
      <Head />
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
      </body>
    </Html>
  );
}
