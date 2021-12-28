export interface ICirclePathArgs {
  cx: number;
  cy: number;
  r: number;
}

export const circlePath = ({ cx, cy, r }: ICirclePathArgs): string => `
  M ${cx - r}, ${cy}
  a ${r} ${r} 0 1 0 ${r * 2} 0
  a ${r} ${r} 0 1 0 ${-(r * 2)} 0
  Z
`;
