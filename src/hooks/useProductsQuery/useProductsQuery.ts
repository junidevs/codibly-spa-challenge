import { keepPreviousData, useQuery } from "@tanstack/react-query"
import getProducts, { TGetProductsProps } from "@/services/queries/getProducts"

const useProductsQuery = ({
  query,
  per_page,
  page,
  enabled = false,
}: TGetProductsProps) => {
  return useQuery({
    // we could use something like this to get higher service design abstraction https://github.com/lukemorales/query-key-factory
    queryKey: ["useProducts", query, per_page, page, enabled],
    queryFn: () => getProducts({ query, per_page, page }),
    enabled,
    placeholderData: keepPreviousData,
    staleTime: Infinity,
  })
  // https://docs.github.com/en/rest/using-the-rest-api/using-pagination-in-the-rest-api?apiVersion=2022-11-28
  // here we could create infinite query for fetching more than only first page
}

export default useProductsQuery
