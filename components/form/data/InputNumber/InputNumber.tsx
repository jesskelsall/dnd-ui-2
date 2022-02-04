import _ from "lodash/fp";
import { setFormData, tabIndex } from "~/functions";
import { IInputProps, StyledInput } from "../InputText/InputText";

export const InputNumber = ({
  data,
  disabled = false,
  onChange,
  path,
  placeholder,
  setter,
  skipTab = false,
}: IInputProps<number | null>) => {
  const dataValue = _.get(path, data) as number | null;
  const fieldValue: number | string = _.isNumber(dataValue) ? dataValue : "";

  return (
    <StyledInput
      disabled={disabled}
      onChange={(event) => {
        const { value: eventValue } = event.target;
        const newValue = eventValue === "" ? null : Number(eventValue);
        setFormData<number | null>(newValue, path, data, setter, onChange);
      }}
      placeholder={placeholder}
      tabIndex={tabIndex(skipTab)}
      type="number"
      value={fieldValue}
    />
  );
};
