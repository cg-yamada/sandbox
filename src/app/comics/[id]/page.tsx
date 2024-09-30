import { Container } from "@mantine/core"
import type { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "作品視聴",
  description: "作品視聴",
}

export default function Page() {
  return <Container py={40}>作品視聴する</Container>
}
