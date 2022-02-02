import { IInputProps, StyledInput } from "../InputText/InputText";

export const InputNumber = ({
  disabled,
  placeholder,
  setter,
  skipTab,
  value,
}: IInputProps<number | null>) => (
  <StyledInput
    disabled={disabled}
    onChange={(event) => {
      const { value: eventValue } = event.target;
      setter(eventValue === "" ? null : Number(eventValue));
    }}
    placeholder={placeholder}
    tabIndex={skipTab ? -1 : undefined}
    type="number"
    value={typeof value === "number" ? value : ""}
  />
);
