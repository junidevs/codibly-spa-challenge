import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react"
import useDebounce from "@/hooks/useDebounce/useDebounce"
import useProductsQuery from "@/hooks/useProductsQuery"
import { TGetProductsProps } from "@/services/queries/getProducts"
import { useLocalStorage } from "react-use"

export interface UseHandleProductsReturn {
  products: TResSearchByQuery<TProduct | TProduct[]> | undefined
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  isFetchingProducts: boolean
  isLoadingProducts: boolean
  errorProducts: Error | null
  setProductPage: Dispatch<SetStateAction<number | undefined>>
  currentProductPage: number | undefined
}

const useHandleProducts = (): UseHandleProductsReturn => {
  const [inputValue, setInputValue] = useState("")

  const [page, setPage] = useLocalStorage("page", 2)

  const debouncedSearchTerm = useDebounce(inputValue, 1000)
  const limitOfItems = 12

  // alternative listening for page & id params
  // this will overwrite data from default
  const queryParams = new URLSearchParams(window.location.search)

  const queryPage = queryParams.get("page")
  const queryId = queryParams.get("id")

  const targetQuery = queryPage || queryId ? inputValue : debouncedSearchTerm

  useEffect(() => {
    // only in case of page params i want to set new values
    if (queryPage !== null || queryId !== null) {
      setPage(Number(queryPage) > 2 ? 1 : Number(queryPage))
      setInputValue(queryId ?? "")
    }
    return () => {
      setInputValue("")
    }
  }, [queryId, queryPage, setPage])

  const queryParameters: TGetProductsProps = {
    // in case of url params I don't wanna to use debounce
    query: targetQuery,
    per_page: 6,
    enabled: true,
    page,
    // In case if we don't want to have list of data at starting point
    // debouncedSearchTerm.length >= 1 &&
    // debouncedSearchTerm.length <= 2 &&
    // parseFloat(debouncedSearchTerm) <= limitOfItems,
  }

  const { data, isFetching, isLoading, error } =
    useProductsQuery(queryParameters)

  const handleChangeInput = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      const numericValue = parseFloat(value)
      const isValidNumber = !isNaN(numericValue) && numericValue <= limitOfItems

      if (isValidNumber) {
        setInputValue(value)
      } else setInputValue("")
    },
    [setInputValue]
  )

  return {
    products: useMemo(() => data, [data]),
    onChange: handleChangeInput,
    isFetchingProducts: isFetching,
    isLoadingProducts: isLoading,
    errorProducts: error,
    setProductPage: setPage,
    currentProductPage: page,
  }
}

export default useHandleProducts
