import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com/"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="icon"
            type="image/png"
            href="/assets/favicon-16x16.png"
            sizes="16x16"
          />
          <link
            rel="icon"
            type="image/png"
            href="/assets/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/assets/favicon-96x96.png"
            sizes="96x96"
          />
        </Head>
        <body>
          <Main />
          <script src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver%2CIntersectionObserverEntry"></script>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
