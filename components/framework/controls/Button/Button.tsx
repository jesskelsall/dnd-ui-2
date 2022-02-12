import styled, { css } from "styled-components";
import { getColour } from "../../../../functions";
import { TMaterialColour } from "../../../../types";
import { disabledStyle, focusStyle } from "../../common";

export interface IButtonProps {
  block?: boolean;
  colour?: TMaterialColour;
  disabled?: boolean;
  fake?: boolean;
  outline?: boolean;
  wide?: boolean;
}

export const Button = styled.a<IButtonProps>((props) => {
  const colour = getColour(props.colour || "grey");

  return css`
    display: inline-block;
    flex-shrink: 0;
    padding: 0.5rem 1rem;
    border: 1px solid ${colour};
    border-radius: 100px;
    background-color: ${colour};
    font-size: 1rem;
    font-weight: normal;
    color: ${getColour("action")};
    text-align: center;
    transition: all 0.1s linear;

    ${focusStyle}
    ${props.disabled && disabledStyle}

    ${props.block &&
    css`
      display: block;
    `}

    ${props.wide &&
    css`
      min-width: 10rem;
    `}

    ${props.outline &&
    css`
      background-color: transparent;
      color: ${colour};
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
