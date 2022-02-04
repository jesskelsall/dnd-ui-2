import _ from "lodash/fp";
import { Dispatch, SetStateAction } from "react";

export type FormData = Record<string, unknown>;
export type Setter = Dispatch<SetStateAction<FormData>>;
export type OnChange<ValueType> = (value: ValueType) => void;

export const setFormData = <ValueType>(
  value: ValueType,
  path: string,
  data: FormData,
  setter: Setter,
  onChange?: OnChange<ValueType>
) => {
  if (onChange) onChange(value);
  return setter(_.set(path, value, data));
};

export const tabIndex = (skipTab: boolean) => (skipTab ? -1 : undefined);
