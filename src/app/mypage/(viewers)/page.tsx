import { ImageWithModal } from "@/components/elements/ImageWithModal"
import { Paths } from "@/config/consts"
import { dummyHistories } from "@/dummy"
import { ActionIcon, Anchor, Container, Flex, Image, Paper, ScrollArea, SimpleGrid, Table, TableTbody, TableTd, TableTr, Text } from "@mantine/core"
import { IconLine } from "@tabler/icons-react"
import Link from "next/link"
import type { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "応援履歴",
  description: "応援履歴",
}

export default function Page() {
  return (
    <Container py={40}>
      <Text ml={4} mb={16} fz={18} fw="bold" children="応援履歴" />
      <SimpleGrid cols={3}>
        <Image src="/images/nft.png" />
        <Image src="/images/nft-achivement.png" />
        <Image src="/images/nft-achivement.png" />
        <Text fw="bold" ta="center" children="100獲得" />
        <Text fw="bold" ta="center" children="100獲得" />
        <Text fw="bold" ta="center" children="100獲得" />
      </SimpleGrid>

      <Text ml={4} mt={40} mb={16} fz={18} fw="bold" children="あなたの行動履歴" />
      <Paper px={8} py={20} shadow="xl" radius="sm">
        <ScrollArea h={320}>
          <Table striped>
            <TableTbody>
              {dummyHistories.map((row) => (
                <TableTr key={row.createdAt}>
                  <TableTd>
                    <ImageWithModal src={row.itemImage} h={80} w={80} />
                  </TableTd>
                  <TableTd>
                    <Text fz={12} c="gray.6" children={row.createdAt} />
                    <Anchor
                      style={{ textDecorationColor: "silver" }}
                      underline="always"
                      component={Link}
                      href={Paths.CONTENTS_BY_CREATORS.replace(":id", row.creatorId)}
                    >
                      <Text fz={12} c="gray.6" children={`${row.itemTitle}(${row.creator})`} />
                    </Anchor>
                    <Flex mt={12} justify="space-between">
                      <Text children={row.content} />
                      <ActionIcon variant="subtle" children={<Anchor component={Link} children={<IconLine />} href={Paths.TOKEN_GRAPH} />} />
                    </Flex>
                  </TableTd>
                </TableTr>
              ))}
            </TableTbody>
          </Table>
        </ScrollArea>
      </Paper>

      <Flex mt={20} justify="flex-end">
        <Anchor mr={8} fw="bold" component={Link} href={Paths.CONTENTS} children="Homeへ" />
      </Flex>
    </Container>
  )
}
