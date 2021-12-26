import { Dispatch, SetStateAction } from "react";
import styled, { css } from "styled-components";
import { CONTROL_COLORS, TControlColor } from "../../../../consts";

export interface IStyledCheckboxProps {
  color: TControlColor;
  disabled?: boolean;
}

export const StyledCheckbox = styled.input.attrs({
  type: "checkbox",
})(
  (props: IStyledCheckboxProps) => css`
    width: 2rem;
    height: 2rem;
    margin: 0;
    border: 1px solid ${CONTROL_COLORS.GREY_LIGHT};
    border-radius: 100px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    font-size: 1rem;
    appearance: none;
    cursor: pointer;
    transition: all 0.1s linear;

    &:checked {
      background-color: ${props.color};
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
    }

    &:hover {
      filter: brightness(0.9);
    }

    &:focus-visible {
      outline: 1px solid ${CONTROL_COLORS.GREY_LIGHT};
      outline-offset: 0;
    }

    ${props.disabled &&
    css`
      opacity: 0.6;
      pointer-events: none;
    `}
  `
);

export interface ICheckboxProps {
  checked: boolean;
  color?: TControlColor;
  disabled?: boolean;
  setter: Dispatch<SetStateAction<boolean>>;
  skipTab?: boolean;
}

export const Checkbox = ({
  checked,
  disabled,
  color,
  setter,
  skipTab,
}: ICheckboxProps) => (
  <StyledCheckbox
    checked={checked}
    color={color || CONTROL_COLORS.BLUE}
    disabled={disabled}
    onChange={() => setter(!checked)}
    tabIndex={skipTab ? -1 : undefined}
  />
);
