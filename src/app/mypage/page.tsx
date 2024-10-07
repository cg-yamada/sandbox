import { Container } from "@mantine/core"
import type { Metadata } from "next/types"
import { MypageContainer } from "./contaner"

export const metadata: Metadata = {
  title: "作品一覧",
  description: "作品一覧",
}

export default function Page() {
  return (
    <Container py={40}>
      <MypageContainer />
    </Container>
  )
}
