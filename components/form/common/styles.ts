import { css } from "styled-components";
import { getColor } from "~/functions";

export const disabledStyle = css`
  opacity: 0.6;
  pointer-events: none;
`;

export const focusStyle = css`
  &:focus-visible {
    outline: 2px solid ${getColor("focus")};
    outline-offset: 0;
  }
`;
