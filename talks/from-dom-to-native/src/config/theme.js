import createTheme from "spectacle/lib/themes/default"

const colors = {
  primary: "#fafafa",
  black: "#1F2022",
  blue: "#03A9FC",
  grey: "#CECECE",
  pink: "#ff4081",
  green: "#009c87"
}

const fonts = {
  primary: "monospace",
  secondary: "Open Sans"
}

const theme = createTheme(colors, fonts)

export { theme, colors }