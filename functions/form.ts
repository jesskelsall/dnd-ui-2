import _ from "lodash/fp";
import { Dispatch, SetStateAction } from "react";
import { OnChange } from "../types";

export const setFormData = <ValueType, DataType extends object>(
  value: ValueType,
  path: string,
  data: DataType,
  setter: Dispatch<SetStateAction<DataType>>,
  onChange?: OnChange<ValueType>
) => {
  if (onChange) onChange(value);
  return setter(_.set(path, value, data));
};

export const tabIndex = (skipTab: boolean) => (skipTab ? -1 : undefined);
