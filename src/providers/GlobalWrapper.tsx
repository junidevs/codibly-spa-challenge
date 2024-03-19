import { createTheme, ThemeProvider } from "@mui/material/styles"
import { QueryClient } from "@tanstack/react-query"
import { ElementType, memo, ReactElement, useMemo } from "react"

import QueryClientProvider from "./QueryClientProvider"

import { SnackbarProvider } from "@/providers/SnackbarProvider"
import theme from "@/theme/v2"

export type AppWrapperProps = {
  children: ReactElement
}

type ElementTypeWithChildren = ElementType<{ children: ReactElement }>

const combineComponents = (
  ...components: ElementTypeWithChildren[]
): ElementTypeWithChildren => {
  return components.reduce(
    (AccComponent, CurrentComponent) => {
      return function CombinedComponent({ children }) {
        return (
          <AccComponent>
            <CurrentComponent>{children}</CurrentComponent>
          </AccComponent>
        )
      }
    },
    ({ children }) => children
  )
}

const AppWrapper = ({ children }: AppWrapperProps) => {
  const themeWithMaterialLocale = useMemo(() => createTheme(theme), [])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const queryClient = new QueryClient()
  const AppProvider = useMemo(
    () =>
      combineComponents(
        (props) => <ThemeProvider theme={themeWithMaterialLocale} {...props} />,
        SnackbarProvider,
        (props) => (
          <QueryClientProvider reactQueryClient={queryClient} {...props} />
        )
      ),
    [queryClient, themeWithMaterialLocale]
  )

  return <AppProvider>{children}</AppProvider>
}

export default memo(AppWrapper)
