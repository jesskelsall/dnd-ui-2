import { NextPage } from "next";
import styled from "styled-components";
import {
  FilterBoxShadow,
  PathCircle,
  PathPill,
  PathStamp,
} from "../components/graphics";

const FancyFont = styled.h1`
  font-family: Metamorphous, Times New Roman, serif;
`;

const SVGPage: NextPage = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    }}
  >
    <FancyFont>Vētrall Astérr</FancyFont>
    <svg width={800} height={800} style={{ backgroundColor: "#EEE" }}>
      <FilterBoxShadow
        id="shadow"
        boxShadows={[
          {
            blur: 1,
            color: "rgb(255, 239, 112)",
            vOffset: 2,
          },
          {
            blur: 2,
            color: "rgb(91, 69, 43)",
            vOffset: -1,
          },
        ]}
      />
      <path
        // d={PathCircle({ r: 60, cx: 100, cy: 100 })}
        // d={PathStamp({ width: 200, height: 100, x: 20, y: 30, r: 15 })}
        d={PathPill({ width: 200, height: 60, x: 0, y: 0 })}
        fill="none"
        stroke="rgb(153, 109, 51)"
        strokeWidth={8}
        filter="url(#shadow)"
      />
    </svg>
  </div>
);

export default SVGPage;
