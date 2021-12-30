export interface IPathStampArgs {
  width: number;
  height: number;
  r: number;
  x: number;
  y: number;
}

export const PathStamp = ({ width, height, r, x, y }: IPathStampArgs) => {
  const widthLine = width - r * 2;
  const heightLine = height - r * 2;

  return `
    M ${x + r} ${y}
    h ${widthLine}
    a ${r} ${r} 0 0 0 ${r} ${r}
    v ${heightLine}
    a ${r} ${r} 0 0 0 ${-r} ${r}
    h ${-widthLine}
    a ${r} ${r} 0 0 0 ${-r} ${-r}
    v ${-heightLine}
    a ${r} ${r} 0 0 0 ${r} ${-r}
    Z
  `;
};
