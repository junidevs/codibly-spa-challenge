import { useQuery } from "@tanstack/react-query"
import { client } from "@/services/client"

function App() {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await client.get("/products")
      return data
    },
  })
  console.log({ data })
  return <>lets start :D</>
}

export default App
