import _ from "lodash/fp";

export type Setter = (
  value: string,
  data: Record<string, unknown>,
  path: string
) => void;

export const defaultSetter = <ValueType>(
  value: ValueType,
  data: Record<string, unknown>,
  path: string
) => _.set(path, value, data);
