export interface IPathCircleArgs {
  cx: number;
  cy: number;
  r: number;
}

export const PathCircle = ({ cx, cy, r }: IPathCircleArgs): string => `
  M ${cx - r}, ${cy}
  a ${r} ${r} 0 1 0 ${r * 2} 0
  a ${r} ${r} 0 1 0 ${-(r * 2)} 0
  Z
`;
