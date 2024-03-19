import { createContext, ReactNode } from "react"
import useHandleProducts, {
  UseHandleProductsReturn,
} from "@/hooks/useHandleProducts/useHandleProducts"

export const ProductsContext = createContext<
  UseHandleProductsReturn | undefined
>(undefined)

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const {
    products,
    onChange,
    isFetchingProducts,
    isLoadingProducts,
    errorProducts,
    setProductPage,
    currentProductPage,
  } = useHandleProducts()

  return (
    <ProductsContext.Provider
      value={{
        products,
        onChange,
        isFetchingProducts,
        isLoadingProducts,
        errorProducts,
        setProductPage,
        currentProductPage,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
