import { DecoratorFn } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { dark, GlobalStyles } from "~/providers";

export const themeDecorator = (theme = dark): DecoratorFn => (storyFn) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {storyFn()}
  </ThemeProvider>
)
