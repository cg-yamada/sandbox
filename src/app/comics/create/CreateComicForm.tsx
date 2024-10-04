"use client"

import { type CreateComicFormInput, CreateComicFormSchema } from "@/app/features/comic/comicSchema"
import { Paths } from "@/config/consts"
import { Box, Button, Flex, Group, Image, Paper, SimpleGrid, Stack, Text, TextInput } from "@mantine/core"
import { Dropzone, type FileWithPath, IMAGE_MIME_TYPE } from "@mantine/dropzone"
import { useForm, zodResolver } from "@mantine/form"
import { useRouter } from "next/navigation"
import { useState } from "react"

export const CreateComicForm = () => {
  const router = useRouter()
  const form = useForm<CreateComicFormInput>({
    validate: zodResolver(CreateComicFormSchema),
    initialValues: {
      title: "",
      image: "",
      tag: "",
    },
  })

  const handleSubmit = async (input: CreateComicFormInput) => {
    console.log({ input })
    router.push(Paths.USER_COMICS)
  }

  const [files, setFiles] = useState<FileWithPath[]>([])

  const previewImages = files.map((file, i) => {
    const imageUrl = URL.createObjectURL(file)
    return <Image maw={300} key={String(i)} src={imageUrl} onLoad={() => URL.revokeObjectURL(imageUrl)} />
  })

  return (
    <>
      <Paper mb={60} p={16} radius="sm">
        <form onSubmit={form.onSubmit(handleSubmit)} noValidate>
          <Stack gap={24}>
            <Dropzone accept={IMAGE_MIME_TYPE} onDrop={setFiles}>
              <Box p={16} bg="gray.2">
                {previewImages.length === 0 && <Text fw="bold" ta="center" children="画像を選択してください" />}
                <SimpleGrid cols={2}>{previewImages}</SimpleGrid>
              </Box>
            </Dropzone>
            <Group>
              <TextInput w="100%" {...form.getInputProps("title")} label="タイトル" withAsterisk />
              <TextInput w="100%" {...form.getInputProps("tag")} label="タグ" error={!!form.errors.tag} withAsterisk />
            </Group>
            <Flex gap={40} align="center" justify="center">
              <Button children="アーカイブ" variant="filled" type="submit" disabled />
              <Button children="アップロード" variant="filled" type="submit" disabled={files.length === 0} />
            </Flex>
          </Stack>
        </form>
      </Paper>
    </>
  )
}
