import { Container } from "@mantine/core"
import type { Metadata } from "next/types"
import { CreateComicForm } from "./CreateComicForm"

export const metadata: Metadata = {
  title: "作品投稿",
  description: "作品投稿",
}

export default function Page() {
  return (
    <Container py={40}>
      <CreateComicForm />
    </Container>
  )
}
