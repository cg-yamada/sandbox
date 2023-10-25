import { MantineProvider, MantineThemeOverride } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { ReactNode } from 'react'

export const MantineUIProvider = ({ children }: { children: ReactNode }) => {
  const theme: MantineThemeOverride = {
    primaryColor: 'primary', // indigo
    colors: {
      primary: ['#EDF2FF', '#DBE4FF', '#BAC8FF', '#91A7FF', '#748FFC', '#5C7CFA', '#4C6EF5', '#4263EB', '#3B5BDB', '#364FC7'],
      github: ['', '', '', '', '', '', '', '', '#0e0c0d', ''],
    },
  }
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Notifications />
      {children}
    </MantineProvider>
  )
}
