"use client"

import { APP_TITLE, Paths } from "@/config/consts"
import { Anchor, Box, type BoxProps, Container, Flex, Title } from "@mantine/core"
import Link from "next/link"

export const Header = (props: BoxProps) => {
  return (
    <Box style={{ zIndex: 99, backdropFilter: "blur(20px)" }} {...props}>
      <Container py={8}>
        <Flex justify="space-between">
          <Anchor c="white" underline="never" component={Link} href={Paths.HOME}>
            <Title children={APP_TITLE} size="h2" />
          </Anchor>
        </Flex>
      </Container>
    </Box>
  )
}
