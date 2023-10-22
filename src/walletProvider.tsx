// import '@rainbow-me/rainbowkit/styles.css'
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { ReactNode } from 'react'
import { WagmiConfig, mainnet } from 'wagmi'
import { polygonMumbai } from 'wagmi/chains'

const projectId = 'd85620ed10d973419ed7440fa51a707d'
const chains = [mainnet, polygonMumbai]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata: { name: 'sandbox' } })

createWeb3Modal({ wagmiConfig, projectId, chains })

export const WalletProvider = ({ children }: { children: ReactNode }) => {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
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
