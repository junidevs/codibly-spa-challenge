import { ReactNode } from "react"

import Stack from "@mui/material/Stack"
import { StackTypeMap } from "@mui/material/Stack/Stack"
import { FormProvider, UseFormReturn } from "react-hook-form"

export type FormProps<T> = {
  children: ReactNode
  methods: UseFormReturn<any> // eslint-disable-line @typescript-eslint/no-explicit-any
  onSubmit: (props?: T | undefined) => void
  stackProps?: StackTypeMap["props"]
  className?: string
}

const Form = <T,>({
  children,
  onSubmit,
  methods,
  stackProps,
  className,
}: FormProps<T>) => {
  return (
    <FormProvider {...methods}>
      <Stack
        {...stackProps}
        className={className}
        component="form"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        {children}
      </Stack>
    </FormProvider>
  )
}

export default Form
