import { IDefaultTheme, ThemeProps } from "styled-components";
import { ThemeColour } from "~/types";

export const getColor =
  (color: ThemeColour) => (props: ThemeProps<IDefaultTheme>) =>
    props.theme.colors[`${color}`];
