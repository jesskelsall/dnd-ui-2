import { DefaultTheme, ThemeProps } from "styled-components";
import { ThemeColour } from "~/types";

export const getColor =
  (color: ThemeColour) => (props: ThemeProps<DefaultTheme>) =>
    props.theme.colors[`${color}`];
