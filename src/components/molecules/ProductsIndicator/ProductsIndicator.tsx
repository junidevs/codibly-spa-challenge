import { StackProps, SxProps } from "@mui/material"
import Stack from "@mui/material/Stack"
import { ReactNode } from "react"

type TProductsLoader = {
  orientation?: StackProps["direction"]
  children?: ReactNode
  sx?: SxProps
  startNode: ReactNode
}
const ProductsIndicator = ({
  orientation = "row",
  sx,
  children,
  startNode,
}: TProductsLoader) => {
  return (
    <Stack flexDirection={orientation} sx={sx}>
      {children}
      {startNode}
    </Stack>
  )
}

export default ProductsIndicator
