import { createGlobalStyle, IDefaultTheme } from "styled-components";
import { getColor } from "../functions";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    background-color: ${getColor("background")};
    font-family: Helvetica Neue, Arial, sans-serif;
    font-size: 16px;
    color: ${getColor("text")}
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const dark: IDefaultTheme = {
  colors: {
    action: "#F5F5F5", // Grey 100
    background: "#212121", // Grey 900
    banner1: "#757575", // Grey 600
    banner2: "#616161", // Grey 700
    banner3: "#424242", // Grey 800
    border: "#616161", // Grey 700
    text: "#BDBDBD", // Grey 400
    heading: "#F5F5F5", // Grey 100
    focus: "#616161", // Grey 700
    // Material Design colours
    blue: "#2962FF", // Blue A700
    green: "#00C853", // Green A700
    grey: "#757575", // Grey 600
    orange: "#FF6D00", // Orange A700
    red: "#DD2C00", // Red A700
    yellow: "#F9A825", // Amber A700
  },
};
