"use client"

import { graphService } from "@/services/graphService"
import { Button } from "@mantine/core"

export const Form = () => {
  const onSubmit = async () => {
    const nodesBlob = await (await fetch("/csv/nodes.csv")).blob()
    const nodesFile = new File([nodesBlob], "nodes.csv")

    const edgesBlob = await (await fetch("/csv/edges.csv")).blob()
    const edgesFile = new File([edgesBlob], "edges.csv")
    const formData = new FormData()

    formData.append(
      "operations",
      JSON.stringify({
        query: `
            mutation ImportCSVs($nodes: [Upload], $edges: [Upload], $graphId: ID, $dryRun: Boolean) {
              importCSVs(nodes: $nodes, edges: $edges, graphId: $graphId, dryRun: $dryRun) {
                report {
                  success
                }
              }
            }
          `,
        variables: {
          nodes: null,
          edges: null,
          graphId: graphService.graphId,
          dryRun: false,
        },
      }),
    )

    formData.append(
      "map",
      JSON.stringify({
        "0": ["variables.nodes"],
        "1": ["variables.edges"],
      }),
    )
    formData.append("0", nodesFile)
    formData.append("1", edgesFile)
    console.log({ formData })
    await graphService.importCSV(formData)
  }
  return (
    <>
      <Button onClick={onSubmit}>インポート</Button>
    </>
  )
}
