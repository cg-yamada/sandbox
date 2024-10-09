import { Paths } from "@/config/consts"
import { dummyHistories } from "@/dummy"
import { ActionIcon, Anchor, Container, Image, Paper, ScrollArea, SimpleGrid, Table, TableTbody, TableTd, TableTr, Text } from "@mantine/core"
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
                    <Anchor component={Link} children={<Image src={row.itemImage} h={80} w={80} />} href={Paths.CONTENT.replace(":id", row.itemId)} />
                  </TableTd>
                  <TableTd>
                    <Text fz={12} children={row.createdAt} />
                    <Text children={row.content} />
                  </TableTd>
                  <TableTd>
                    <ActionIcon variant="subtle" children={<Anchor component={Link} children={<IconLine />} href={Paths.TOKEN_GRAPH} />} />
                  </TableTd>
                </TableTr>
              ))}
            </TableTbody>
          </Table>
        </ScrollArea>
      </Paper>
    </Container>
  )
}
