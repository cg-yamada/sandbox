import { Container } from "@mantine/core"
import type { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "投稿実績",
  description: "投稿実績",
}

export default function Page() {
  return <Container py={40}>投稿実績を表示する</Container>
}
