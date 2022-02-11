import _ from "lodash/fp";
import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { getColor, setFormData, tabIndex } from "../../../../functions";
import { MaterialColour, OnChange } from "../../../../types";
import { disabledStyle, focusStyle } from "../../common";

export interface IStyledCheckboxProps {
  colour: MaterialColour;
  disabled?: boolean;
}

export const StyledCheckbox = styled.input<IStyledCheckboxProps>`
  width: 2rem;
  height: 2rem;
  margin: 0;
  border: 1px solid ${getColor("border")};
  border-radius: 100px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  font-size: 1rem;
  appearance: none;
  cursor: pointer;
  transition: all 0.1s linear;

  &:checked {
    background-color: ${(props) => props.colour};
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='${(
      props
    ) =>
      props.theme.colors.background.replace(
        "#",
        "%23"
      )}' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
  }

  &:hover {
    filter: brightness(0.9);
  }

  ${focusStyle}
  ${(props) => props.disabled && disabledStyle}
`;

export interface ICheckboxProps<DataType extends object> {
  colour?: MaterialColour;
  data: DataType;
  disabled?: boolean;
  onChange?: OnChange<boolean>;
  path: string;
  setter: Dispatch<SetStateAction<DataType>>;
  skipTab?: boolean;
}

export function Checkbox<DataType extends object>({
  colour = "grey",
  data,
  disabled = false,
  onChange,
  path,
  setter,
  skipTab = false,
}: ICheckboxProps<DataType>) {
  const checked = _.get(path, data) as boolean;

  return (
    <StyledCheckbox
      checked={checked}
      colour={colour}
      disabled={disabled}
      onChange={() =>
        setFormData<boolean, DataType>(!checked, path, data, setter, onChange)
      }
      tabIndex={tabIndex(skipTab)}
      type="checkbox"
    />
  );
}
