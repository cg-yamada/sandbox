import { Container } from "@mantine/core"
import type { Metadata } from "next/types"
import { CreatorMypageContainer } from "./container"

export const metadata: Metadata = {
  title: "作品一覧（マイページ）",
  description: "作品一覧（マイページ）",
}

export default function Page() {
  return (
    <Container py={40}>
      <CreatorMypageContainer />
    </Container>
  )
}
