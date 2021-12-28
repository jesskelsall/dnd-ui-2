import React from "react";

export interface IBoxShadow {
  blur: number;
  color: string;
  hOffset?: number;
  vOffset?: number;
}

export interface IBoxShadowFilterProps {
  boxShadows: IBoxShadow[];
  id: string;
}

export const BoxShadowFilter = ({ boxShadows, id }: IBoxShadowFilterProps) => (
  <filter id={id} x="-50%" y="-50%" width="200%" height="200%">
    {/* Blur setup */}
    <feComponentTransfer in="SourceAlpha" result="componentTransfer">
      <feFuncA type="table" tableValues="1 0" />
    </feComponentTransfer>

    {/* Create each box shadow */}
    {boxShadows.map(({ blur, color, hOffset, vOffset }, index) => (
      <React.Fragment key={index}>
        {/* Create the shadow and position it */}
        <feGaussianBlur in="componentTransfer" stdDeviation={blur} />
        <feOffset
          dx={hOffset || 0}
          dy={vOffset || 0}
          result={`shadow-${index}`}
        />

        {/* Colour the shadow */}
        <feFlood floodColor={color} />
        <feComposite in2={`shadow-${index}`} operator="in" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result={`colored-shadow-${index}`}
        />
      </React.Fragment>
    ))}

    {/* Layer up the original element and all the box shadows */}
    <feMerge>
      <feMergeNode in="SourceGraphic" />
      {boxShadows.map((_boxShadow, index) => (
        <feMergeNode key={index} in={`colored-shadow-${index}`} />
      ))}
    </feMerge>
  </filter>
);
