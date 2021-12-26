import React, { Dispatch, SetStateAction } from "react";
import styled, { css } from "styled-components";
import { CONTROL_COLORS } from "../../../../consts";
import { IOption, TOptionValue } from "../../../../types";

export interface ISelectProps {
  disabled?: boolean;
  placeholderSelected: boolean;
}

export const Select = styled.select(
  (props: ISelectProps) => css`
    width: 100%;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 100px;
    border: 1px solid ${CONTROL_COLORS.GREY_LIGHT};
    appearance: none;

    &:focus-visible {
      outline: 1px solid ${CONTROL_COLORS.GREY_LIGHT};
    }

    ${props.disabled &&
    css`
      background-color: ${CONTROL_COLORS.GREY_LIGHTEST};
      color: ${CONTROL_COLORS.GREY};
      opacity: 0.6;
      pointer-events: none;
    `}

    ${props.placeholderSelected &&
    css`
      color: ${CONTROL_COLORS.GREY_LIGHT};
      font-style: italic;
    `}
  `
);

export const SelectWrapper = styled.div`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    right: 1rem;
    top: 0.9rem;
    width: 0;
    height: 0;
    border-top: 0.5rem solid ${CONTROL_COLORS.GREY_LIGHT};
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    border-bottom: 0;
  }
`;

export interface IDropdownProps<ValueType extends TOptionValue> {
  disabled?: boolean;
  placeholder?: string;
  options: IOption<ValueType>[];
  setter: Dispatch<SetStateAction<ValueType>>;
  skipTab?: boolean;
  value: TOptionValue;
}

export const Dropdown = <ValueType extends TOptionValue = string>({
  disabled,
  placeholder,
  options,
  setter,
  skipTab,
  value,
}: IDropdownProps<ValueType>) => {
  const valuesAreNumbers =
    options.length && typeof options[0].value === "number";
  const hasNoValue = value === "" || value === null;

  const noNull = (value: TOptionValue) => (value === null ? "" : value);

  const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let castValue: TOptionValue = event.target.value;

    if (valuesAreNumbers) {
      castValue = castValue === "" ? null : parseFloat(castValue);
    }

    setter(castValue as ValueType);
  };

  return (
    <SelectWrapper>
      <Select
        disabled={disabled}
        onChange={onChangeSelect}
        placeholderSelected={Boolean(placeholder && hasNoValue)}
        tabIndex={skipTab ? -1 : undefined}
        value={noNull(value)}
      >
        {placeholder && (
          <option disabled key="placeholder" value="">
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={noNull(option.value)}>
            {option.label}
          </option>
        ))}
      </Select>
    </SelectWrapper>
  );
};
