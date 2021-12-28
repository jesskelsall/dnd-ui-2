import { nanoid } from "nanoid";
import styled from "styled-components";
import { BoxShadowFilter, IBoxShadow } from "../../effects";

export interface IShadedBorderProps {
  path: string;
  thickness?: number;
  width: number;
  height: number;
  colorMid: string;
  colorLight: string;
  colorDark: string;
}

const BASE_THICKNESS = 8;

const thicknessRatio = (thickness: number) => (baseNumber: number) =>
  baseNumber * (thickness / BASE_THICKNESS);

export const StyledShadedBorder = styled.svg``;

export const ShadedBorder = ({
  colorDark,
  colorLight,
  colorMid,
  height,
  path,
  thickness = BASE_THICKNESS,
  width,
}: IShadedBorderProps) => {
  const filterId = nanoid();
  const ratio = thicknessRatio(thickness);

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
    <StyledShadedBorder width={width + thickness} height={height + thickness}>
      <BoxShadowFilter boxShadows={boxShadows} id={filterId} />
      <path
        d={path}
        fill="none"
        filter={`url(#${filterId})`}
        stroke={colorMid}
        strokeWidth={thickness}
        transform={`translate(${thickness / 2}, ${thickness / 2})`}
      />
    </StyledShadedBorder>
  );
};
