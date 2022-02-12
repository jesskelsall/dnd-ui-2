import { Dispatch, SetStateAction } from "react";
import { IDataRecord, OnChange } from "../../../../types";
import { Dropdown } from "../../../framework";

export interface IForeignKeyDropdownProps<DataType extends object> {
  collection: Record<string, IDataRecord>;
  data: DataType;
  disabled?: boolean;
  onChange?: OnChange<string>;
  optional?: boolean;
  path: string;
  placeholder?: string;
  setter: Dispatch<SetStateAction<DataType>>;
  skipTab?: boolean;
}

export function ForeignKeyDropdown<DataType extends object>({
  collection,
  data,
  disabled = false,
  onChange,
  optional = false,
  path,
  placeholder,
  setter,
  skipTab = false,
}: IForeignKeyDropdownProps<DataType>) {
  const optionalOption = optional ? [{ label: "[None]", value: "" }] : [];
  const options = [
    ...optionalOption,
    ...Object.values(collection).map((record) => ({
      label: record.name,
      value: record.id,
    })),
  ];

  return (
    <Dropdown<DataType, string>
      data={data}
      disabled={disabled}
      onChange={onChange}
      options={options}
      path={path}
      placeholder={placeholder}
      setter={setter}
      skipTab={skipTab}
    />
  );
}
