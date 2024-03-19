import useProducts from "@/hooks/useProducts"
import Stack from "@mui/material/Stack"
import { Input } from "@/components/atoms/Input/Input"
import useForm from "@/hooks/useForm/useForm"
import Form from "@/components/organism/Form"
import { useState } from "react"
import useDebounce from "@/hooks/useDebounce/useDebounce"
import productSearchSchema from "@/utils/zodSchema/productSearchSchema"
import Typography from "@mui/material/Typography"

function App() {
  const [inputValue, setInputValue] = useState("")
  const debouncedSearchTerm = useDebounce(inputValue, 1000)
  const limitOfItems = 12
  const { data } = useProducts({
    query: debouncedSearchTerm,
    per_page: 50,
    enabled:
      debouncedSearchTerm.length >= 1 &&
      debouncedSearchTerm.length <= 2 &&
      parseFloat(debouncedSearchTerm) <= limitOfItems,
  })
  console.log({ debouncedSearchTerm })
  console.log({ data })

  const methods = useForm({
    schema: productSearchSchema,
    defaultValues: {
      query: "",
    },
  })
  const onSubmit = (data) => {
    console.log({ data1: data })
  }

  const handleChangeInput = (e) => {
    const value = e.target.value

    const numericValue = parseFloat(value)

    const isValidNumber = !isNaN(numericValue) && numericValue <= limitOfItems

    if (isValidNumber || value === "") {
      setInputValue(value)
    }
  }

  const { error } = methods.getFieldState("query", methods.formState)

  console.log({ error })
  return (
    <Stack>
      <Form methods={methods} onSubmit={onSubmit}>
        <Input
          errorMsg={error?.message}
          {...methods.register("query", {
            onChange: handleChangeInput,
          })}
        />
        <Typography>Get</Typography>
      </Form>
      lets start :D
    </Stack>
  )
}

export default App
