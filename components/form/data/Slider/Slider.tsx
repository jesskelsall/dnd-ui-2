import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

export interface ISliderProps {
  disabled?: boolean;
  max: number;
  min: number;
  setter: Dispatch<SetStateAction<number>>;
  skipTab?: boolean;
  step?: number;
  value: number;
}

export const SliderContainer = styled.div``;

export const Slider = ({
  disabled,
  max,
  min,
  setter,
  skipTab,
  step = 1,
  value,
}: ISliderProps) => (
  <SliderContainer>
    <input
      type="range"
      max={max}
      min={min}
      onChange={(event) => {
        const { value: eventValue } = event.target;
        setter(eventValue === "" ? min : Number(eventValue));
      }}
      value={value}
    />
  </SliderContainer>
);
