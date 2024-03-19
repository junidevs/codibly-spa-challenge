import { zodResolver } from "@hookform/resolvers/zod"
import {
  useForm as useHookForm,
  UseFormProps as UseHookFormProps,
} from "react-hook-form"
import { TypeOf, ZodTypeAny } from "zod"

interface UseFormProps<T extends ZodTypeAny>
  extends UseHookFormProps<TypeOf<T>> {
  schema: T
}

const useForm = <T extends ZodTypeAny>({
  schema,
  ...hookFormConfig
}: UseFormProps<T>) => {
  return useHookForm({
    resolver: zodResolver(schema),
    reValidateMode: "onChange",
    mode: "onChange",
    ...hookFormConfig,
  })
}

export default useForm
