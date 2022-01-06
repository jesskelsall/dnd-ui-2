import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FilterBoxShadow } from "../..";

export const BASE_FONT_SIZE = 30;
const LINE_HEIGHT_MULTIPLIER = 1.32;

export const StyledTextShaded = styled.text`
  font-family: Metamorphous, Times New Roman, serif;
`;

export interface ITextShadedProps {
  text: string;
  fontSize?: number;
  fontWeight?: "regular" | "bold";
  colorMid: string;
  colorLight: string;
  colorDark: string;
}

export const TextShaded = ({
  text,
  fontSize = BASE_FONT_SIZE,
  fontWeight,
  colorMid,
  colorLight,
  colorDark,
}: ITextShadedProps) => {
  const [textWidth, setTextWidth] = useState<number | undefined>(undefined);
  const textHeight = fontSize * LINE_HEIGHT_MULTIPLIER;
  const textRef = React.createRef<SVGTextElement>();

  useEffect(() => {
    setTextWidth(textRef.current?.getBBox().width);
  }, [fontSize, fontWeight, text, textRef]);

  const ratio = (baseNumber: number) =>
    (baseNumber * (fontSize / BASE_FONT_SIZE)) /
    (fontWeight === "regular" ? 2 : 1);

  return (
    <svg height={textHeight} width={textWidth}>
      <FilterBoxShadow
        boxShadows={[
          {
            blur: ratio(1),
            color: colorDark,
            vOffset: ratio(-1),
          },
          {
            blur: ratio(0.5),
            color: colorLight,
            vOffset: ratio(1.5),
          },
        ]}
        id="shadow"
      />
      <StyledTextShaded
        fill={colorMid}
        filter="url(#shadow)"
        fontSize={`${fontSize}px`}
        fontWeight={fontWeight || "regular"}
        ref={textRef}
        x="0"
        y={fontSize}
      >
        {text}
      </StyledTextShaded>
    </svg>
  );
};
