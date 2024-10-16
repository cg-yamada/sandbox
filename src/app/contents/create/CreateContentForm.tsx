"use client"

import { Paths } from "@/config/consts"
import { type CreateContentFormInput, CreateContentFormSchema } from "@/features/content/contentSchema"
import { Button, Flex, Group, Image, Paper, Stack, Text, TextInput } from "@mantine/core"
import { Dropzone, type FileWithPath, IMAGE_MIME_TYPE } from "@mantine/dropzone"
import { useForm, zodResolver } from "@mantine/form"
import { useRouter } from "next/navigation"
import { useState } from "react"

export const CreateContentForm = () => {
  const router = useRouter()
  const form = useForm<CreateContentFormInput>({
    validate: zodResolver(CreateContentFormSchema),
    initialValues: {
      title: "",
      image: "",
      tag: "",
    },
  })

  const handleSubmit = async (input: CreateContentFormInput) => {
    console.log({ input })
    router.push(Paths.CONTENTS_BY_CREATORS)
  }

  const [currentImageUrl, setCurrentImageUrl] = useState("")

  const handleDrop = (files: FileWithPath[]) => {
    // setCurrentFile(files[0])
    setCurrentImageUrl(URL.createObjectURL(files[0]))
  }

  return (
    <>
      <Paper mb={60} p={16} radius="sm">
        <form onSubmit={form.onSubmit(handleSubmit)} noValidate>
          <Stack gap={24}>
            <Dropzone accept={IMAGE_MIME_TYPE} onDrop={handleDrop}>
              {!currentImageUrl && <Text py={20} bg="gray.2" fw="bold" ta="center" children="画像を選択してください" />}
            </Dropzone>
            {currentImageUrl && <Image m="auto" h={200} fit="contain" src={currentImageUrl} onLoad={() => URL.revokeObjectURL(currentImageUrl)} />}
            <Group>
              <TextInput w="100%" {...form.getInputProps("title")} label="タイトル" withAsterisk />
              <TextInput w="100%" {...form.getInputProps("tag")} label="タグ" error={!!form.errors.tag} withAsterisk />
            </Group>
            <Flex gap={40} align="center" justify="center">
              <Button children="アーカイブ" variant="filled" type="submit" disabled />
              <Button children="アップロード" variant="filled" type="submit" disabled={!currentImageUrl} />
            </Flex>
          </Stack>
        </form>
      </Paper>
    </>
  )
}
