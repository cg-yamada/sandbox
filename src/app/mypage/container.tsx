"use client"

import { ImageWithModal } from "@/components/elements/ImageWithModal"
import { Paths } from "@/config/consts"
import { dummyContents } from "@/dummy"
import type { Content } from "@/features/content/types"
import { Anchor, Badge, Flex, Group, Image, Paper, ScrollArea, Space, Text } from "@mantine/core"
import { IconCoinFilled, IconHeartFilled } from "@tabler/icons-react"
import Link from "next/link"
import { useState } from "react"

export const MypageContainer = () => {
  const [currentContent, setCurrentContent] = useState<Content>(dummyContents[0])

  return (
    <>
      <Text ml={4} mb={12} fz={18} fw="bold" children="最新の投稿作品" />
      <Paper pt={16} pb={12} px={20} shadow="xl" radius="md" key={currentContent.id}>
        <Flex justify="flex-end">
          <Badge ta="right" size="lg" children={currentContent.isPublic ? "公開中" : "非公開"} />
        </Flex>
        <ImageWithModal mt={16} h={200} src={currentContent.thumbnail} fit="contain" />
        <Text mt={16} fz={20} lh="24px" fw="bold" children={currentContent.title} />
        <Flex mt={8} mb={16} gap={8}>
          {currentContent.tags.map((tag) => (
            <Badge bg="gray" children={tag} key={tag} />
          ))}
        </Flex>
        <Anchor component={Link} href={Paths.MYPAGE_ACHIVEMENT}>
          <Image src={currentContent.nftImage} m="auto" w={100} fit="contain" />
        </Anchor>
        <Space h="md" />
        <Anchor component={Link} href={Paths.MYPAGE_TOKEN_GRAPH}>
          <Group gap={16}>
            <Text children={`${currentContent.views}回閲覧`} />
            <Flex align="center">
              <IconHeartFilled size="1.3rem" />
              <Text ml={2} children={currentContent.likes} />
            </Flex>
            <Flex align="center">
              <IconCoinFilled size="1.3rem" />
              <Text ml={2} children={currentContent.receivedPOL} />
            </Flex>
          </Group>
        </Anchor>
      </Paper>

      <Text ml={4} mt={40} mb={12} fz={18} fw="bold" children="他の投稿作品" />
      <Paper py={20} shadow="xl" radius="sm">
        <ScrollArea w="100%">
          <Flex gap={20}>
            {dummyContents.map((content) => (
              <Image
                ml={content === dummyContents.at(0) ? 20 : 0}
                mr={content === dummyContents.at(-1) ? 20 : 0}
                h={80}
                w={80}
                fit="contain"
                src={content.thumbnail}
                key={content.id}
                onClick={() => {
                  setCurrentContent(content)
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }}
              />
            ))}
          </Flex>
        </ScrollArea>
      </Paper>
    </>
  )
}
