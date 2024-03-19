import { createTheme, responsiveFontSizes } from "@mui/material/styles"

import mixins from "@/theme/mixins"
import MuiAppBar from "@/theme/MuiAppBar"
import MuiAutocomplete from "@/theme/MuiAutocomplete"
import MuiButton from "@/theme/MuiButton"
import MuiCardActions from "@/theme/MuiCardActions"
import MuiCardContent from "@/theme/MuiCardContent"
import MuiCssBaseline from "@/theme/MuiCssBaseline"
import MuiDrawer from "@/theme/MuiDrawer"
import MuiInput from "@/theme/MuiInput"
import MuiInputBase from "@/theme/MuiInputBase"
import MuiList from "@/theme/MuiList"
import MuiListItemButton from "@/theme/MuiListItemButton"
import MuiListItemIcon from "@/theme/MuiListItemIcon"
import MuiOutlinedInput from "@/theme/MuiOutlinedInput"
import MuiPaginationItem from "@/theme/MuiPaginationItem"
import MuiPopover from "@/theme/MuiPopover"
import MuiToggleButtonGroup from "@/theme/MuiToggleButtonGroup"
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
    MuiAutocomplete,
    MuiButton,
    MuiCardActions,
    MuiCardContent,
    MuiDrawer,
    MuiInput,
    MuiInputBase,
    MuiListItemButton,
    MuiListItemIcon,
    MuiPaginationItem,
    MuiToggleButtonGroup,
    MuiTypography,
    MuiCssBaseline,
    MuiOutlinedInput,
    MuiPopover,
    MuiList,
  },
})

// TODO: find better way to change font sizes on these fonts
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

export const drawerWidth = 300
