import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from "react"
import useDebounce from "@/hooks/useDebounce/useDebounce"
import useProductsQuery from "@/hooks/useProductsQuery"
import { TGetProductsProps } from "@/services/queries/getProducts"

export interface UseHandleProductsReturn {
  products: TResSearchByQuery<TProduct | TProduct[]> | undefined
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  isFetchingProducts: boolean
  isLoadingProducts: boolean
  errorProducts: Error | null
  setProductPage: Dispatch<SetStateAction<number>>
  currentProductPage: number
}

const useHandleProducts = (): UseHandleProductsReturn => {
  const [inputValue, setInputValue] = useState("")
  const [page, setPage] = useState(1)
  const debouncedSearchTerm = useDebounce(inputValue, 1000)
  const limitOfItems = 12

  const queryParameters: TGetProductsProps = {
    query: debouncedSearchTerm,
    per_page: 6,
    enabled: true,
    page,
    // In case if we dont want to have list of data at starting point
    // debouncedSearchTerm.length >= 1 &&
    // debouncedSearchTerm.length <= 2 &&
    // parseFloat(debouncedSearchTerm) <= limitOfItems,
  }

  const { data, isFetching, isLoading, error } =
    useProductsQuery(queryParameters)
  console.log({ data })

  const handleChangeInput = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      const numericValue = parseFloat(value)
      const isValidNumber = !isNaN(numericValue) && numericValue <= limitOfItems

      if (isValidNumber || value === "") {
        setInputValue(value)
      }
    },
    [setInputValue]
  )

  return {
    products: useMemo(() => {
      return data
    }, [data]),
    onChange: handleChangeInput,
    isFetchingProducts: isFetching,
    isLoadingProducts: isLoading,
    errorProducts: error,
    setProductPage: setPage,
    currentProductPage: page,
  }
}

export default useHandleProducts
