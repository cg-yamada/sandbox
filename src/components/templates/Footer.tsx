import { Paths } from "@/config/consts"
import { Anchor, Box, SimpleGrid } from "@mantine/core"

export function Footer() {
  return (
    <Box bg="#eceef1" pos="sticky" bottom={0} style={{ zIndex: 99 }}>
      <SimpleGrid cols={3} spacing={2}>
        <Box py={20} ta="center" bg="white">
          <Anchor c="black" href={Paths.USER_COMICS} children="作品一覧" />
        </Box>
        <Box py={20} ta="center" bg="white">
          <Anchor c="black" href={Paths.COMIC_CREATE} children="作品投稿" />
        </Box>
        <Box py={20} ta="center" bg="white">
          <Anchor c="black" href={Paths.TOKEN_GRAPH} children="TokenGraph" />
        </Box>
      </SimpleGrid>
    </Box>
  )
}
