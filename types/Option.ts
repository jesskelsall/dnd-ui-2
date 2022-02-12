export type TOptionValue = string | number | null;

export interface IOption<Value extends TOptionValue> {
  disabled?: boolean;
  label: string;
  value: Value;
}
