import { Dispatch, SetStateAction } from "react";
import styled, { css } from "styled-components";
import { CONTROL_COLORS } from "../../../../consts";

export interface IStyledInputProps {
  disabled?: boolean;
}

export const StyledInput = styled.input(
  (props: IStyledInputProps) => css`
    width: 100%;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 100px;
    border: 1px solid ${CONTROL_COLORS.GREY_LIGHT};

    &:focus-visible {
      outline: 1px solid ${CONTROL_COLORS.GREY_LIGHT};
    }

    &::placeholder {
      color: ${CONTROL_COLORS.GREY_LIGHT};
      font-style: italic;
    }

    ${props.disabled &&
    css`
      background-color: ${CONTROL_COLORS.GREY_LIGHTEST};
      color: ${CONTROL_COLORS.GREY};
      opacity: 0.6;
      pointer-events: none;
    `}
  `
);

export interface IInputProps<InputType> {
  disabled?: boolean;
  placeholder?: string;
  setter: Dispatch<SetStateAction<InputType>>;
  skipTab?: boolean;
  value: InputType;
}

export const InputText = ({
  disabled,
  placeholder,
  setter,
  skipTab,
  value,
}: IInputProps<string>) => (
  <StyledInput
    disabled={disabled}
    onChange={(event) => setter(event.target.value)}
    placeholder={placeholder}
    tabIndex={skipTab ? -1 : undefined}
    type="text"
    value={value}
  />
);
