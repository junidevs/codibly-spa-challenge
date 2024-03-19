import { blue } from "@mui/material/colors"

/*
 * Adding new colors - https://material-ui.com/customization/palette/#adding-new-colors
 */
const palette = {
  primary: {
    main: "#175CFF",
    dark: "#144DD2",
    background: "#F5F8FF",
  },
  secondary: {
    main: "#457DFF",
  },
  error: {
    main: "#FF3A5A",
  },
  success: {
    light: "#abefc6",
    main: "#0CC19B",
    dark: "#067647",
  },
  warning: {
    light: "#ffd699",
    main: "#FF9800",
    dark: "#663d00",
  },
  info: {
    main: blue[500],
    light: "#C4E0FF",
  },
  // do not use white as a key - it will break mui buttons
  ccWhite: {
    main: "#FFFFFF",
    light: "#FFFFFF",
    dark: "#000000",
  },
  grey: {
    100: "#F4F4FB",
    300: "#DCE2E8",
    400: "#00000087",
    500: "#bdbdbd",
    600: "#ADB2B7",
    700: "#65676B",
    800: "#272727",
    900: "#000000de",
    A400: "#000c30",
  },
  background: {
    default: "#F4F4F9",
  },
}

export default palette
