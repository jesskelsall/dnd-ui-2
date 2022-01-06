import styled from "styled-components";
import { PortraitCircle, TBackgroundAnimation } from "../../../graphics";

export const StyledCardPortrait = styled.div``;

export interface ICardPortraitProps {
  backgroundAnimation?: TBackgroundAnimation;
  backgroundFilterStyle?: string;
  backgroundImageUrl: string;
  backgroundScale: number;
  borderColorMid: string;
  borderColorLight: string;
  borderColorDark: string;
}

export const CardPortrait = ({
  backgroundAnimation,
  backgroundFilterStyle,
  backgroundImageUrl,
  backgroundScale,
  borderColorMid,
  borderColorLight,
  borderColorDark,
}: ICardPortraitProps) => (
  <StyledCardPortrait>
    <PortraitCircle
      backgroundAnimation={backgroundAnimation}
      backgroundFilterStyle={backgroundFilterStyle}
      backgroundImageUrl={backgroundImageUrl}
      backgroundScale={backgroundScale}
      borderColorMid={borderColorMid}
      borderColorLight={borderColorLight}
      borderColorDark={borderColorDark}
    />
  </StyledCardPortrait>
);
