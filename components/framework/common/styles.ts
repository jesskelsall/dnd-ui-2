import { css } from "styled-components";
import { getColour } from "../../../functions";

export const disabledStyle = css`
  opacity: 0.6;
  pointer-events: none;
`;

export const focusStyle = css`
  &:focus-visible {
    outline: 2px solid ${getColour("focus")};
    outline-offset: 0;
  }
`;
