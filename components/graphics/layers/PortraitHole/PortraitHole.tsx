import styled, { css } from "styled-components";
import { nanoid } from "nanoid";

export interface IStyledPortraitHoleProps {
  clipPathId: string;
  imageUrl: string;
  positionHorizontal: number;
  positionVertical: number;
  scale: number;
  showOverflow: boolean;
}

export const StyledPortraitHole = styled.svg<IStyledPortraitHoleProps>`
  background-image: url("${(props) => props.imageUrl}");
  background-repeat: no-repeat;
  background-size: ${(props) => props.scale}%;
  background-position: ${(props) => props.positionHorizontal}%
    ${(props) => props.positionVertical}%;
  clip-path: url(#${(props) => props.clipPathId});

  ${(props) =>
    props.showOverflow &&
    css`
      background-color: rgba(100, 150, 200, 0.5);
    `}
`;

export interface IPortraitHoleProps {
  circleRadius: number;
  imageUrl: string;
  overflowRadius?: number;
  overflowVertical?: number;
  positionHorizontal?: number;
  positionVertical?: number;
  scale?: number;
  showOverflow?: boolean;
}

export const PortraitHole = ({
  circleRadius,
  imageUrl,
  overflowRadius = 0,
  overflowVertical = 0.5,
  positionHorizontal = 50,
  positionVertical = 0,
  scale = 100,
  showOverflow = false,
}: IPortraitHoleProps) => {
  const id = nanoid();
  const totalRadius = circleRadius + overflowRadius;
  const totalSize = totalRadius * 2;

  return (
    <StyledPortraitHole
      clipPathId={id}
      height={totalSize}
      positionHorizontal={positionHorizontal}
      scale={scale}
      imageUrl={imageUrl}
      positionVertical={positionVertical}
      showOverflow={showOverflow}
      width={totalSize}
      viewBox={`0 0 ${totalSize} ${totalSize}`}
    >
      <defs>
        <clipPath id={id}>
          <circle cx={totalRadius} cy={totalRadius} r={circleRadius} />
          <rect width={totalSize} height={totalSize * overflowVertical} />
        </clipPath>
      </defs>
    </StyledPortraitHole>
  );
};
