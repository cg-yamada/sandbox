import { graphService } from "@/services/graphService"
import { Box, Container } from "@mantine/core"
import type { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "トップ",
  description: "トップ",
}

export default async function HomePage() {
  // const { nodes } = await graphService.getGraph()
  // console.log({ nodes })
  // const res = await graphService.addNode(nodes[2].id)
  // console.log({ node: nodes[2], res })
  // await graphService.importSpreadSheet(
  //   "https://docs.google.com/spreadsheets/d/12N4MrE_zPOf0cZ1L1gNnRymFzmmM5Sa3P14S6A2pHEg/edit?usp=sharing",
  //   // "https://docs.google.com/spreadsheets/d/1qoINtJQMHj7iSwzNChHNvSm7GLWvCM9oMJO_9SMKA50/edit?usp=sharing",
  // )
  return (
    <Container py={40}>
      {/* <Form /> */}
      <Box>
        {/* biome-ignore lint/a11y/useIframeTitle: <explanation> */}
        <iframe src={`https://graphcommons.com/graphs/${graphService.graphId}`} width="800" height="600" />
      </Box>
    </Container>
  )
}
