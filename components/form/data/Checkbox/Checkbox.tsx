import _ from "lodash/fp";
import styled, { css } from "styled-components";
import { disabledStyle, focusStyle } from "~/components/form/common";
import {
  FormData,
  getColor,
  OnChange,
  setFormData,
  Setter,
  tabIndex,
} from "~/functions";
import { MaterialColour } from "~/types";

export interface IStyledCheckboxProps {
  colour: MaterialColour;
  disabled?: boolean;
}

export const StyledCheckbox = styled.input.attrs({
  type: "checkbox",
})(
  (props: IStyledCheckboxProps) => css`
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
      background-color: ${props.colour};
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='${(
        allProps
      ) =>
        allProps.theme.colors.background.replace(
          "#",
          "%23"
        )}' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
    }

    &:hover {
      filter: brightness(0.9);
    }

    ${focusStyle}
    ${props.disabled && disabledStyle}
  `
);

export interface ICheckboxProps {
  colour?: MaterialColour;
  data: FormData;
  disabled?: boolean;
  onChange?: OnChange<boolean>;
  path: string;
  setter: Setter;
  skipTab?: boolean;
}

export const Checkbox = ({
  colour = "grey",
  data,
  disabled = false,
  onChange,
  path,
  setter,
  skipTab = false,
}: ICheckboxProps) => {
  const checked = _.get(path, data) as boolean;

  return (
    <StyledCheckbox
      checked={checked}
      colour={colour}
      disabled={disabled}
      onChange={() =>
        setFormData<boolean>(!checked, path, data, setter, onChange)
      }
      tabIndex={tabIndex(skipTab)}
    />
  );
};
