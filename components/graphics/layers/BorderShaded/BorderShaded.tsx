import { nanoid } from "nanoid";
import styled from "styled-components";
import { FilterBoxShadow, IBoxShadow } from "../../svg";

export const BASE_THICKNESS = 8;

export const StyledBorderShaded = styled.svg``;

export interface IBorderShadedProps {
  path: string;
  thickness?: number;
  width: number;
  height: number;
  colorMid: string;
  colorLight: string;
  colorDark: string;
}

export const BorderShaded = ({
  colorDark,
  colorLight,
  colorMid,
  height,
  path,
  thickness = BASE_THICKNESS,
  width,
}: IBorderShadedProps) => {
  const filterId = nanoid();

  const ratio = (baseNumber: number) =>
    baseNumber * (thickness / BASE_THICKNESS);

  const boxShadows: IBoxShadow[] = [
    {
      blur: ratio(2),
      color: colorDark,
      vOffset: ratio(-1),
    },
    {
      blur: ratio(1),
      color: colorLight,
      vOffset: ratio(2),
    },
  ];

  return (
    <StyledBorderShaded width={width + thickness} height={height + thickness}>
      <FilterBoxShadow boxShadows={boxShadows} id={filterId} />
      <path
        d={path}
        fill="none"
        filter={`url(#${filterId})`}
        stroke={colorMid}
        strokeWidth={thickness}
        transform={`translate(${thickness / 2}, ${thickness / 2})`}
      />
    </StyledBorderShaded>
  );
};
