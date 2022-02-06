import _ from "lodash/fp";
import { setFormData, tabIndex } from "~/functions";
import { FormNumber } from "~/types";
import { IInputProps, StyledInput } from "../InputText/InputText";

export function InputNumber<DataType extends object>({
  data,
  disabled = false,
  onChange,
  path,
  placeholder,
  setter,
  skipTab = false,
}: IInputProps<FormNumber, DataType>) {
  const dataValue = _.get(path, data) as FormNumber;
  const fieldValue: number | string = _.isNumber(dataValue) ? dataValue : "";

  return (
    <StyledInput
      disabled={disabled}
      onChange={(event) => {
        const { value: eventValue } = event.target;
        const newValue = eventValue === "" ? null : Number(eventValue);
        setFormData<FormNumber, DataType>(
          newValue,
          path,
          data,
          setter,
          onChange
        );
      }}
      placeholder={placeholder}
      tabIndex={tabIndex(skipTab)}
      type="number"
      value={fieldValue}
    />
  );
}
