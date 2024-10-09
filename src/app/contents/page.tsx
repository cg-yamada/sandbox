import { ImageWithModal } from "@/components/elements/ImageWithModal"
import { Paths } from "@/config/consts"
import { dummyContents } from "@/dummy"
import { Anchor, Button, Container, Paper, SimpleGrid, Text } from "@mantine/core"
import Link from "next/link"
import type { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "Home",
  description: "Home",
}

export default function Page() {
  return (
    <>
      <Container py={40}>
        <SimpleGrid spacing={20} cols={1}>
          {dummyContents.map((item) => (
            <Paper pt={32} pb={12} px={20} shadow="xl" radius="md" key={item.id}>
              <ImageWithModal mb={16} h="200px" src={item.thumbnail} fit="contain" />
              <Anchor component={Link} href={Paths.CONTENT.replace(":id", item.id)}>
                <Text fz={16} lh="20px" fw="bold" children={item.title} />
                <Text ml={2} fz={12} children={item.creator} />
              </Anchor>
              <SimpleGrid mt={12} cols={2}>
                <Button variant="subtle" size="md" children="いいね" />
                <Button variant="subtle" size="md" children="投げ銭" />
              </SimpleGrid>
            </Paper>
          ))}
        </SimpleGrid>
      </Container>
    </>
  )
}
