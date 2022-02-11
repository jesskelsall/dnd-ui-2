import styled, { css } from "styled-components";
import { disabledStyle, focusStyle } from "../../common";
import { getColor } from "../../../../functions";
import { MaterialColour } from "../../../../types";

export interface IButtonProps {
  block?: boolean;
  colour?: MaterialColour;
  disabled?: boolean;
  fake?: boolean;
  outline?: boolean;
  wide?: boolean;
}

export const Button = styled.a<IButtonProps>((props) => {
  const colour = getColor(props.colour || "grey");

  return css`
    display: inline-block;
    padding: 0.5rem 1rem;
    border: 1px solid ${colour};
    border-radius: 100px;
    background-color: ${colour};
    font-size: 1rem;
    font-weight: normal;
    color: ${getColor("action")};
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
