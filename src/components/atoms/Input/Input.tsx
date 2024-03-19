import { ChangeEvent, FocusEventHandler, forwardRef, RefObject } from "react"

import TextField, { TextFieldProps } from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import { Theme } from "@mui/material/styles"

export type StyledInputProps = TextFieldProps & {
  placeholder?: string
  required?: boolean
  customBorderRadius?: string | number
  onChange?: (...event: ChangeEvent<HTMLInputElement>[]) => void
  onBlur?: FocusEventHandler<HTMLInputElement>
  value?: unknown
  errorMsg?: string
  select?: boolean
  withCounter?: boolean
  disabled?: boolean
}

export const Input = forwardRef(
  (
    {
      name = "",
      sx,
      inputProps,
      InputProps,
      type,
      variant = "outlined",
      label,
      required,
      placeholder = "",
      customBorderRadius = "8px",
      onChange,
      onBlur,
      value,
      errorMsg,
      select = false,
      withCounter = false,
      disabled = false,
      ...props
    }: StyledInputProps,
    ref:
      | ((instance: HTMLDivElement | null) => void)
      | RefObject<HTMLDivElement>
      | null
      | undefined
  ) => {
    const optionalProps = {
      ...(value !== undefined ? { value } : {}),
      ...(onChange !== undefined ? { onChange } : {}),
      ...(onBlur !== undefined ? { onBlur } : {}),
      ...(placeholder !== undefined ? { placeholder } : {}),
    }
    return (
      <TextField
        name={name}
        select={select}
        ref={ref}
        margin="dense"
        type={type}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: customBorderRadius,
            opacity: disabled ? 0.5 : 1,
          },
          "& .MuiInputLabel-root": {
            fontWeight: 800,
            "&[data-shrink='false']": {
              fontWeight: 400,
              color: "grey.600",
              transform: "translate(12px, 6px)",
            },
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "grey.300",
          },
          "& .MuiInputBase-multiline": {
            py: 2,
            px: 7,
          },
          ...(select
            ? { "& .MuiSelect-select": { whiteSpace: "pre-wrap" } }
            : {}),
          ...sx,
        }}
        disabled={disabled}
        error={Boolean(errorMsg)}
        helperText={errorMsg}
        inputProps={{
          "aria-label": name,
          sx: {
            padding: (theme: Theme) => `auto ${theme.spacing(9)}`,
            fontSize: "mainForms.fontSize",
            color: "#666",
          },
          ...inputProps,
        }}
        InputProps={{
          ...InputProps,
          ...(withCounter && {
            sx: {
              flexDirection: props.multiline ? "column" : "row",
            },
            endAdornment: (
              <Typography
                noWrap
                alignSelf="end"
                pl={4}
                overflow="visible"
                fontSize={11}
              >
                {((value || props.defaultValue || "") as string).length ?? "?"}{" "}
                / {inputProps?.maxLength || "∞"}
              </Typography>
            ),
          }),
        }}
        FormHelperTextProps={{ sx: { letterSpacing: 0.9, mt: 0 } }}
        variant={variant}
        label={`${label ?? name}${required ? "*" : ""}`}
        {...optionalProps}
        {...props}
      />
    )
  }
)

Input.displayName = "Input"
