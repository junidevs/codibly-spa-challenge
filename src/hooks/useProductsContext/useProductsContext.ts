import { useContext } from "react"
import { ProductsContext } from "@/providers/ProductsProvider/ProductsProvider"
import { UseHandleProductsReturn } from "@/hooks/useHandleProducts/useHandleProducts"

const useProductsProvider = (): UseHandleProductsReturn => {
  const context = useContext(ProductsContext)
  if (context === undefined) {
    throw new Error(
      "useProductsProvider must be used within a ProductsProvider"
    )
  }
  return context
}

export default useProductsProvider
