import { css } from "styled-components";
import { getColor } from "~/functions";

export const focusStyle = css`
  &:focus-visible {
    outline: 2px solid ${getColor("focus")};
    outline-offset: 0;
  }
`;
