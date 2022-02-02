import "styled-components";
import { ThemeColour } from "~/types";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Record<ThemeColour, string>;
  }
}
