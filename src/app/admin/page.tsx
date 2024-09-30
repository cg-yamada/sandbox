import { Container } from "@mantine/core"
import type { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "実績確認",
  description: "実績確認",
}

export default function Page() {
  return <Container py={40}>実績確認する</Container>
}
