import { Dispatch, SetStateAction } from "react";
import styled, { css } from "styled-components";
import { disabledStyle, focusStyle } from "~/components/form/common";
import { getColor } from "~/functions";

export interface IStyledInputProps {
  disabled?: boolean;
}

export const StyledInput = styled.input(
  (props: IStyledInputProps) => css`
    width: 100%;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 100px;
    border: 1px solid ${getColor("border")};
    background-color: transparent;
    color: ${getColor("text")};

    ${focusStyle}
    ${props.disabled && disabledStyle}

    &::placeholder {
      opacity: 100%;
      color: ${getColor("border")};
      font-style: italic;
    }
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
