import { NextPage } from "next";
import { BoxShadowFilter } from "../components/svg/effects";
import { circlePath, stampPath, pillPath } from "../components/svg/paths";

const SVGPage: NextPage = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <svg width={800} height={800} style={{ backgroundColor: "#EEE" }}>
        <BoxShadowFilter
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
          // d={circlePath({ r: 60, cx: 100, cy: 100 })}
          // d={stampPath({ width: 200, height: 100, x: 20, y: 30, r: 15 })}
          d={pillPath({ width: 200, height: 60, x: 0, y: 0 })}
          fill="none"
          stroke="rgb(153, 109, 51)"
          strokeWidth={8}
          filter="url(#shadow)"
        />
      </svg>
    </div>
  );
};

export default SVGPage;
