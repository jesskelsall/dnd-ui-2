import _ from "lodash/fp";
import { Dispatch, SetStateAction } from "react";
import styled, { css } from "styled-components";
import { disabledStyle, focusStyle } from "~/components/framework/common";
import { getColor, setFormData, tabIndex } from "~/functions";
import { OnChange } from "~/types";

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

export interface IInputProps<InputType, DataType extends object> {
  data: DataType;
  disabled?: boolean;
  onChange?: OnChange<InputType>;
  path: string;
  placeholder?: string;
  setter: Dispatch<SetStateAction<DataType>>;
  skipTab?: boolean;
}

export function InputText<DataType extends object>({
  data,
  disabled = false,
  onChange,
  path,
  placeholder,
  setter,
  skipTab = false,
}: IInputProps<string, DataType>) {
  const value = _.get(path, data) as string;

  return (
    <StyledInput
      disabled={disabled}
      onChange={(event) =>
        setFormData<string, DataType>(
          event.target.value,
          path,
          data,
          setter,
          onChange
        )
      }
      placeholder={placeholder}
      tabIndex={tabIndex(skipTab)}
      type="text"
      value={value}
    />
  );
}
