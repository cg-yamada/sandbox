import { providers } from 'ethers'
import { useMemo } from 'react'
import { useWalletClient, type WalletClient } from 'wagmi'

/**
 * @summary Convert walletClient of wagmi to Signer of ehters.
 * @description
 * wagmi@1系以降はviem製のため、Ethers.Signerを取得できないので専用のhooksを作成
 * 詳細は、下記ドキュメントに記載されている
 * @see https://wagmi.sh/react/ethers-adapters#wallet-client--signer
 */
export const useEthersSigner = ({ chainId }: { chainId?: number } = {}) => {
  const { data: walletClient } = useWalletClient({ chainId })

  const walletClientToSigner = ({ account, chain, transport }: WalletClient) => {
    const network = {
      chainId: chain.id,
      name: chain.name,
      ensAddress: chain.contracts?.ensRegistry?.address,
    }
    // @ts-ignore
    const provider = new providers.Web3Provider(transport, network)
    const signer = provider.getSigner(account.address)
    return signer
  }

  return useMemo(() => (walletClient ? walletClientToSigner(walletClient) : undefined), [walletClient])
}
