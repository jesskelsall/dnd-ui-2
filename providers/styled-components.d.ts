import "styled-components";
import { TThemeColour } from "../types";

declare module "styled-components" {
  export interface IDefaultTheme {
    colours: Record<TThemeColour, string>;
  }
}
