class GraphService {
  graphId: string
  constructor() {
    // this.graphId = "5ae59ed4-bc88-4367-abf8-900f10731b1b"
    this.graphId = "2977a5ec-a34d-498d-8d19-617497c81583"
  }

  async importCSV(body: FormData) {
    const jwtToken = await this.login()

    const response = await fetch("https://graphcommons.com/graphql", {
      method: "POST",
      headers: { Authorization: `Bearer ${jwtToken}` },
      body,
    })

    const { data, errors } = await response.json()
    console.log({ data, errors })
  }

  async importSpreadSheet(spreadSheetUrl: string) {
    const jwtToken = await this.login()

    const response = await fetch("https://graphcommons.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify({
        query: `
          mutation ImportSpreadsheet($url: String!, $graphId: ID, $dryRun: Boolean) {
            importSpreadsheet(url: $url, graphId: $graphId, dryRun: $dryRun) {
              report {
                success
              }
            }
          }`,
        variables: {
          url: spreadSheetUrl,
          graphId: this.graphId,
          dryRun: false,
        },
      }),
    })

    const { data, errors } = await response.json()
    console.log({ data, errors })
  }

  async addNode(updateNodeId: string): Promise<boolean> {
    const jwtToken = await this.login()

    const response = await fetch("https://graphcommons.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify({
        query: `
        mutation UpdateNode($updateNodeId: ID!, $input: NodeUpdatePatchInput) {
          updateNode(id: $updateNodeId, data: $input)
        }
        `,
        variables: {
          updateNodeId,
          input: {
            name: "DUMMY-SAMPLE",
            image: "sample",
            description: "sample",
            reference: "dmse",
          },
        },
      }),
    })

    const res = await response.json()
    console.log({ res })
    return res.data
  }

  async getGraph() {
    const jwtToken = await this.login()

    const response = await fetch("https://graphcommons.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify({
        query: `
          query getGraph($graphId: ID!) {
            result: getGraphById(id: $graphId) {
              graph {
                id
                name
                owner {
                  username
                }
                nodes {
                  id
                  name
                  type {
                    name
                  }
                }
                edges {
                  sourceId
                  targetId
                  type {
                    name
                  }
                }
              }
            }
          }
        `,
        variables: { graphId: this.graphId },
      }),
    })

    const { data, errors } = await response.json()
    if (errors) throw new Error("取得エラーです")
    return data.result.graph
  }

  private async login(): Promise<string> {
    const response = await fetch("https://graphcommons.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `mutation login($username: ID!, $password: String!) {
          JWT: login(loginOrEmail: $username, password: $password)
        }`,
        variables: {
          username: process.env.GRAPH_COMMONS_USERNAME,
          password: process.env.GRAPH_COMMONS_PASSWORD,
        },
      }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const jsonResponse = await response.json()
    console.log({ jwt: jsonResponse.data.JWT })
    return jsonResponse.data.JWT
  }
}

export const graphService = new GraphService()
