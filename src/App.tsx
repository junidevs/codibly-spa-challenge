import Stack from "@mui/material/Stack"
import { Input } from "@/components/atoms/Input/Input"
import useForm from "@/hooks/useForm/useForm"
import Form from "@/components/organism/Form"

import productSearchSchema from "@/utils/zodSchema/productSearchSchema"
import Typography from "@mui/material/Typography"

import ProductsList from "@/components/organism/ProductsList"
import useProductsProvider from "@/hooks/useProductsContext/useProductsContext"

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
    <Stack>
      <Form methods={methods} onSubmit={onSubmit}>
        <Input
          errorMsg={error?.message}
          {...register("query", {
            onChange,
          })}
        />
        <Typography variant="caption" my={5}>
          Filter input value between 1 - 12
        </Typography>
      </Form>
      {/*here we could also use https://www.npmjs.com/package/react-error-boundary or write custom one*/}
      <ProductsList />
    </Stack>
  )
}

export default App
