"use client"

import { ImageWithModal } from "@/components/elements/ImageWithModal"
import { Paths } from "@/config/consts"
import { dummyComics } from "@/dummy"
import { Anchor, Badge, Flex, Group, Image, Paper, ScrollArea, Space, Text } from "@mantine/core"
import { IconCoinFilled, IconHeartFilled } from "@tabler/icons-react"
import Link from "next/link"
import { useState } from "react"
import type { Comic } from "../features/comic/types"

export const MypageContainer = () => {
  const [currentComic, setCurrentComic] = useState<Comic>(dummyComics[0])

  return (
    <>
      <Paper pt={16} pb={12} px={20} shadow="xl" radius="md" key={currentComic.id}>
        <Flex justify="flex-end">
          <Badge ta="right" size="lg" children={currentComic.isPublic ? "公開中" : "非公開"} />
        </Flex>
        <ImageWithModal mt={16} h={200} src={currentComic.thumbnail} fit="contain" />
        <Text mt={16} fz={20} lh="24px" fw="bold" children={currentComic.title} />
        <Flex mt={8} mb={16} gap={8}>
          {currentComic.tags.map((tag) => (
            <Badge bg="gray" children={tag} key={tag} />
          ))}
        </Flex>
        <Anchor component={Link} href={Paths.USER_ACHIVEMENT}>
          <Image src={currentComic.nftImage} m="auto" w="100%" fit="contain" />
        </Anchor>
        <Space h="md" />
        <Anchor component={Link} href={Paths.TOKEN_GRAPH}>
          <Group gap={16}>
            <Text children={`${currentComic.views}回閲覧`} />
            <Flex align="center">
              <IconHeartFilled size="1.3rem" />
              <Text ml={2} children={currentComic.likes} />
            </Flex>
            <Flex align="center">
              <IconCoinFilled size="1.3rem" />
              <Text ml={2} children={currentComic.receivedPOL} />
            </Flex>
          </Group>
        </Anchor>
      </Paper>

      <Text ml={8} mt={40} mb={12} fz={18} fw="bold" children="他の投稿作品" />
      <Paper py={20}>
        <ScrollArea w="100%">
          <Flex gap={20}>
            {dummyComics.map((comic) => (
              <Image
                ml={comic === dummyComics.at(0) ? 20 : 0}
                mr={comic === dummyComics.at(-1) ? 20 : 0}
                h={80}
                w={80}
                fit="contain"
                src={comic.thumbnail}
                key={comic.id}
                onClick={() => setCurrentComic(comic)}
              />
            ))}
          </Flex>
        </ScrollArea>
      </Paper>
    </>
  )
}
