import { FocusEventHandler } from "react";

export type FormNumber = number | null;

export type OnBlur = FocusEventHandler<HTMLInputElement>;
export type OnChange<ValueType> = (value: ValueType) => void;
