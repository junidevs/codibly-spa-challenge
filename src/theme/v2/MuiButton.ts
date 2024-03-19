import { ThemeOptions } from "@mui/material"

import palette from "../palette"

const MuiButton: Required<Required<ThemeOptions>["components"]>["MuiButton"] = {
  styleOverrides: {
    root: {
      borderRadius: 8,
      boxShadow: "none",
      fontSize: 12,
      lineHeight: "16px",
      paddingBlock: 8,
      paddingInline: 24,
      textTransform: "capitalize",
    },
    sizeSmall: {
      paddingBlock: 4,
    },
    sizeLarge: {
      fontSize: 16,
      lineHeight: "20px",
      paddingBlock: 10,
      paddingInline: 32,
    },
    text: {
      paddingInline: 12,
    },
    outlined: {
      borderWidth: "2px",
      borderColor: palette.primary.main,
      paddingBlock: 6,
      paddingInline: 22,
      ":hover": {
        borderWidth: "2px",
      },
    },
  },
  defaultProps: {
    disableElevation: true,
  },
  variants: [
    {
      props: { variant: "text" },
      style: {
        color: palette.primary.main,
        backgroundColor: palette.ccWhite.main,
        borderRadius: 8,
        "&:hover, &:focus": {
          color: palette.primary.main,
          backgroundColor: palette.ccWhite.main,
        },
      },
    },
  ],
}

export default MuiButton
