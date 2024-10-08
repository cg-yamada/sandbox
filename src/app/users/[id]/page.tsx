import { Container } from "@mantine/core"
import type { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "クリエイター作品一覧",
  description: "クリエイター作品一覧",
}

export default function Page() {
  return <Container py={40}>クリエイター作品一覧を表示する</Container>
}
