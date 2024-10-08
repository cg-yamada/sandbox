"use client"

import { Image, type ImageProps, Modal } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"

export const ImageWithModal = ({ src, ...props }: ImageProps) => {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <>
      <Image onClick={open} src={src} style={{ cursor: "pointer" }} fit="contain" {...props} />
      <Modal size="xl" opened={opened} onClose={close}>
        <Image onClick={open} src={src} w="100%" />
      </Modal>
    </>
  )
}
