import { Button, Container, Flex, Loader, Text } from '@mantine/core'
import { Seaport } from '@opensea/seaport-js'
import { ItemType } from '@opensea/seaport-js/lib/constants'
import { ConsiderationInputItem, CreateInputItem } from '@opensea/seaport-js/lib/types'
import { prepareWriteContract, waitForTransaction, writeContract } from '@wagmi/core'
import { Web3Button } from '@web3modal/react'
import { useEffect, useState } from 'react'
import { parseEther } from 'viem'
import { useAccount } from 'wagmi'

import { useEthersSigner } from '@/useEthersSigner'
import { WAGMI_GOTCHI_ABI } from '@/walletProvider'

// const { config, error, isSuccess } = usePrepareContractWrite({
//   abi: WAGMI_GOTCHI_ABI,
//   address: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
//   functionName: 'feed',
// })
// const { write } = useContractWrite(config)

/**
 * @link https://github.com/wagmi-dev/wagmi
 * @link https://wagmi.sh/react/hooks/useContractWrite#functionname
 * @link https://etherscan.io/address/0xecb504d39723b0be0e3a9aa33d646642d1051ee1#code
 */
const Index = () => {
  const { isConnected, address: accountAddress } = useAccount()
  const signer = useEthersSigner()
  const [isLoading, setIsLoading] = useState(false)
  const [err, setErr] = useState('')
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => setIsMounted(true), [])

  const handleContract = async () => {
    try {
      setIsLoading(true)
      const config = await prepareWriteContract({
        abi: WAGMI_GOTCHI_ABI,
        address: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
        functionName: 'feed',
      })
      console.log('success prepareWriteContract')
      const { hash } = await writeContract(config.request)
      console.log('success writeContract')
      await waitForTransaction({ hash })
      console.log('success waitForTransaction')
      return hash
    } catch (error) {
      console.log({ error })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSeaport = async () => {
    try {
      if (!signer || !accountAddress) return
      const seaport = new Seaport(signer, { seaportVersion: '1.5' })

      // 出品するアイテム
      const offer: CreateInputItem[] = [
        {
          amount: parseEther('0.1').toString(),
          token: '0x0000000000000000000000000000000000000000', // MATIC
        },
      ]

      // 対価として受取るアイテム(販売手数料, ロイヤリティ)
      const consideration: ConsiderationInputItem[] = [
        {
          itemType: ItemType.ERC721,
          token: '0x0000000000000000000000000000000000000000', // MATIC
          identifier: '1',
          recipient: accountAddress, // どのアドレスが受け取るか
        },
      ]

      // accountAddress: orderを作成した人を指す？
      const { executeAllActions } = await seaport.createOrder({ offer, consideration }, accountAddress)
      console.log('createOrder')
      const order = await executeAllActions()
      console.log('executeAllActions')

      // accountAddress: 注文履行者(注文を約束する人)
      const { executeAllActions: executeFullfillAllActions } = await seaport.fulfillOrder({ order, accountAddress })
      console.log('fulfillOrder')
      const transaction = await executeFullfillAllActions()
      console.log('executeFullfillAllActions')

      return transaction
    } catch (error) {
      console.log({ error })
      // @ts-ignore
      setErr(String(error?.message))
    } finally {
      setIsLoading(false)
    }
  }

  if (!isMounted) {
    return <Loader />
  }
  return (
    <Container mt={80}>
      {isLoading && <Loader />}
      {err && <Text>{`error: ${err}`}</Text>}
      <Text>{`isConnected: ${isConnected}`}</Text>
      <Text>{`accountAddress: ${accountAddress}`}</Text>
      <Flex my={20} gap={4} align="center" justify="center">
        <Web3Button icon="show" label="ウォレット接続" balance="show" />
        <Button variant="filled" children="wagmi操作" disabled={!isConnected} onClick={handleContract} />
        <Button variant="filled" children="seaport操作" disabled={!isConnected} onClick={handleSeaport} />
      </Flex>
    </Container>
  )
}

export default Index
