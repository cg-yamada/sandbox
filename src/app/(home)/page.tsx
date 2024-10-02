import { Paths } from "@/config/consts"
import { Anchor, Button, Container, Image, Paper, SimpleGrid, Text } from "@mantine/core"
import type { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "Home",
  description: "Home",
}

export default function HomePage() {
  const items = [
    { id: "1", title: "投稿物Title", createrName: "投稿者名称", image: "dummy/noimage.png" },
    { id: "2", title: "投稿物Title", createrName: "投稿者名称", image: "dummy/noimage.png" },
    { id: "3", title: "投稿物Title", createrName: "投稿者名称", image: "dummy/noimage.png" },
    { id: "4", title: "投稿物Title", createrName: "投稿者名称", image: "dummy/noimage.png" },
  ]
  return (
    <Container py={40}>
      <SimpleGrid spacing={20} cols={1}>
        {items.map((item) => (
          <Paper pt={32} pb={12} px={20} shadow="xl" radius="md" key={item.id}>
            <Image mb={16} h="200px" src={item.image} fit="cover" />
            <Anchor href={Paths.COMIC.replace(":id", item.id)}>
              <Text fz={16} lh="20px" fw="bold" children={item.title} />
              <Text ml={2} fz={12} children={item.createrName} />
            </Anchor>
            <SimpleGrid mt={12} cols={2}>
              <Button variant="subtle" size="md" children="いいね" />
              <Button variant="subtle" size="md" children="投げ銭" />
            </SimpleGrid>
          </Paper>
        ))}
      </SimpleGrid>
    </Container>
  )
}
