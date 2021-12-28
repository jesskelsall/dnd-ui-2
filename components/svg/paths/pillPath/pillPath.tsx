export interface IPillPathArgs {
  width: number;
  height: number;
  x: number;
  y: number;
}

export const pillPath = ({ width, height, x, y }: IPillPathArgs) => {
  const r = height / 2;
  const widthLine = width - r * 2;

  return `
    M ${x + r} ${y}
    h ${widthLine}
    a 1 1 0 0 1 0 ${height}
    h ${-widthLine}
    a 1 1 0 0 1 0 ${-height}
    Z
  `;
};
