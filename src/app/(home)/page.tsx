import { Paths } from "@/config/consts"
import { Anchor, Button, Container, Image, Paper, SimpleGrid, Text } from "@mantine/core"
import type { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "Home",
  description: "Home",
}

export default function HomePage() {
  const items = [
    { id: "1", title: "ワンピース01巻", createrName: "尾田栄一郎", leftImage: "dummy/dummy01.jpg", rightImage: "dummy/dummy03.jpg" },
    { id: "2", title: "ワンピース02巻", createrName: "尾田栄一郎", leftImage: "dummy/dummy02.jpg", rightImage: "dummy/dummy03.jpg" },
    { id: "3", title: "ワンピース03巻", createrName: "尾田栄一郎", leftImage: "dummy/dummy01.jpg", rightImage: "dummy/dummy03.jpg" },
    { id: "4", title: "ワンピース04巻", createrName: "尾田栄一郎", leftImage: "dummy/dummy02.jpg", rightImage: "dummy/dummy03.jpg" },
  ]
  return (
    <Container py={40}>
      <SimpleGrid spacing={20} cols={1}>
        {items.map((item) => (
          <Paper pt={32} pb={12} px={20} shadow="xl" radius="md" key={item.id}>
            <SimpleGrid mb={16} spacing={12} cols={2}>
              <Image h="200px" src={item.leftImage} />
              <Image h="200px" src={item.rightImage} />
            </SimpleGrid>
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
