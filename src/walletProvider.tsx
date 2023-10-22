// import '@rainbow-me/rainbowkit/styles.css'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { ReactNode } from 'react'
import { WagmiConfig, configureChains, createConfig } from 'wagmi'
import { polygonMumbai } from 'wagmi/chains'

const projectId = 'd85620ed10d973419ed7440fa51a707d'
const chains = [polygonMumbai]
const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const config = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
})

export const WalletProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <WagmiConfig config={config}>{children}</WagmiConfig>
      <Web3Modal
        projectId={projectId}
        ethereumClient={new EthereumClient(config, chains)}
        mobileWallets={[
          {
            id: 'metamask',
            name: 'MetaMask',
            links: {
              native: 'metamask://',
              universal: 'https://metamask.app.link/',
            },
          },
        ]}
        explorerRecommendedWalletIds={[
          // metamask
          'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96',
        ]}
      />
    </>
  )
}

export const WAGMI_GOTCHI_ABI = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'caretaker',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'CaretakerLoved',
    type: 'event',
  },
  {
    inputs: [],
    name: 'clean',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'feed',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getAlive',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getBoredom',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getHunger',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getSleepiness',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getStatus',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getUncleanliness',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'love',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'play',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'sleep',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const
