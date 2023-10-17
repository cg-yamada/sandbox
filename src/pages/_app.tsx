import type { AppProps } from 'next/app'

import { MantineUIProvider } from '@/mantine'
import { WalletProvider } from '@/wallet'
import '@mantine/core/styles.css'

export default function App({ pageProps, Component }: AppProps) {
  console.log(`Start ${process.env.NODE_ENV} server ...`)

  return (
    <>
      <MantineUIProvider>
        <WalletProvider>
          <Component {...pageProps} />
        </WalletProvider>
      </MantineUIProvider>
    </>
  )
}
