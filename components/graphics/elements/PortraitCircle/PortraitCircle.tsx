import { nanoid } from "nanoid";
import styled from "styled-components";
import {
  BackgroundTexture,
  BorderShaded,
  PortraitHole,
  StyledBorderShaded,
  TBackgroundAnimation,
} from "../../layers";
import { FilterBoxShadow, PathCircle } from "../../svg";

const BackgroundShadow = styled.svg``;

export interface IStyledPortraitCircleProps {
  clipPathId: string;
  innerDiameter: number;
  innerPosition: number;
  outerPosition: number;
  totalSize: number;
}

export const StyledPortraitCircle = styled.div<IStyledPortraitCircleProps>`
  position: relative;
  width: ${(props) => props.totalSize}px;
  height: ${(props) => props.totalSize}px;

  ${BackgroundShadow}, ${BackgroundTexture} {
    position: absolute;
    top: ${(props) => props.innerPosition}px;
    left: ${(props) => props.innerPosition}px;
    width: ${(props) => props.innerDiameter}px;
    height: ${(props) => props.innerDiameter}px;
  }

  ${BackgroundTexture} {
    clip-path: url(#${(props) => props.clipPathId});
  }

  ${StyledBorderShaded} {
    position: absolute;
    top: ${(props) => props.outerPosition}px;
    left: ${(props) => props.outerPosition}px;
  }
`;

export interface IPortraitCircleProps {
  backgroundAnimation?: TBackgroundAnimation;
  backgroundFilterStyle?: string;
  backgroundImageUrl: string;
  backgroundScale: number;
  borderColorMid: string;
  borderColorLight: string;
  borderColorDark: string;
  borderDiameter: number;
  borderThickness?: number;
  imageOverflowRadius: number;
  imageOverflowVertical: number;
  imagePositionHorizontal: number;
  imagePositionVertical: number;
  imageScale: number;
  imageUrl: string;
}

export const PortraitCircle = ({
  backgroundAnimation,
  backgroundFilterStyle,
  backgroundImageUrl,
  backgroundScale,
  borderColorMid,
  borderColorLight,
  borderColorDark,
  borderDiameter, // The diameter of the circle BorderShaded is centered on
  borderThickness = 8,
  imageOverflowRadius,
  imageOverflowVertical,
  imagePositionHorizontal,
  imagePositionVertical,
  imageScale,
  imageUrl,
}: IPortraitCircleProps) => {
  const totalSize = borderDiameter + imageOverflowRadius * 2 - borderThickness;
  const borderRadius = borderDiameter / 2;
  const innerRadius = (borderDiameter - borderThickness) / 2;
  const innerDiameter = innerRadius * 2;
  const outerPosition = imageOverflowRadius - borderThickness;

  const innerCircle = (
    <path
      d={PathCircle({ cx: innerRadius, cy: innerRadius, r: innerRadius })}
    />
  );

  const backgroundClipPathId = nanoid();
  const backgroundFilterId = nanoid();

  return (
    <StyledPortraitCircle
      clipPathId={backgroundClipPathId}
      innerDiameter={innerDiameter}
      innerPosition={imageOverflowRadius}
      outerPosition={outerPosition}
      totalSize={totalSize}
    >
      {/* Background image */}
      <BackgroundTexture
        animation={backgroundAnimation}
        filterStyle={backgroundFilterStyle}
        imageUrl={backgroundImageUrl}
        scale={backgroundScale}
        unit="px"
      >
        <defs>
          <clipPath id={backgroundClipPathId}>{innerCircle}</clipPath>
        </defs>
      </BackgroundTexture>

      {/* Shadow cast on the background from the border circle */}
      <BackgroundShadow filter={`url(#${backgroundFilterId})`}>
        <FilterBoxShadow
          boxShadows={[
            {
              blur: borderThickness,
              color: "rgba(0, 0, 0, 0.4)",
              vOffset: borderThickness,
            },
          ]}
          id={backgroundFilterId}
          transparent
        />
        {innerCircle}
      </BackgroundShadow>

      {/* Border circle */}
      <BorderShaded
        colorDark={borderColorDark}
        colorLight={borderColorLight}
        colorMid={borderColorMid}
        height={borderDiameter}
        path={PathCircle({
          cx: borderRadius,
          cy: borderRadius,
          r: borderRadius,
        })}
        thickness={borderThickness}
        width={borderDiameter}
      />

      {/* Character portrait */}
      <PortraitHole
        circleRadius={innerRadius}
        imageUrl={imageUrl}
        overflowRadius={imageOverflowRadius}
        overflowVertical={imageOverflowVertical}
        positionHorizontal={imagePositionHorizontal}
        positionVertical={imagePositionVertical}
        scale={imageScale}
      />
    </StyledPortraitCircle>
  );
};
