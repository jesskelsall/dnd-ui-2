import { DecoratorFn } from "@storybook/react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { getColour } from "../../functions";
import { dark } from "../../providers";

const ControlStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    background-color: ${getColour("background")};
    font-family: Helvetica Neue, Arial, sans-serif;
    font-size: 16px;
    color: ${getColour("text")};
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

export const controlDecorator = (theme = dark): DecoratorFn => (storyFn) => (
  <ThemeProvider theme={theme}>
    <ControlStyles />
      {storyFn()}
  </ThemeProvider>
)
