import { CircularProgress, TableCell, TableRow } from "@mui/material"
import Typography from "@mui/material/Typography"
import ProductsIndicator from "@/components/molecules/ProductsIndicator/ProductsIndicator"
import ErrorIcon from "@mui/icons-material/Error"
import palette from "@/theme/palette"
import TableWrapper, { TTableWrapper } from "@/components/organism/Table/Table"
import productsGuards from "@/guards/productsGuard/productsGuards"
import useHandleProducts from "@/hooks/useHandleProducts/useHandleProducts"
import useProductsProvider from "@/hooks/useProductsContext/useProductsContext"

const ProductsList = () => {
  const { setProductPage, currentProductPage } = useHandleProducts()
  const { products, isFetchingProducts, isLoadingProducts, errorProducts } =
    useProductsProvider()

  console.log({ products213: products })
  if (isLoadingProducts) {
    return (
      <ProductsIndicator
        sx={{
          gap: 16,
          mt: 20,
          width: "auto",
          justifyContent: "center",
          alignItems: "center",
        }}
        startNode={<CircularProgress color="success" size={40} />}
      >
        <Typography component="h2" color="primary.main" fontWeight="600">
          Loading...
        </Typography>
      </ProductsIndicator>
    )
  }

  if (isFetchingProducts || !products) {
    // we could also implement skeleton
    return (
      <ProductsIndicator
        sx={{
          gap: 16,
          mt: 20,
          width: "auto",
          justifyContent: "center",
          alignItems: "center",
        }}
        startNode={<CircularProgress color="success" size={40} />}
      >
        <Typography component="h2" color="primary.main" fontWeight="600">
          Refreshing data...
        </Typography>
      </ProductsIndicator>
    )
  }
  if (errorProducts) {
    return (
      <ProductsIndicator
        sx={{
          gap: 5,
          mt: 20,
          width: "auto",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        startNode={
          <ErrorIcon htmlColor={palette.error.main} fontSize="large" />
        }
      >
        <Typography component="h2" color="primary.error" fontWeight="600">
          Error details: {errorProducts.message}
        </Typography>
        <Typography component="h4" color="primary.error" fontWeight="500">
          Failed to load products.
        </Typography>
      </ProductsIndicator>
    )
  }

  if (!products) {
    return (
      <ProductsIndicator
        sx={{
          gap: 5,
          mt: 20,
          width: "auto",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        startNode={<ErrorIcon htmlColor="info" />}
      >
        <Typography component="h2" color="primary.error" fontWeight="600">
          No available products
        </Typography>
      </ProductsIndicator>
    )
  }
  const allowPaginationProps: Pick<
    TTableWrapper,
    "allowPagination" | "currentPage" | "totalPages" | "onChangePagination"
  > = productsGuards(products)
    ? {
        allowPagination: true,
        totalPages: products.total_pages,
        currentPage: currentProductPage,
        onChangePagination: (event, pageNum) => {
          console.log("PAGE CHANGED", { event, pageNum })
          setProductPage(pageNum)
        },
      }
    : {}
  console.log({ products })
  return (
    <>
      <TableWrapper
        {...allowPaginationProps}
        header={
          <>
            <TableCell align="left">ID</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">year</TableCell>
          </>
        }
        rows={
          <>
            {productsGuards(products)
              ? products.data.map(({ id, name, year }) => (
                  <TableRow key={id}>
                    <TableCell align="left">{id}</TableCell>
                    <TableCell align="left">{name}</TableCell>
                    <TableCell align="left">{year}</TableCell>
                  </TableRow>
                ))
              : !Array.isArray(products.data) && (
                  <>
                    {" "}
                    <TableRow>
                      <TableCell key={products.data.id} align="left">
                        {products.data.id}
                      </TableCell>
                      <TableCell align="left">{products.data.name}</TableCell>
                      <TableCell align="left">{products.data.year}</TableCell>
                    </TableRow>
                  </>
                )}
          </>
        }
      />
    </>
  )
}

export default ProductsList
