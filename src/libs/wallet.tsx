import { InjectedConnector, mainnet } from '@wagmi/core'
import { EIP6963Connector, walletConnectProvider } from '@web3modal/wagmi'
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { WagmiConfig, configureChains, createConfig } from 'wagmi'
import { polygonMumbai } from 'wagmi/chains'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { publicProvider } from 'wagmi/providers/public'

/**
 * metamaskしか接続できないエラー
 * @see https://github.com/WalletConnect/web3modal/issues/1029
 */
const projectId = 'd85620ed10d973419ed7440fa51a707d'
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
}

/**
 *
 * @see https://github.com/wagmi-dev/wagmi/issues/3130
 * chainは複数指定が必要？
 * TODO: 本番環境向けにpolygonを追加する
 */
const { chains, publicClient } = configureChains([polygonMumbai, mainnet], [walletConnectProvider({ projectId }), publicProvider()])

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [
    new WalletConnectConnector({ chains, options: { projectId, showQrModal: false, metadata } }),
    new EIP6963Connector({ chains }),
    new InjectedConnector({ chains, options: { shimDisconnect: true } }),
    new CoinbaseWalletConnector({ chains, options: { appName: metadata.name } }),
  ],
  publicClient,
})

createWeb3Modal({ wagmiConfig, projectId, chains })

export const WalletProvider = ({ children }: { children: React.ReactNode }) => {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
}
