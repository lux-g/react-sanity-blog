import { createGlobalStyle } from "styled-components"

export const lightTheme = {
    body: "white",
    fontColor: "black"
}
export const darkTheme = {
    body: '#171717',
    fontColor: "#e1e1e1"
}
export const GlobalStyles = createGlobalStyle
`
    body {
        background-color: ${(props) => props.theme.body}
    }
    p {
        color: ${(props) => props.theme.fontColor}
    }
    .logo h2,
    .socials a,
    .card__title,
    .title,
    .block-content h2 {
        color: ${(props) => props.theme.fontColor}
    }
`