import Stack from "@mui/material/Stack"
import { Input } from "@/components/atoms/Input/Input"
import useForm from "@/hooks/useForm/useForm"
import Form from "@/components/organism/Form"

import productSearchSchema from "@/utils/zodSchema/productSearchSchema"

import ProductsList from "@/components/organism/ProductsList"
import useProductsProvider from "@/hooks/useProductsContext/useProductsContext"
import { memo } from "react"

const App = () => {
  const { onChange } = useProductsProvider()

  const methods = useForm({
    schema: productSearchSchema,
    defaultValues: {
      query: "",
    },
  })

  const { register, getFieldState, formState } = methods
  const onSubmit = (data: unknown) => {
    console.log(data)
  }

  const { error } = getFieldState("query", formState)

  return (
    <Stack
      gap={10}
      px={10}
      sx={{
        height: "100vh",
        backgroundColor: "grey.300",
        justifyContent: "center",
      }}
    >
      <Form methods={methods} onSubmit={onSubmit}>
        <Input
          inputProps={{
            min: 1,
            max: 12,
          }}
          label="Filter data by ID from [ 1 => 12 ]"
          type="number"
          errorMsg={error?.message}
          {...register("query", {
            onChange,
          })}
        />
      </Form>
      {/*here we could also use https://www.npmjs.com/package/react-error-boundary or write custom one*/}
      <ProductsList />
    </Stack>
  )
}

export default memo(App)
