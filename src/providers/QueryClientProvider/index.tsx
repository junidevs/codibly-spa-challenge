import {
  QueryClient,
  QueryClientProvider as ReactQueryClientProvider
} from "@tanstack/react-query"
import { isAxiosError } from "axios"
import { useSnackbar } from "notistack"
import { ReactNode } from "react"

export type TQueryClientProviderProps = {
  children: ReactNode;
  reactQueryClient: QueryClient;
}

const QueryClientProvider = ({
  children,
  reactQueryClient
}: TQueryClientProviderProps) => {
  const snackbar = useSnackbar()

  const onErrorHandler = (error: unknown) => {
    // check if it actually is axios error
    if (isAxiosError(error)) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response) {
        if (Array.isArray(error.response.data.errors)) {
          error.response.data.errors.forEach((error: ErrorResponseFormat) => {
            snackbar.enqueueSnackbar(error.message, {
              variant: "error"
            })
          })
          // error obj is not an array
        } else if (error.response.data.message) {
          snackbar.enqueueSnackbar(error.response.data.message, {
            variant: "error"
          })
          // error obj has not standard structure or fallback
        } else {
          snackbar.enqueueSnackbar(
            error.response.data.error ?? "unknown error",
            {
              variant: "error"
            }
          )
        }
      } else if (error.request) {
        // eslint-disable-next-line no-console
        console.log(error.request)
      } else {
        // eslint-disable-next-line no-console
        console.log("Error", (error as Error)?.message)
      }
      // eslint-disable-next-line no-console
      console.log(error.config)
    }
  }

  reactQueryClient.setDefaultOptions({
    queries: {
      ...reactQueryClient.getDefaultOptions().queries
      // onError(error) {
    },
    mutations: {
      ...reactQueryClient.getDefaultOptions().mutations,
      onError: onErrorHandler
    }
  })

  return (
    <ReactQueryClientProvider client={reactQueryClient}>
      {children}
    </ReactQueryClientProvider>
  )
}

export default QueryClientProvider
