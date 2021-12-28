import styled, { css } from "styled-components";
import {
  ShadedBorder,
  StyledShadedBorder,
} from "../../svg/layers/ShadedBorder/ShadedBorder";
import { WindowRound } from "../../svg/layers/WindowRound/WindowRound";
import { circlePath } from "../../svg/paths";

const CIRCLE_DIAMETER = 120;
const CIRCLE_THICKNESS = 8;
const OVERFLOW = 20;

export interface IStyledPortholeMediumProps {
  borderPosition: number;
  totalSize: number;
}

export const StyledPortholeMedium = styled.div(
  (props: IStyledPortholeMediumProps) => css`
    position: relative;
    width: ${props.totalSize}px;
    height: ${props.totalSize}px;

    ${StyledShadedBorder} {
      position: absolute;
      top: ${props.borderPosition}px;
      left: ${props.borderPosition}px;
    }
  `
);

export interface IPortholeMediumProps {
  borderColorDark: string;
  borderColorLight: string;
  borderColorMid: string;
  imageOverflowVertical: number;
  imagePositionHorizontal: number;
  imagePositionVertical: number;
  imageScale: number;
  imageUrl: string;
}

export const PortholeMedium = ({
  borderColorDark,
  borderColorLight,
  borderColorMid,
  imageOverflowVertical,
  imagePositionHorizontal,
  imagePositionVertical,
  imageScale,
  imageUrl,
}: IPortholeMediumProps) => {
  const borderRadius = CIRCLE_DIAMETER / 2;
  const imageRadius = (CIRCLE_DIAMETER - CIRCLE_THICKNESS) / 2;
  const totalSize = CIRCLE_DIAMETER + OVERFLOW * 2 - CIRCLE_THICKNESS;

  return (
    <StyledPortholeMedium
      borderPosition={OVERFLOW - CIRCLE_THICKNESS}
      totalSize={totalSize}
    >
      <ShadedBorder
        colorDark={borderColorDark}
        colorLight={borderColorLight}
        colorMid={borderColorMid}
        height={CIRCLE_DIAMETER}
        path={circlePath({
          cx: borderRadius,
          cy: borderRadius,
          r: borderRadius,
        })}
        thickness={CIRCLE_THICKNESS}
        width={CIRCLE_DIAMETER}
      />
      <WindowRound
        circleRadius={imageRadius}
        imageUrl={imageUrl}
        overflowRadius={OVERFLOW}
        overflowVertical={imageOverflowVertical}
        positionHorizontal={imagePositionHorizontal}
        positionVertical={imagePositionVertical}
        scale={imageScale}
      />
    </StyledPortholeMedium>
  );
};
