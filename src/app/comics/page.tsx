import { Container } from "@mantine/core"
import type { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "作品一覧",
  description: "作品一覧",
}

export default function Page() {
  return <Container py={40}>作品一覧</Container>
}
