import styled, { css } from "styled-components";

export interface IStyledInteractiveMapProps {
  imageUrl: string;
  scale: number;
  positionHorizontal: number;
  positionVertical: number;
}

export const StyledInteractiveMap = styled.div(
  (props: IStyledInteractiveMapProps) => css`
    width: 100%;
    height: 100%;
    background-color: #000;
    background-image: url("${props.imageUrl}");
    background-repeat: no-repeat;
    background-size: ${props.scale}%;
    background-position: ${props.positionHorizontal}% ${props.positionVertical}%;
    transition: background-size 3s ease, background-position 1.5s ease-out;
  `
);

export type IInteractiveMapProps = IStyledInteractiveMapProps;

export const InteractiveMap = ({
  imageUrl,
  scale,
  positionHorizontal,
  positionVertical,
}: IInteractiveMapProps) => (
  <StyledInteractiveMap
    imageUrl={imageUrl}
    scale={scale}
    positionHorizontal={positionHorizontal}
    positionVertical={positionVertical}
  />
);
