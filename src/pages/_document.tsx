import { ColorSchemeScript } from '@mantine/core'
import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <meta name="description" content="" />
          <ColorSchemeScript />
        </Head>
        <Main />
        <NextScript />
      </Html>
    )
  }
}

export default MyDocument
