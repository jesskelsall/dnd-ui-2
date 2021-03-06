import _ from "lodash/fp";
import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { getColour, setFormData, tabIndex } from "../../../../functions";
import { OnBlur, OnChange } from "../../../../types";
import { disabledStyle, focusStyle } from "../../common";

export interface IStyledInputProps {
  disabled?: boolean;
}

export const StyledInput = styled.input<IStyledInputProps>`
  width: 100%;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 100px;
  border: 1px solid ${getColour("border")};
  background-color: transparent;
  color: ${getColour("text")};

  ${focusStyle}
  ${(props) => props.disabled && disabledStyle}

    &::placeholder {
    opacity: 100%;
    color: ${getColour("border")};
    font-style: italic;
  }
`;

export interface IInputProps<InputType, DataType extends object> {
  data: DataType;
  disabled?: boolean;
  onBlur?: OnBlur;
  onChange?: OnChange<InputType>;
  path: string;
  placeholder?: string;
  setter: Dispatch<SetStateAction<DataType>>;
  skipTab?: boolean;
}

export function InputText<DataType extends object>({
  data,
  disabled = false,
  onBlur,
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
      onBlur={onBlur}
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
