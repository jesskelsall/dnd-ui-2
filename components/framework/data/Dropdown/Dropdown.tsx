import _ from "lodash/fp";
import { Dispatch, SetStateAction } from "react";
import styled, { css } from "styled-components";
import { getColour, setFormData, tabIndex } from "../../../../functions";
import { IOption, OnChange, TOptionValue } from "../../../../types";
import { disabledStyle, focusStyle } from "../../common";

export interface ISelectProps {
  disabled?: boolean;
  placeholderSelected: boolean;
}

export const Select = styled.select<ISelectProps>`
  width: 100%;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 100px;
  border: 1px solid ${getColour("border")};
  background-color: transparent;
  color: ${getColour("text")};
  appearance: none;

  ${focusStyle}
  ${(props) => props.disabled && disabledStyle}

    ${(props) =>
    props.placeholderSelected &&
    css`
      color: ${getColour("text")}99;
      font-style: italic;
    `}

    > option {
    color: initial;

    &[disabled] {
      color: grey;
    }
  }
`;

export interface ISelectWrapperProps {
  disabled?: boolean;
}

export const SelectWrapper = styled.div<ISelectWrapperProps>`
  position: relative;
  width: 100%;

  &::after {
    content: "";
    position: absolute;
    right: 1rem;
    top: 0.9rem;
    width: 0;
    height: 0;
    border-top: 0.5rem solid ${getColour("border")};
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    border-bottom: 0;

    ${(props) =>
      props.disabled &&
      css`
        opacity: 0.6;
      `}
  }
`;

export interface IDropdownProps<
  DataType extends object,
  ValueType extends TOptionValue
> {
  data: DataType;
  disabled?: boolean;
  onChange?: OnChange<ValueType>;
  path: string;
  placeholder?: string;
  options: IOption<ValueType>[];
  setter: Dispatch<SetStateAction<DataType>>;
  skipTab?: boolean;
}

export function Dropdown<
  DataType extends object,
  ValueType extends TOptionValue = string
>({
  data,
  disabled = false,
  onChange,
  path,
  placeholder,
  options,
  setter,
  skipTab = false,
}: IDropdownProps<DataType, ValueType>) {
  const valuesAreNumbers =
    options.length && typeof options[0].value === "number";

  const value = _.get(path, data) as ValueType;
  const hasNoValue = value === "" || value === null;
  const valueIsOption =
    !hasNoValue && options.some((option) => option.value === value);

  const hasDefaultValue = (placeholder && hasNoValue) || !valueIsOption;

  const noNull = (optionValue: TOptionValue) =>
    optionValue === null ? "" : optionValue;

  const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let castValue: TOptionValue = event.target.value;

    if (valuesAreNumbers) {
      castValue = castValue === "" ? null : parseFloat(castValue);
    }

    setFormData<ValueType, DataType>(
      castValue as ValueType,
      path,
      data,
      setter,
      onChange
    );
  };

  return (
    <SelectWrapper disabled={disabled}>
      <Select
        disabled={disabled}
        onChange={onChangeSelect}
        placeholderSelected={hasDefaultValue}
        tabIndex={tabIndex(skipTab)}
        value={noNull(value)}
      >
        {placeholder && hasNoValue ? (
          <option disabled key="placeholder" value="">
            {placeholder}
          </option>
        ) : (
          !valueIsOption && (
            <option disabled key="unknown" value={noNull(value)}>
              &quot;{value}&quot;
            </option>
          )
        )}
        {options.map((option) => (
          <option key={option.value} value={noNull(option.value)}>
            {option.label}
          </option>
        ))}
      </Select>
    </SelectWrapper>
  );
}
