import "styled-components";
import { ThemeColour } from "~/types";

declare module "styled-components" {
  export interface IDefaultTheme {
    colors: Record<ThemeColour, string>;
  }
}
