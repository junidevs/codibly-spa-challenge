import { client } from "@/services/client"

export type TGetProductsProps = {
  per_page?: number
  query: string
  page?: number
  enabled?: boolean
}

const getProducts = async ({ query, per_page, page }: TGetProductsProps) => {
  const { data } = await client.get<TResSearchByQuery<TProduct | TProduct[]>>(
    `/products`,
    {
      params: {
        id: query, // query from input
        per_page,
        page, // here we could also pass prop "limit" with dynamic select
      },
    }
  )

  return data
}

export default getProducts
