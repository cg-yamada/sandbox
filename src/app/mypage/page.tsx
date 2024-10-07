import { ImageWithModal } from "@/components/elements/ImageWithModal"
import { Paths } from "@/config/consts"
import { dummyComics } from "@/dummy"
import { Anchor, Badge, Container, Flex, Group, Image, Paper, ScrollArea, Space, Text } from "@mantine/core"
import { IconCoinFilled, IconHeartFilled } from "@tabler/icons-react"
import Link from "next/link"
import type { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "作品一覧",
  description: "作品一覧",
}

export default function Page() {
  // TODO: アイテムの切替は都度APIコール or クライアントで切替
  return (
    <Container py={40}>
      <Paper pt={16} pb={12} px={20} shadow="xl" radius="md" key={dummyComics[0].id}>
        <Flex justify="flex-end">
          <Badge ta="right" size="lg" children={dummyComics[0].isPublic ? "公開中" : "非公開"} />
        </Flex>
        <ImageWithModal mt={16} h={200} src={dummyComics[0].thumbnail} fit="cover" />
        <Text mt={16} fz={20} lh="24px" fw="bold" children={dummyComics[0].title} />
        <Flex mt={8} mb={16} gap={8}>
          {dummyComics[0].tags.map((tag) => (
            <Badge bg="gray" children={tag} key={tag} />
          ))}
        </Flex>
        <Anchor component={Link} href={Paths.USER_ACHIVEMENT}>
          <Image src={dummyComics[0].nftImage} m="auto" w="100%" fit="contain" />
        </Anchor>
        <Space h="md" />
        <Anchor component={Link} href={Paths.TOKEN_GRAPH}>
          <Group gap={16}>
            <Text children={`${dummyComics[0].views}回閲覧`} />
            <Flex align="center">
              <IconHeartFilled size="1.3rem" />
              <Text ml={2} children={dummyComics[0].likes} />
            </Flex>
            <Flex align="center">
              <IconCoinFilled size="1.3rem" />
              <Text ml={2} children={dummyComics[0].receivedPOL} />
            </Flex>
          </Group>
        </Anchor>
      </Paper>

      <Text ml={8} mt={40} mb={12} fz={18} fw="bold" children="他の投稿作品" />
      <Paper py={20} pl={20}>
        <ScrollArea w="100%">
          <Flex gap={20}>
            {dummyComics.map((comic) => (
              <Image mr={comic === dummyComics.at(-1) ? 20 : 0} h={80} w={80} src={comic.thumbnail} key={comic.id} />
            ))}
          </Flex>
        </ScrollArea>
      </Paper>
    </Container>
  )
}
