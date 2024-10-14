import { Paths } from "@/config/consts"
import { Anchor, Container, Flex, Image, Paper, ScrollArea, SimpleGrid, Stack, Text } from "@mantine/core"
import Link from "next/link"
import type { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "投稿実績",
  description: "投稿実績",
}

export default function Page() {
  const dummyNFTs = ["1", "2", "3", "4", "5", "6", "7", "8"]
  return (
    <Container py={40}>
      <Text ml={4} mb={16} fz={18} fw="bold" children="達成状況" />
      <SimpleGrid cols={3}>
        <Image src="/images/nft.png" />
        <Image src="/images/nft-achivement.png" />
        <Image src="/images/nft-achivement.png" />
        <Text fw="bold" ta="center" children="100獲得" />
        <Text fw="bold" ta="center" children="100獲得" />
        <Text fw="bold" ta="center" children="100獲得" />
      </SimpleGrid>

      <Text ml={4} mt={40} mb={16} fz={18} fw="bold" children="これまでに獲得したNFT" />
      <Paper pl={32} shadow="xl" radius="sm">
        <ScrollArea h={320}>
          <Stack>
            {dummyNFTs.map((v) => (
              <Flex mt={v === dummyNFTs.at(0) ? 20 : 0} mb={v === dummyNFTs.at(-1) ? 20 : 0} gap={28} align="center" key={v}>
                <Anchor component={Link} href={Paths.TOKEN_GRAPH}>
                  <Image src="/images/nft-achivement.png" h={80} w={80} />
                </Anchor>
                <Text fz={14} fw="bold" children="2024年01月12日" />
              </Flex>
            ))}
          </Stack>
        </ScrollArea>
      </Paper>
      <Flex mt={20} justify="flex-end">
        <Anchor mr={8} fw="bold" component={Link} href={Paths.CONTENTS} children="Homeへ" />
      </Flex>
    </Container>
  )
}
