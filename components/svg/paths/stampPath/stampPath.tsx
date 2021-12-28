export interface IStampPathArgs {
  width: number;
  height: number;
  r: number; // Corner circle radius
  x: number; // Horizontal position, from top left
  y: number; // Vertical position, from top left
}

export const stampPath = ({ width, height, r, x, y }: IStampPathArgs) => {
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
