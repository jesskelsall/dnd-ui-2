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
      const { value } = event.target;
      setter(value === "" ? null : Number(value));
    }}
    placeholder={placeholder}
    tabIndex={skipTab ? -1 : undefined}
    type="number"
    value={typeof value === "number" ? value : ""}
  />
);
