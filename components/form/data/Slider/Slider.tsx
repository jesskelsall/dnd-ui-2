import _ from "lodash/fp";
import { ChangeEvent } from "react";
import styled, { css } from "styled-components";
import { disabledStyle, focusStyle } from "~/components/form/common";
import { StyledInput } from "~/components/form/data/InputText/InputText";
import {
  FormData,
  getColor,
  OnChange,
  setFormData,
  Setter,
  tabIndex,
} from "~/functions";
import { MaterialColour } from "~/types";

export const Input = styled(StyledInput).attrs({
  type: "number",
})`
  flex-basis: 8rem;
  flex-shrink: 0;
  margin-right: 1rem;
`;

export interface IRangeProps {
  colour: MaterialColour;
  disabled?: boolean;
}

export const Range = styled.input.attrs({
  type: "range",
})(
  (props: IRangeProps) => css`
    width: 100%;
    height: 1px;
    background-color: ${getColor("border")};
    appearance: none;

    ${focusStyle}
    ${props.disabled && disabledStyle}

    &::-moz-range-thumb,
    &::-webkit-slider-thumb {
      width: 1rem;
      height: 1rem;
      border: none;
      border-radius: 50%;
      background-color: ${getColor(props.colour)};
      appearance: none;
      cursor: pointer;
    }
  `
);

export const SliderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 2rem;
`;

export interface ISliderProps {
  colour?: MaterialColour;
  data: FormData;
  disabled?: boolean;
  max: number;
  min: number;
  numberInput?: boolean;
  onChange?: OnChange<number | null>;
  path: string;
  setter: Setter;
  skipTab?: boolean;
  step?: number;
}

export const Slider = ({
  colour = "grey",
  data,
  disabled = false,
  max,
  min,
  numberInput = true,
  onChange,
  path,
  setter,
  skipTab = false,
  step = 1,
}: ISliderProps) => {
  const dataValue = _.get(path, data) as number | null;
  const inputValue: number | string = _.isNumber(dataValue) ? dataValue : "";

  const sliderMin = 0;
  const sliderMax = (max - min + 1) / step;
  const sliderValue = _.isNumber(inputValue)
    ? (inputValue - min + 1) / step
    : sliderMin;

  const onChangeRange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value: eventValue } = event.target;

    const value =
      eventValue === "" ? min : (Number(eventValue) - 1 + min) * step;

    setFormData<number>(value, path, data, setter, onChange);
  };

  return (
    <SliderContainer>
      {numberInput && (
        <Input
          disabled={disabled}
          onChange={(event) => {
            const { value: eventValue } = event.target;
            const newValue = eventValue === "" ? null : Number(eventValue);
            setFormData<number | null>(newValue, path, data, setter, onChange);
          }}
          tabIndex={tabIndex(skipTab)}
          value={inputValue}
        />
      )}
      <Range
        colour={colour}
        disabled={disabled}
        max={sliderMax}
        min={sliderMin}
        onChange={onChangeRange}
        tabIndex={tabIndex(skipTab || numberInput)}
        value={sliderValue}
      />
    </SliderContainer>
  );
};
