import { createTheme, responsiveFontSizes } from "@mui/material/styles"

import mixins from "@/theme/mixins"
import MuiAppBar from "@/theme/MuiAppBar"

import MuiButton from "@/theme/MuiButton"

import MuiDrawer from "@/theme/MuiDrawer"
import MuiInput from "@/theme/MuiInput"
import MuiInputBase from "@/theme/MuiInputBase"
import MuiList from "@/theme/MuiList"
import MuiListItemButton from "@/theme/MuiListItemButton"
import MuiListItemIcon from "@/theme/MuiListItemIcon"
import MuiOutlinedInput from "@/theme/MuiOutlinedInput"
import MuiPaginationItem from "@/theme/MuiPaginationItem"

import MuiTypography from "@/theme/MuiTypography"
import shadows from "@/theme/shadows"
import shape from "@/theme/shape"
import spacing from "@/theme/spacing"
import typography from "@/theme/typography"

import palette from "@/theme/palette"

/*
 * Override globals - https://material-ui.com/customization/globals/#globals
 */
const theme = createTheme({
  mixins,
  palette,
  shape,
  shadows,
  spacing,
  typography,
  components: {
    MuiAppBar,
    MuiButton,
    MuiDrawer,
    MuiInput,
    MuiInputBase,
    MuiListItemButton,
    MuiListItemIcon,
    MuiPaginationItem,
    MuiTypography,
    MuiOutlinedInput,
    MuiList,
  },
})

const responsiveBaseFonts = {
  [theme.breakpoints.down("md")]: {
    fontSize: ".9rem",
  },
}

const themeWithResponsiveFontSizes = responsiveFontSizes(theme, {
  breakpoints: ["xs", "sm"],
})

themeWithResponsiveFontSizes.typography.body1 = {
  ...theme.typography.body1,
  ...responsiveBaseFonts,
}
themeWithResponsiveFontSizes.typography.body2 = {
  ...theme.typography.body2,
  ...responsiveBaseFonts,
}

export default themeWithResponsiveFontSizes
