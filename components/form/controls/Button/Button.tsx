import styled, { css } from "styled-components";
import { CONTROL_COLORS, TControlColor } from "../../../../consts";

export interface IButtonProps {
  block?: boolean;
  color?: TControlColor;
  disabled?: boolean;
  fake?: boolean;
  outline?: boolean;
}

export const Button = styled.button((props: IButtonProps) => {
  const color = props.color || CONTROL_COLORS.BLUE;

  return css`
    padding: 0.5rem 1rem;
    border: 1px solid ${color};
    border-radius: 100px;
    background-color: ${color};
    font-size: 1rem;
    color: ${CONTROL_COLORS.WHITE};
    transition: all 0.1s linear;

    ${props.block &&
    css`
      min-width: 170px;
    `}

    ${props.outline &&
    css`
      background-color: transparent;
      color: ${color};
    `}

    ${props.disabled &&
    css`
      opacity: 0.6;
      pointer-events: none;
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
