"use client"

import { Anchor, Button, Checkbox, Container, MantineProvider, TextInput } from "@mantine/core"
import type { ReactNode } from "react"

// default
import "@mantine/core/styles.css"

// components
// import "@mantine/carousel/styles.css"
// import "@mantine/notifications/styles.css"

// original
import "./styles/global.css"

import ActiveClassNames from "./styles/Active.module.css"
import ButtonClassNames from "./styles/Button.module.css"
import TextInputClassNames from "./styles/TextInput.module.css"

/**
 * @see https://mantine.dev/theming/theme-object
 */
export const MantineUIProvider = ({ children }: { children: ReactNode }) => {
  return (
    <MantineProvider
      theme={{
        black: "#404040",
        fontFamily: "Noto Sans JP, sans-serif",
        components: {
          Container: Container.extend({
            defaultProps: {
              size: "lg", // 1140px, p:16px
              // maw: 1140,
              // px: 16,
            },
          }),
          Anchor: Anchor.extend({
            // defaultProps: { c: "#4484BC", underline: "always" },
            defaultProps: { c: "inherit" },
          }),

          Button: Button.extend({
            classNames: ButtonClassNames,
          }),
          TextInput: TextInput.extend({
            defaultProps: { variant: "filled" },
            classNames: TextInputClassNames,
          }),
          Checkbox: Checkbox.extend({
            defaultProps: { color: "#4484BC", iconColor: "white" },
          }),
        },
        /** Press Button(ActionIcon) action style. */
        activeClassName: ActiveClassNames.active,
      }}
    >
      {children}
    </MantineProvider>
  )
}
