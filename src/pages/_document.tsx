import { ColorSchemeScript } from '@mantine/core'
import Document, { Head, Html, Main, NextScript } from 'next/document'

export const generateCsp = (): string => {
  const csp = `
  script-src 'self' 'unsafe-eval' *.walletconnect.org *.walletconnect.com;
  connect-src blob: https://api.web3modal.com wss://relay.walletconnect.org wss://relay.walletconnect.com  wss://*.walletconnect.org *.walletconnect.org *.walletconnect.com 'self';
  frame-src *.walletconnect.org *.walletconnect.com 'self';
  `
  return csp.replace(/\s{2,}/g, ' ').trim()
}

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <meta name="description" content="" />
          <meta httpEquiv="Content-Security-Policy" content={generateCsp()} />
          <ColorSchemeScript />
        </Head>
        <Main />
        <NextScript />
      </Html>
    )
  }
}

export default MyDocument
