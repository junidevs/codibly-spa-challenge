import { createRef, ReactNode } from "react"

import CloseIcon from "@mui/icons-material/Close"
import { GlobalStyles } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import Stack from "@mui/material/Stack"
import { useTheme } from "@mui/material/styles"

import {
  SnackbarKey,
  SnackbarProvider as NotistackSnackbarProvider,
} from "notistack"

import InfoIcon from "@mui/icons-material/Info"
import WarningIcon from "@mui/icons-material/Warning"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"

export type TSnackbarProvider = {
  children: ReactNode
}

export const SnackbarProvider = ({ children }: TSnackbarProvider) => {
  const theme = useTheme()

  const notistackRef = createRef<NotistackSnackbarProvider>()
  const onClickDismiss = (key: SnackbarKey) => () => {
    notistackRef.current?.closeSnackbar(key)
  }

  const infoIconVariant = (
    <Stack alignItems="center" color="white" mr={3}>
      <InfoIcon color="inherit" fontSize="small" />
    </Stack>
  )
  const successIconVariant = (
    <Stack alignItems="center" color="white" mr={3}>
      <CheckCircleIcon color="inherit" fontSize="small" />
    </Stack>
  )
  const warningIconVariant = (
    <Stack alignItems="center" color="white" mr={3}>
      <WarningIcon color="inherit" fontSize="small" />
    </Stack>
  )
  const notistackStyles = {
    ".SnackbarItem-variantError": {
      backgroundColor: theme.palette.error.main,
    },
    ".SnackbarItem-variantWarning": {
      backgroundColor: theme.palette.warning.main,
    },
    ".SnackbarItem-variantSuccess": {
      backgroundColor: theme.palette.success.main,
    },
    ".SnackbarItem-variantInfo": {
      backgroundColor: theme.palette.info.main,
    },
    ".SnackbarContent-root": {
      maxWidth: "420px",
    },
  }

  return (
    <>
      <NotistackSnackbarProvider
        ref={notistackRef}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        iconVariant={{
          default: infoIconVariant,
          success: successIconVariant,
          info: infoIconVariant,
          warning: warningIconVariant,
          error: infoIconVariant,
        }}
        autoHideDuration={3000}
        action={(key) => (
          <IconButton onClick={onClickDismiss(key)} size="small">
            <CloseIcon fontSize="small" color="inherit" />
          </IconButton>
        )}
      >
        {children}
      </NotistackSnackbarProvider>
      <GlobalStyles styles={notistackStyles} />
    </>
  )
}
