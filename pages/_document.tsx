import Document, { DocumentContext, DocumentInitialProps, Html, Head, Main, NextScript  } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon/16x16.ico" />
          <link rel="icon" href="/favicon/16x16.ico" sizes='16x16' />
          <link rel="icon" href="/favicon/32x32.ico" sizes='32x32' />
          <link rel="icon" href="/favicon/48x48.ico" sizes='48x48' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument