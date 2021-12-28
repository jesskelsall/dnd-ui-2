import styled, { css } from "styled-components";

export interface IBackgroundTextureProps {
  imageUrl: string;
  scale: number;
}

export const BackgroundTexture = styled.div(
  (props: IBackgroundTextureProps) => css`
    @keyframes slide {
      0% {
        background-position: 0% 0%;
      }
      100% {
        background-position: 200% 100%;
      }
    }

    width: 100%;
    height: 100%;
    background-image: url("${props.imageUrl}");
    background-repeat: repeat;
    background-size: ${props.scale}%;
    animation: slide 50s linear infinite;
    filter: saturate(0);
  `
);
