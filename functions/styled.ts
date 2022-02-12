import { IDefaultTheme, ThemeProps } from "styled-components";
import { TThemeColour } from "../types";

export const getColour =
  (colour: TThemeColour) => (props: ThemeProps<IDefaultTheme>) =>
    props.theme.colours[`${colour}`];
