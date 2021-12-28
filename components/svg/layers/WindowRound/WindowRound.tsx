import styled, { css } from "styled-components";
import { nanoid } from "nanoid";

export interface IStyledWindowRoundProps {
  size: number;
}

export const StyledWindowRound = styled.div(
  (props: IStyledWindowRoundProps) => css`
    position: relative;
    width: ${props.size}px;
    height: ${props.size}px;
  `
);

export interface IWindowProps {
  clipPathId: string;
  imageUrl: string;
  positionHorizontal: number;
  positionVertical: number;
  scale: number;
  showOverflow: boolean;
}

export const Window = styled.svg(
  (props: IWindowProps) => css`
    background-image: url("${props.imageUrl}");
    background-repeat: no-repeat;
    background-size: ${props.scale}%;
    background-position: ${props.positionHorizontal}% ${props.positionVertical}%;
    clip-path: url(#${props.clipPathId});

    ${props.showOverflow &&
    css`
      background-color: rgba(100, 150, 200, 0.5);
    `}
  `
);

export interface IWindowRoundProps {
  circleRadius: number;
  imageUrl: string;
  overflowRadius?: number;
  overflowVertical?: number;
  positionHorizontal?: number;
  positionVertical?: number;
  scale?: number;
  showOverflow?: boolean;
}

export const WindowRound = ({
  circleRadius,
  imageUrl,
  overflowRadius = 0,
  overflowVertical = 0.5,
  positionHorizontal = 50,
  positionVertical = 0,
  scale = 100,
  showOverflow = false,
}: IWindowRoundProps) => {
  const id = nanoid();
  const totalRadius = circleRadius + overflowRadius;
  const totalSize = totalRadius * 2;

  return (
    <StyledWindowRound size={totalSize}>
      <Window
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
      </Window>
    </StyledWindowRound>
  );
};
