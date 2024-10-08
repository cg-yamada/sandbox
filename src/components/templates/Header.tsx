"use client"

import { Paths } from "@/config/consts"
import { Anchor, Box, Button, Container, Flex, Text } from "@mantine/core"
import Link from "next/link"
import { useRouter } from "next/navigation"

export const Header = () => {
  const router = useRouter()
  return (
    <Box bg="white" pos="sticky" top={0} style={{ zIndex: 99 }}>
      <Container py={8}>
        <Flex align="center" justify="space-between">
          <Anchor c="black" underline="never" component={Link} href={Paths.MYPAGE}>
            <Text fz={16} fw="bold" children="テスト太郎" />
            <Text fz={12} children="0x00000000000000000000" />
          </Anchor>
          <Button onClick={() => router.push(Paths.ADMIN)} variant="filled" children="管理者機能" />
        </Flex>
      </Container>
    </Box>
  )
}
