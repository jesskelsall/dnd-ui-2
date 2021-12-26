import styled, { css } from "styled-components";

export interface IStyledInteractiveMapProps {
  imageUrl: string;
  size: number;
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
    background-size: ${props.size}%;
    background-position: ${props.positionHorizontal}% ${props.positionVertical}%;
    transition: background-size 3s ease, background-position 1.5s ease-out;
  `
);

export interface IInteractiveMapProps extends IStyledInteractiveMapProps {}

export const InteractiveMap = ({
  imageUrl,
  size,
  positionHorizontal,
  positionVertical,
}: IInteractiveMapProps) => (
  <StyledInteractiveMap
    imageUrl={imageUrl}
    size={size}
    positionHorizontal={positionHorizontal}
    positionVertical={positionVertical}
  />
);
