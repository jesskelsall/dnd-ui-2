export type TOptionValue = string | number | null;

export interface IOption<Value extends TOptionValue> {
  label: string;
  value: Value;
}
