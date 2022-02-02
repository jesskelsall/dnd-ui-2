import styled, { css } from "styled-components";
import { disabledStyle, focusStyle } from "~/components/form/common";
import { getColor } from "~/functions";
import { MaterialColour } from "~/types";

export interface IButtonProps {
  block?: boolean;
  color?: MaterialColour;
  disabled?: boolean;
  fake?: boolean;
  outline?: boolean;
}

export const Button = styled.button((props: IButtonProps) => {
  const color = getColor(props.color || "grey");

  return css`
    padding: 0.5rem 1rem;
    border: 1px solid ${color};
    border-radius: 100px;
    background-color: ${color};
    font-size: 1rem;
    color: ${getColor("action")};
    transition: all 0.1s linear;

    ${focusStyle}
    ${props.disabled && disabledStyle}

    ${props.block &&
    css`
      min-width: 170px;
    `}

    ${props.outline &&
    css`
      background-color: transparent;
      color: ${color};
    `}

    ${!props.fake &&
    !props.disabled &&
    css`
      cursor: pointer;

      &:hover {
        filter: brightness(0.9);
      }
    `}
  `;
});
