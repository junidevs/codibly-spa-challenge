import { ThemeOptions } from "@mui/material"

import palette from "./palette"

const MuiCardContent: Required<
  Required<ThemeOptions>["components"]
>["MuiChip"] = {
  variants: [
    {
      props: { variant: "outlined" },
      style: {
        borderRadius: 12,
        backgroundColor: `var(--chip-bg-color, ${palette.success.light}30)`,
        border: `1px solid var(--chip-border-color, ${palette.success.main})`,
        color: `var(--chip-color, ${palette.success.dark})`,
        fontWeight: 600,
        fontSize: 14,
        ".MuiSvgIcon-root": {
          fontSize: 12,
        },
      },
    },
  ],
}

export default MuiCardContent
