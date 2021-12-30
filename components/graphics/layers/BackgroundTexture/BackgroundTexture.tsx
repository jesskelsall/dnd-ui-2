import { nanoid } from "nanoid";
import styled, { css } from "styled-components";

export interface IBackgroundSlide {
  type: "slide";
  speed: number; // How long the animation loop is
  horizontal: number; // How far the image width travels during the animation loop
  vertical: number; // How far the image height travels during the animation loop
}

export type TBackgroundAnimation = IBackgroundSlide;

export interface IBackgroundTextureProps {
  imageUrl: string;
  scale: number;
  filterStyle?: string;
  animation?: TBackgroundAnimation;
  unit?: string;
}

export const BackgroundTexture = styled.svg(
  (props: IBackgroundTextureProps) => {
    const keyframeId = nanoid();
    const unit = props.unit || "%";

    return css`
      width: 100%;
      height: 100%;
      background-image: url("${props.imageUrl}");
      background-repeat: repeat;
      background-size: ${props.scale}%;

      ${props.filterStyle &&
      css`
        filter: ${props.filterStyle};
      `}

      ${props.animation?.type === "slide" &&
      css`
        @keyframes ${keyframeId} {
          0% {
            background-position: 0 ${unit} 0 ${unit};
          }
          100% {
            background-position: ${props.animation.horizontal}${unit} ${props
                .animation.vertical}${unit};
          }
        }

        animation: ${keyframeId} ${props.animation.speed}s linear infinite;
      `};
    `;
  }
);
